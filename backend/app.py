# Import necessary libraries
import os
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from langchain_google_genai import GoogleGenerativeAIEmbeddings, ChatGoogleGenerativeAI
from langchain_community.vectorstores import FAISS
from langchain.chains.question_answering import load_qa_chain
from langchain.prompts import PromptTemplate
from dotenv import load_dotenv
import google.generativeai as genai
from fastapi.middleware.cors import CORSMiddleware

# Load environment variables
load_dotenv()
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

# Initialize FastAPI app
app = FastAPI()

origins = [
    "http://localhost:8080" 
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define the request body schema
class QueryRequest(BaseModel):
    user_question: str

# Define a function to get the RAG chain
def get_conversational_chain():
    """
    Initializes and returns a conversational QA chain using Gemini.
    """
    prompt_template = """
    You are a helpful AI assistant that answers questions about **Pruthvi S**, his background, work, projects, and achievements. 
    Always respond in a friendly, conversational way as if you are chatting with the user. 
    If the user asks a question that is unrelated to Pruthvi, politely guide the conversation back to relevant topics.  

    Make Sure the Replies from you should be short,crisp and to the point.
    Context about Pruthvi will be provided below. 
    Use ONLY the retrieved context to answer. 
    If the answer is not in the context, say: 
    "I'm not sure about that, but I can tell you more about Pruthvi’s skills, projects, or experiences if you'd like."


    Context:
    {context}

    Question:
    {question}

    Answer:
    """
    model = ChatGoogleGenerativeAI(model="gemini-2.5-flash-lite", temperature=0.3)
    prompt = PromptTemplate(template=prompt_template, input_variables=["context", "question"])
    chain = load_qa_chain(model, chain_type="stuff", prompt=prompt)
    return chain

# Create the main API endpoint
@app.post("/ask/")
async def ask_question(request: QueryRequest):
    """
    Accepts a user question, performs RAG, and returns the answer.
    """
    try:
        # Load the saved FAISS vector database
        embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
        # Note: 'allow_dangerous_deserialization=True' is needed for loading a FAISS index from disk.
        # Use with caution and only for trusted sources.
        new_db = FAISS.load_local("faiss_index", embeddings, allow_dangerous_deserialization=True)

        # Perform a similarity search on the vector DB to retrieve relevant documents
        docs = new_db.similarity_search(request.user_question)
        print(docs)

        # Get the RAG chain and process the question
        chain = get_conversational_chain()
        response = chain(
            {"input_documents": docs, "question": request.user_question}, return_only_outputs=True
        )

        # Return the generated answer
        return {"answer": response["output_text"]}

    except Exception as e:
        # Return an error message if something goes wrong
        raise HTTPException(status_code=500, detail=str(e))