import { useState } from "react";
import Bola_img from "../assets/image.png";

function App2() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResult = async () => {
    if (!code.trim()) {
      setResult("Iltimos, kod kiriting!");
      return;
    }

    setLoading(true);
    setResult("");

    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/tiiuae/falcon-7b-instruct",
        {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${import.meta.env.VITE_HF_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            inputs: `Siz kodni tahlil qiluvchi yordamchisiz. Foydalanuvchi yozgan kodni oddiy va tushunarli qilib tushuntiring. Agar xato bo‘lsa, nimada xato ekanini qisqa va oson tilda ayting.\n\nKod:\n${code}`,
          }),
        }
      );

      const data = await response.json();

      // Hugging Face javob array formatida keladi
      const text = data?.[0]?.generated_text || "Tushuntirish topilmadi 😕";
      setResult(text);
    } catch (error) {
      console.error("Xato:", error);
      setResult("Xatolik yuz berdi: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = () => {
    setCode("");
    setResult("");
  };

  return (
    <div className="flex h-screen">
      {/* Chap tomon */}
      <div className="w-1/2 bg-[#0575E6] text-white flex flex-col items-center p-10 rounded-tr-[50px] rounded-br-[50px] shadow-2xl">
        {/* Profil rasmi */}
        <img
          className="w-28 h-28 rounded-full object-cover border-2 border-white mb-8"
          src={Bola_img}
          alt="Bola rasmi"
        />

        {/* Input */}
        <div className="w-[85%] mb-8">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="// Codni kiriting"
            className="w-full h-[150px] border-2 border-white rounded-xl bg-transparent placeholder:text-white px-4 pt-4 outline-none resize-none"
          />
        </div>

        {/* Tugmalar */}
        <div className="flex justify-between w-[85%] mb-10">
          <button
            onClick={handleResult}
            disabled={loading}
            className="bg-gradient-to-r from-green-700 to-green-800 text-white font-semibold px-6 py-2 rounded-md shadow-md transition-all duration-300 hover:from-green-600 hover:to-green-700 hover:scale-105 hover:shadow-lg disabled:opacity-50"
          >
            {loading ? "Yuklanmoqda..." : "Natija"}
          </button>

          <button
            onClick={handleDelete}
            className="bg-gradient-to-r from-red-700 to-red-800 text-white font-semibold px-6 py-2 rounded-md shadow-md transition-all duration-300 hover:from-red-600 hover:to-red-700 hover:scale-105 hover:shadow-lg"
          >
            Tozalash
          </button>

          <button
            className="bg-gradient-to-r from-blue-700 to-blue-800 text-white font-semibold px-6 py-2 rounded-md shadow-md transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:scale-105 hover:shadow-lg"
          >
            Algoritm
          </button>
        </div>

        {/* Natija */}
        <div className="w-[85%]">
          <h2 className="text-3xl font-bold text-green-400 mb-2">Natija:</h2>
          <div className="min-h-[150px] border-2 border-white rounded-xl p-4 bg-gradient-to-b from-[#0587E6] to-[#0460B5] shadow-inner whitespace-pre-wrap">
            {result || "Natija shu yerda chiqadi"}
          </div>
        </div>
      </div>

      {/* O'ng tomon */}
      <div className="w-1/2 bg-white flex items-center justify-center">
        <p className="text-gray-400 text-xl">Bu joy hozircha bo'sh 😄</p>
      </div>
    </div>
  );
}

export default App2;
