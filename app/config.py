import os
from dotenv import load_dotenv
load_dotenv()

# Groq API key
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

# Embedding model (we're using a local model like MiniLM)
EMBEDDING_MODEL = "all-MiniLM-L6-v2"

# FAISS vector index path
VECTOR_INDEX_PATH = "vector_store/faiss_index/index"

# Directories for files
UPLOAD_DIR = "data/uploads"
CHUNK_DIR = "data/processed"
