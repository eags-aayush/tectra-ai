# app/services/llm_reasoner.py
import os
import requests
from groq import Groq
from app.config import GROQ_API_KEY

GROQ_API_KEY = os.getenv("GROQ_API_KEY")
GROQ_MODEL = "llama3-8b-8192"  # Or use "llama3-70b-8192"

parse_prompt = open("prompts/parse_query.txt").read()
decision_prompt = open("prompts/generate_decision.txt").read()

def groq_chat(prompt, model="llama3-8b-8192"):
    headers = {
        "Authorization": f"Bearer {GROQ_API_KEY}",
        "Content-Type": "application/json"
    }
    body = {
        "model": model,
        "messages": [{"role": "user", "content": prompt}]
    }
    res = requests.post("https://api.groq.com/openai/v1/chat/completions", json=body, headers=headers)
    data = res.json()
    if "choices" in data:
        return data["choices"][0]["message"]["content"]
    return f"Error: {data.get('error', 'No valid response')}"
    
def answer_query_with_clauses(query, clauses):
    joined_clauses = "\n\n".join([clause["text"] for clause in clauses])
    prompt = f"""
You are an insurance assistant. Based on the policy clauses below, answer the question clearly in one sentence.
If there is no coverage, reply: "Not Covered."

CLAUSES:
{joined_clauses}

QUESTION:
{query}
"""
    return groq_chat(prompt)

def parse_query(user_query: str):
    prompt = parse_prompt.replace("{query}", user_query)
    return groq_chat(prompt)

def generate_decision(parsed_query, retrieved_chunks):
    context = "\n".join([chunk['text'] for chunk in retrieved_chunks])
    prompt = decision_prompt.replace("{context}", context).replace("{query}", parsed_query)
    return groq_chat(prompt)

