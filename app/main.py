from fastapi import FastAPI
from app.routes import query

app = FastAPI()
app.include_router(query.router)

@app.get("/")
def root():
    return {"status": "LLM Policy Query System Running"}
