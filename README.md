# Portfolio Website with RAG Chatbot

This project is a **Personal portfolio website** integrated with a **Retrieval-Augmented Generation (RAG) based chatbot**. The chatbot is powered by **FastAPI** on the backend and uses **FAISS** as the vector database to answer queries about the portfolio. The system embeds portfolio-related content, stores it in FAISS, and retrieves relevant information to answer user queries in real-time.

## Features

* **Personal Portfolio Website** built with TypeScript (React + TailwindCSS).
* **RAG Chatbot** that answers questions about the portfolio.
* **FAISS Vector Database** for efficient similarity search.
* **Backend with FastAPI** for serving embeddings, retrieval, and chatbot responses.
* **Data Preparation Notebook** to handle:

  * Loading data
  * Chunking and preprocessing
  * Generating embeddings
  * Creating and populating FAISS vector DB

## Tech Stack

### Frontend

* TypeScript
* React
* TailwindCSS

### Backend

* FastAPI
* Python
* FAISS (Vector Database)
* LangChain (for RAG pipeline)
* OpenAI API (or any embedding & LLM provider)

## Project Structure

```
Portfolio_Website_With_Chatbot/
│
├── frontend/                     
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/                      
│   ├── main.py                   
│   ├── requirements.txt          
│   ├── faiss_index/                
│   └── db.ipynb 
│         
└── README.md
```

## Setup Instructions

### Prerequisites

* Node.js (>= 18)
* Python (>= 3.9)
* pip / virtualenv
* Gemini API key

---

### 1. Clone the repository

```bash
git clone https://github.com/Prureddy/Portfolio_Website_With_Chatbot.git
cd Portfolio_Website_With_Chatbot
```

---

### 2. Setup Backend (FastAPI + FAISS)

```bash
cd backend
python -m venv venv
source venv/bin/activate   # On Windows use venv\Scripts\activate
pip install -r requirements.txt
```

Run the FastAPI server:

```bash
uvicorn main:app --reload
```

Backend will start on `http://127.0.0.1:8000`

---

### 3. Setup Frontend (React + TypeScript)

```bash
cd frontend
npm i
npm run dev
```

Frontend will start on `http://localhost:8080`

---

### 4. Prepare Data and Create Vector DB

Run the Jupyter notebook to:

* Load and preprocess portfolio data
* Generate embeddings
* Store vectors in FAISS database

Notebook: `backend/db.ipynb`

---

## Usage

* Open the frontend in your browser.
* Explore the portfolio.
* Use the integrated chatbot to ask questions about projects, skills, and experiences.
* The chatbot retrieves answers using the FAISS vector DB and responds in real-time.

---

## Future Improvements

* Add authentication for admin features.
* Deploy on cloud platforms (Vercel for frontend, Render/Heroku for backend).
* Improve chatbot context handling with conversation memory.
* Extend dataset for broader queries.

---

## License

This project is licensed under the **MIT License**.

