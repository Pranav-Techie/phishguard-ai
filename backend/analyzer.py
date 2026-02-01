import re

SUSPICIOUS_KEYWORDS = [
    "urgent", "verify", "click", "login", "update",
    "suspended", "limited time", "act now", "passworrd",
    "otp", "bank", "payment"
]

def analyze_text(text: str):
    text_lower = text.lower()

    reasons = []
    highlights = []
    score = 0

    # Check for suspicious keywords
    for word in SUSPICIOUS_KEYWORDS:
        if word in text_lower:
            score += 1
            highlights.append({
                "text": word,
                "reason": f"Suspicious keyword detected: '{word}'"
            })
            reasons.append(
                f"The message uses the word '{word}', which is commonly used in phishing attempts."
            )

    # Check for URLs
    urls = re.findall(r'(https?://\S+|www\.\S+)', text_lower)
    if urls:
        score += 2
        highlights.append({
            "text": urls[0],
            "reason": "Message contains a link, which may redirect to a fake website."
        })
        reasons.append(
            "The message contains a link, which is a common phishing technique."
        )

    is_phishing = score >= 2

    advice = [
        "Do not click on any unknown links.",
        "Verify the sender from official sources.",
        "Never share any OTP or payment details with anyone."
    ]

    # 
    # ALWAYS RETURN (THIS FIXES NULL)
    return {
        "is_phishing": is_phishing,
        "confidence": round(min(score / 5, 1.0), 2),
        "highlights": highlights,
        "explanation": reasons,
        "advice": advice
    }
