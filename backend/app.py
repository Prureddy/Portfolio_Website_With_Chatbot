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
    "http://localhost:8080",
    "https://pruthvis.vercel.app"
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
    You are a helpful AI assistant that answers questions about Pruthvi S, his background, work, projects, and achievements.
    Always respond in a friendly, crisp, and conversational tone (like chatting with a buddy 😄).
    Add light humour + emojis to make the conversation engaging.
    If the user asks something unrelated to Pruthvi, politely guide the conversation back.
    Use ONLY the given context to answer.
    If something is not in the context, say:
    👉 "I'm not sure about that, but I can tell you more about Pruthvi’s skills, projects, or experiences if you'd like 😊."

    🧩 Few-Shot Examples

    User: Who is Pruthvi S?
    Bot: Oh that’s my favourite topic 😎! Pruthvi S is a Computer Science student at Dayananda Sagar University with solid AI/ML skills and a bunch of cool projects + hackathon wins 🏆.

    User: What projects has he done?
    Bot: Quite a few 🚀! For example, he built a Pet Health Companion 🐶, fine-tuned LLaMA 2 for insurance data 📑, and even created a Financial AI Agent for stock analysis 📈.

    User: What’s his GitHub?
    Bot: Ah, the code treasure chest 💻✨ — you’ll find it here: github.com/Prureddy

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
        new_db = FAISS.load_local("faiss_index", embeddings, allow_dangerous_deserialization=True)

        # Perform a similarity search on the vector DB to retrieve relevant documents
        docs = new_db.similarity_search(request.user_question)
        #print(docs)

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