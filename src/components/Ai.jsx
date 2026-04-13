import { useState } from "react";
import { Send, Sparkles } from "lucide-react";
import "../App.css";

export default function Ai() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isAsking, setIsAsking] = useState(false);

  const suggestions = [
    "React komponentini qanday yaratish kerak?",
    "JavaScript xatoliklarini qanday tuzatish mumkin?",
    "Python dasturlash asoslari",
    "Web xavfsizligi uchun eng yaxshi amaliyotlar",
  ];

  // 🔥 AI FUNCTION (TO‘G‘RILANGAN)
  const handleSend = async () => {
    if (!question.trim()) return;

    setIsAsking(true);
    setAnswer("");

    try {
      const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

      if (!API_KEY) {
        setAnswer("❌ OpenRouter API key topilmadi (.env ni tekshir)");
        setIsAsking(false);
        return;
      }

      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`,
          "HTTP-Referer": window.location.href,
          "X-Title": "My AI App",
        },
        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "Sen tajribali dasturlash o'qituvchisisan. Javoblarni o'zbek tilida ber.",
            },
            {
              role: "user",
              content: question,
            },
          ],
        }),
      });

      const data = await res.json();

      console.log("OPENROUTER RESPONSE:", data);

      if (data?.choices?.length > 0) {
        setAnswer(data.choices[0].message.content);
      } else if (data.error) {
        setAnswer("❌ Xatolik: " + data.error.message);
      } else {
        setAnswer("❌ Noma'lum xatolik");
      }

    } catch (err) {
      console.error(err);
      setAnswer("❌ Server xatolik yuz berdi");
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
          AI sizga dasturlashda yordam beradi
        </h1>

        {/* Input */}
        <div className="relative mb-6">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Dasturlash savolingizni yozing..."
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

        {/* OUTPUT */}
        {answer && (
          <div
            className="mb-8 p-5 rounded-xl text-white"
            style={{
              backgroundColor: "rgba(0,0,0,0.7)",
              border: "1px solid rgba(0,240,255,0.2)",
              boxShadow: "0 0 20px rgba(82,0,255,0.15)",
              height: "60vh",
              overflowY: "auto",
              whiteSpace: "pre-wrap",
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