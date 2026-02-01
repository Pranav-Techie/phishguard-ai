# PhishGuard AI

**Explainable Phishing Detection for Messages**

PhishGuard AI is a real-time, explainable phishing detection system that analyzes text messages and clearly explains *why* a message is suspicious.  
Unlike black-box spam filters, PhishGuard AI highlights risky signals, provides human-readable explanations, and gives actionable safety advice.

**Live Demo:**  
Frontend → https://phishguard-ai-hazel.vercel.app/  
Backend API → https://phishguard-ai-backend-9nd8.onrender.com/

---

## Problem Statement

Phishing attacks through SMS, email, and chat messages are increasing rapidly.  
While many systems detect phishing, most fail to explain *why* a message is dangerous, making users confused and more likely to fall for scams.

**Key challenges:**
- Lack of transparency in phishing detection
- Users don’t understand risk signals
- Black-box AI systems reduce trust

---

## Solution

PhishGuard AI solves this by combining **rule-based intelligence with explainability**.

The system:
- Detects phishing-related patterns and keywords
- Highlights suspicious signals
- Explains the reasoning in simple language
- Provides clear safety advice to users

This makes phishing detection **transparent, educational, and trustworthy**.

---

## How It Works

1. User enters a message in the web interface
2. Frontend sends the message to the FastAPI backend
3. Backend analyzes the text for phishing indicators
4. API returns:
   - Phishing verdict
   - Confidence score
   - Detected signals
   - Explanation
   - Safety advice
5. Frontend displays results with color-coded feedback

---

## Features

- Real-time phishing detection
- Explainable AI output (no black box)
- Confidence score
- Color-coded results (Safe / Phishing)
- Highlighted suspicious keywords
- User-friendly safety advice
- Fully deployed (Vercel + Render)

---

## Tech Stack

**Frontend**
- HTML
- CSS
- JavaScript
- Deployed on **Vercel**

**Backend**
- Python
- FastAPI
- Uvicorn
- Deployed on **Render**

---

## Future Scope

- Browser extension for real-time email phishing detection
- SMS phishing detection on mobile devices
- WhatsApp / Telegram scam analysis
- Hybrid ML + rule-based phishing detection
- Multi-language phishing detection support

---

## Author

**Pranav Kumar Jha**  
GitHub: https://github.com/Pranav-Techie

---

## Conclusion

PhishGuard AI demonstrates how explainable security systems can empower users to
understand and avoid phishing attacks.  
By focusing on transparency and usability, the project delivers a practical and
trustworthy solution for real-world communication platforms.

