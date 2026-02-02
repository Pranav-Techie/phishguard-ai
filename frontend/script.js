async function analyzeMessage() {
  const text = document.getElementById("messageInput").value.trim();
  if (!text) {
    alert("Please enter a message");
    return;
  }

  const resultDiv = document.getElementById("result");
  resultDiv.classList.add("hidden");

  // Show loading / cold-start message immediately
const statusEl = document.getElementById("status");
statusEl.innerText = "Waking up secure analysis engine...";
statusEl.style.color = "#facc15";

resultDiv.classList.remove("hidden");

// Force minimum loading time for better UX demo
await new Promise(resolve => setTimeout(resolve, 1000));


  try {
    const response = await fetch("https://phishguard-ai-backend-9nd8.onrender.com/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text })
    });

    const data = await response.json();
    console.log("API RESPONSE:", data); // DEBUG LINE

    const statusEl = document.getElementById("status");

if (data.is_phishing) {
  statusEl.innerText = "Phishing Detected";
  statusEl.style.color = "#ef4444";
} else {
  statusEl.innerText = "Message Looks Safe";
  statusEl.style.color = "#22c55e";
}


    document.getElementById("confidence").innerText =
      Math.round((data.confidence || 0) * 100) + "%";

    const highlights = document.getElementById("highlights");
    highlights.innerHTML = "";
    (data.highlights || []).forEach(item => {
      const li = document.createElement("li");
      li.innerText = `${item.text} — ${item.reason}`;
      highlights.appendChild(li);
    });

    const explanations = document.getElementById("explanations");
    explanations.innerHTML = "";
    (data.explanation || []).forEach(exp => {
      const li = document.createElement("li");
      li.innerText = exp;
      explanations.appendChild(li);
    });

    const advice = document.getElementById("advice");
    advice.innerHTML = "";
    (data.advice || []).forEach(a => {
      const li = document.createElement("li");
      li.innerText = a;
      advice.appendChild(li);
    });

    // Hide or show sections based on content
document.getElementById("signalsSection").style.display =
  (data.highlights && data.highlights.length > 0) ? "block" : "none";

document.getElementById("explanationSection").style.display =
  (data.explanation && data.explanation.length > 0) ? "block" : "none";

// Advice is always useful → always show
document.getElementById("adviceSection").style.display = "block";

resultDiv.classList.remove("hidden");


  } catch (error) {
    console.error("FRONTEND ERROR:", error);
    alert("Frontend error. Check browser console (F12).");
  }
}
