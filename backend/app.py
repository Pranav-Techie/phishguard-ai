from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from analyzer import analyze_text

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class AnalyzeRequest(BaseModel):
    text: str

@app.get("/")
def root():
    return {"message": "PhishGuard AI backend is running"}

@app.post("/analyze")
def analyze(request: AnalyzeRequest):
    result = analyze_text(request.text)
    return result
