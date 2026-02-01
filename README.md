# PhishGuard AI

**Explainable Phishing Detection for Messages**

PhishGuard AI is a real-time, explainable phishing detection system that analyzes text messages and clearly explains *why* a message is suspicious.  
Unlike black-box spam filters, PhishGuard AI highlights risky signals, provides human-readable explanations, and gives actionable safety advice to users.

**Live Demo**  
Frontend: https://phishguard-ai-hazel.vercel.app/  
Backend API: https://phishguard-ai-backend-9nd8.onrender.com/

---

## Problem Statement

Phishing attacks through SMS, email, and chat platforms are increasing rapidly.  
Although many systems can detect phishing, most operate as **black boxes**, providing no explanation of *why* a message is dangerous.

This lack of transparency:
- Reduces user trust
- Prevents learning and awareness
- Makes users more vulnerable to future attacks

---

## Solution

PhishGuard AI addresses this problem by focusing on **explainability-first phishing detection**.

Instead of returning a simple “safe” or “unsafe” result, the system:
- Identifies suspicious linguistic patterns (urgency, authority, action pressure)
- Highlights risky keywords and links
- Explains the reasoning in clear, human-readable language
- Provides actionable safety advice

This approach makes phishing detection **transparent, educational, and trustworthy**.

---

## Hybrid AI Approach

PhishGuard AI follows a **hybrid AI design philosophy**.

The current implementation uses **rule-based, explainable intelligence** to detect phishing indicators.  
This ensures predictable behavior, transparency, and strong user trust—critical factors in security applications.

The system architecture is designed to support a future **machine learning–based scoring layer**, where lightweight NLP models can provide probabilistic confidence scores alongside rule-based reasoning.

This hybrid approach balances:
- **Explainability** – users understand *why* a message is risky  
- **Accuracy** – ML-assisted scoring can improve detection  
- **Trust** – no blind, black-box decisions  

By prioritizing explainable AI first, PhishGuard AI ensures users are informed rather than blindly warned.

---

## How It Works

1. The user enters a message in the web interface  
2. The frontend sends the message to the FastAPI backend  
3. The backend analyzes the text for phishing indicators  
4. The API returns:
   - Phishing verdict  
   - Confidence score  
   - Detected signals  
   - Explanation  
   - Safety advice  
5. Results are displayed with clear, color-coded feedback  

---

## Key Features

- Real-time phishing detection  
- Explainable AI output (no black box)  
- Confidence scoring  
- Color-coded results (Safe / Phishing)  
- Highlighted suspicious keywords  
- Clear safety recommendations  
- Fully deployed and publicly accessible  

---

## Tech Stack

**Frontend**
- HTML  
- CSS  
- JavaScript  
- Deployed on Vercel  

**Backend**
- Python  
- FastAPI  
- Uvicorn  
- Deployed on Render  

---

## Future Scope

- 🔌 Browser extension for Gmail and Chrome phishing detection  
- 📱 SMS phishing detection for Android devices  
- 💬 WhatsApp / Telegram scam analysis through bot or paste-based input  
- 🤖 Hybrid ML + rule-based phishing detection for improved accuracy  
- 🌐 Multi-language phishing detection for global users  

---

## Author

**Pranav Kumar Jha**  
GitHub: https://github.com/Pranav-Techie  

---

## Conclusion

PhishGuard AI demonstrates how explainable security systems can empower users to
understand and avoid phishing attacks.  
By prioritizing transparency, trust, and real-world usability, the project delivers
a practical and scalable solution for modern communication platforms.
