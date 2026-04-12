import { useState } from "react";
import { Send, Sparkles } from "lucide-react";

export default function Ai() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isAsking, setIsAsking] = useState(false);

  const suggestions = [
    "Explain quantum computing",
    "Write a Python web scraper",
    "Best practices for React",
    "How does blockchain work?",
  ];

  // 🔥 FAQAT SHU FUNKSIYA O'ZGARDI
  const handleSend = async () => {
    if (!question.trim()) return;

    setIsAsking(true);
    try {
      const res = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=AIzaSyDJlIwGErxjWVpF2BPtE9QZ9EBg3QzPZtw",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  { text: question }
                ]
              }
            ]
          }),
        }
      );

      const data = await res.json();
      console.log("STATUS:", res.status);
      console.log("DATA:", data);
      console.log("FULL RESPONSE:", data);

      const text =
        data?.candidates?.[0]?.content?.parts?.[0]?.text;

      setAnswer(text || "Javob topilmadi ❌");

    } catch (err) {
      setAnswer("Xatolik yuz berdi ❌");
    }

    setIsAsking(false);
    setQuestion("");
  };

  const handleSuggestionClick = (suggestion) => {
    setQuestion(suggestion);
  };

  return (
    <div className="size-full flex items-center justify-center p-4 md:p-8 h-screen bg-black">
      <div className="w-full max-w-4xl">

        {/* Title */}
        <h1
          className="text-center mb-10 text-3xl md:text-5xl"
          style={{
            color: "#fff",
            textShadow:
              "0 0 25px rgba(0, 240, 255, 0.4), 0 0 50px rgba(82, 0, 255, 0.2)",
          }}
        >
          AI sizga tushuntirib beradi
        </h1>

        {/* Input */}
        <div className="relative mb-6">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Savolingizni yozing..."
            className="w-full px-4 md:px-6 py-3 md:py-5 pr-20 md:pr-36 rounded-2xl text-white"
            style={{
              backgroundColor: "rgba(0,0,0,0.8)",
              border: "1px solid rgba(0,240,255,0.3)",
            }}
          />

          <button
            onClick={handleSend}
            disabled={!question.trim() || isAsking}
            className="absolute right-3 top-1/2 -translate-y-1/2 px-4 py-2 md:px-6 md:py-3 rounded-xl text-white"
            style={{
              background:
                "linear-gradient(135deg,#00F0FF,#5200FF,#FF2DF7)",
            }}
          >
            {isAsking ? "..." : "Send"}
            <Send className="w-4 h-4 inline ml-2" />
          </button>
        </div>

        {/* OUTPUT BOX */}
        {answer && (
          <div
            className="mb-8 p-5 rounded-xl text-white"
            style={{
              backgroundColor: "rgba(0,0,0,0.7)",
              border: "1px solid rgba(0,240,255,0.2)",
              boxShadow: "0 0 20px rgba(82,0,255,0.15)",
            }}
          >
            {answer}
          </div>
        )}

        {/* Suggestions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {suggestions.map((s, i) => (
            <button
              key={i}
              onClick={() => handleSuggestionClick(s)}
              className="p-4 rounded-xl text-left text-white"
              style={{
                backgroundColor: "rgba(0,0,0,0.6)",
                border: "1px solid rgba(0,240,255,0.2)",
              }}
            >
              <Sparkles className="w-4 h-4 inline mr-2 text-cyan-400" />
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}