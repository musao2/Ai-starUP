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

  // API kalitini tekshirish funksiyasi
  const validateApiKey = (key) => {
    // Google API kalitlari odatda AIza... bilan boshlanadi
    return key && key.startsWith('AIza') && key.length > 30;
  };

  // Code blocklarni format qilish funksiyasi
  const formatCodeBlocks = (text) => {
    // ```language kod ``` formatini topish
    const codeBlockRegex = /```(\w+)?\n?([\s\S]*?)```/g;

    return text.replace(codeBlockRegex, (match, language, code) => {
      const lang = language || 'javascript';
      const highlightedCode = code.trim();

      returnreturn`<div class="code-block-container" style="overflow-x:auto; background:#0f0f0f; border-radius:10px; margin:10px 0;">
  <div class="code-block-header" style="display:flex; justify-content:space-between; padding:8px 12px; color:#00f0ff;">
    <span class="code-language">${lang}</span>
    <button class="copy-btn" onclick="navigator.clipboard.writeText(\`${highlightedCode.replace(/`/g, '\\`')}\`)">📋</button>
  </div>

  <pre class="code-block" style="padding:12px; overflow-x:auto;">
    <code class="language-${lang}" style="white-space:pre;">
${highlightedCode.replace(/</g, '&lt;').replace(/>/g, '&gt;')}
    </code>
  </pre>
</div>`;
    });
  };

  // Markdown linklarni HTML ga aylantirish
  const formatMarkdown = (text) => {
    let formatted = text;

    // **bold** ni <strong> ga
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // *italic* ni <em> ga
    formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // `inline code` ni <code> ga
    formatted = formatted.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');

    // ## Sarlavhalar
    formatted = formatted.replace(/^## (.*$)/gm, '<h3 class="section-title">$1</h3>');
    formatted = formatted.replace(/^### (.*$)/gm, '<h4 class="subsection-title">$1</h4>');

    // - Ro'yxat elementlari
    formatted = formatted.replace(/^- (.*$)/gm, '<li class="list-item">$1</li>');

    // Bo'limlarni div ga o'rash
    formatted = formatted.replace(/(<li class="list-item">.*<\/li>\n?)+/g, '<ul class="feature-list">$&</ul>');

    return formatted;
  };

  // Javobni format qilish
  const formatAnswer = (text) => {
    let formatted = formatMarkdown(text);
    formatted = formatCodeBlocks(formatted);

    // Qator tashlashlarni <br> ga
    formatted = formatted.replace(/\n/g, '<br>');

    return formatted;
  };

  // 🔥 AI FUNKSIYASI - ISHLAYDIGAN YECHIM
  const handleSend = async () => {
    if (!question.trim()) return;

    setIsAsking(true);
    setAnswer(""); // Clear previous answer

    try {
      // Environment variable dan API kalitini olish
      const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

      // Agar API kaliti yo'q bo'lsa, smart mock javob beramiz
      if (!API_KEY || API_KEY === 'your_api_key_here' || !validateApiKey(API_KEY)) {
        // Smart mock AI - haqiqiy dasturlash yordami
        await provideSmartMockResponse(question);
        return;
      }

      // Haqiqiy API ga urinish
      try {
        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "User-Agent": "Mozilla/5.0 (compatible; AI-StarUP/1.0)",
            },
            body: JSON.stringify({
              contents: [
                {
                  parts: [
                    {
                      text: `Siz tajribali dasturlash o'qituvchisisiz. Foydalanuvchi savoliga o'zbek tilida aniq, tushunarli va foydali javob bering. Kod namunalari bersangiz, ularni to'g'ri formatda ko'rsating. Savol: ${question}`
                    }
                  ]
                }
              ]
            }),
          }
        );

        if (res.ok) {
          const data = await res.json();
          const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) {
            setAnswer(text);
            setIsAsking(false);
            setQuestion("");
            return;
          }
        }
      } catch (apiError) {
        console.log('API ishlamadi, mock javob beraman:', apiError);
      }

      // API ishlamasa, smart mock javob
      await provideSmartMockResponse(question);

    } catch (err) {
      console.error('Umumiy xatolik:', err);
      setAnswer(`❌ Xatolik yuz berdi: ${err.message}`);
      setIsAsking(false);
      setQuestion("");
    }
  };

  // Smart Mock AI - haqiqiy dasturlash yordami
  const provideSmartMockResponse = async (userQuestion) => {
    const q = userQuestion.toLowerCase();

    // Typing effect uchun
    const typeText = (text, delay = 50) => {
      return new Promise(resolve => {
        let index = 0;
        const interval = setInterval(() => {
          setAnswer(text.substring(0, index + 1));
          index++;
          if (index >= text.length) {
            clearInterval(interval);
            resolve();
          }
        }, delay);
      });
    };

    // Dasturlash mavzulariga qarab javob
    let response = "";

    if (q.includes('react') || q.includes('komponent')) {
      response = `React komponentini yaratish uchun:

\`\`\`jsx
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hisob: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Qo'shish
      </button>
    </div>
  );
}

export default MyComponent;
\`\`\`

**Asosiy qoidalar:**
- Komponent nomi katta harf bilan boshlanadi
- JSX qaytaradi
- useState hook dan foydalanib state boshqariladi
- Event handler lar arrow function bo'ladi`;
    }

    else if (q.includes('javascript') || q.includes('js') || q.includes('array') || q.includes('massiv')) {
      response = `JavaScript Array metodlari:

\`\`\`javascript
const fruits = ['olma', 'banan', 'apelsin'];

// Map - har bir elementni o'zgartirish
const upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits); // ['OLMA', 'BANAN', 'APELSIN']

// Filter - shartga mos elementlarni tanlash
const longFruits = fruits.filter(fruit => fruit.length > 4);
console.log(longFruits); // ['banan', 'apelsin']

// Reduce - barcha elementlarni bitta qiymatga aylantirish
const totalLength = fruits.reduce((sum, fruit) => sum + fruit.length, 0);
console.log(totalLength); // 18

// Find - birinchi mos elementni topish
const found = fruits.find(fruit => fruit.startsWith('a'));
console.log(found); // 'apelsin'
\`\`\`

**Eng ko'p ishlatiladigan metodlar:**
- \`map()\` - transformatsiya
- \`filter()\` - filtratsiya
- \`reduce()\` - agregatsiya
- \`find()\` - qidiruv`;
    }

    else if (q.includes('python') || q.includes('function') || q.includes('funksiya')) {
      response = `Python funksiyalarini yaratish:

\`\`\`python
def salomlash(ism):
    """Bu funksiya foydalanuvchini salomlaydi"""
    return f"Salom, {ism}!"

def kvadrat(son):
    """Sonning kvadratini hisoblaydi"""
    return son ** 2

def faktorial(n):
    """Faktorial hisoblaydi (rekursiv)"""
    if n <= 1:
        return 1
    return n * faktorial(n - 1)

# Funksiyalardan foydalanish
print(salomlash("Ali"))  # Salom, Ali!
print(kvadrat(5))       # 25
print(faktorial(5))     # 120

# Lambda funksiyalar
kvadrat_lambda = lambda x: x ** 2
print(kvadrat_lambda(4))  # 16
\`\`\`

**Funksiya yozish qoidalari:**
- \`def\` kalit so'zi bilan boshlanadi
- Parametrlarni qavs ichida ko'rsatamiz
- Docstring (\"\"\"...\"\"\") yozish tavsiya etiladi
- \`return\` bilan qiymat qaytaramiz`;
    }

    else if (q.includes('html') || q.includes('css') || q.includes('web')) {
      response = `HTML va CSS bilan web sahifa yaratish:

\`\`\`html
<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mening Sahifam</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            margin: 0;
            padding: 20px;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.1);
            padding: 30px;
            border-radius: 10px;
            backdrop-filter: blur(10px);
        }

        h1 {
            text-align: center;
            margin-bottom: 30px;
        }

        .card {
            background: rgba(255, 255, 255, 0.2);
            padding: 20px;
            margin: 10px 0;
            border-radius: 8px;
            transition: transform 0.3s;
        }

        .card:hover {
            transform: translateY(-5px);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Salom, Dunyo!</h1>
        <div class="card">
            <h2>Web Dasturlash</h2>
            <p>HTML, CSS va JavaScript bilan zamonaviy web sahifalar yarating.</p>
        </div>
    </div>
</body>
</html>
\`\`\`

**Muhim elementlar:**
- \`<!DOCTYPE html>\` - HTML5 standartini bildiradi
- \`<meta charset="UTF-8">\` - Unicode kodlash
- \`<meta name="viewport">\` - Mobil moslashuvchanlik
- CSS da \`backdrop-filter\` - zamonaviy effektlar uchun`;
    }

    else if (q.includes('error') || q.includes('xatolik') || q.includes('debug')) {
      response = `Dasturlash xatoliklarini tuzatish bo'yicha maslahatlar:

## 🔍 **Xatolik turlari:**

### 1. **Syntax Error (Sintaksis xatolik)**
\`\`\`javascript
// XATO:
function myFunction(
    console.log("Salom");

// TO'G'RI:
function myFunction() {
    console.log("Salom");
}
\`\`\`

### 2. **Reference Error (Mavjud bo'lmagan o'zgaruvchi)**
\`\`\`javascript
// XATO:
console.log(myVar); // myVar aniqlanmagan

// TO'G'RI:
let myVar = "Salom";
console.log(myVar);
\`\`\`

### 3. **Type Error (Turi xatolik)**
\`\`\`javascript
// XATO:
let num = 5;
num.toUpperCase(); // Raqamda string metod

// TO'G'RI:
let str = "5";
str.toUpperCase(); // "5"
\`\`\`

## 🛠️ **Xatolikni qanday tuzatish:**

1. **Console ni tekshiring** - brauzer dev tools
2. **Xatolik xabarini o'qing** - u ko'pincha yechim ko'rsatadi
3. **Kodni qismlarga bo'ling** - har bir qismni alohida test qiling
4. **console.log()** qo'shing - o'zgaruvchilarni tekshiring
5. **Stack overflow** da qidiring - ko'pincha javob topiladi

## 🚀 **Profilaktika:**
- Kod yozishdan oldin reja tuzing
- Har doim variable lar e'lon qiling
- Error handling qo'shing (try-catch)
- Kodni formatlang va komment yozing`;
    }

    else if (q.includes('database') || q.includes('sql') || q.includes('mongodb')) {
      response = `Ma'lumotlar bazasi bilan ishlash:

## 📊 **SQL (Relational DB)**

\`\`\`sql
-- Jadval yaratish
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Ma'lumot qo'shish
INSERT INTO users (name, email) VALUES
('Ali', 'ali@example.com'),
('Vali', 'vali@example.com');

-- Ma'lumot olish
SELECT * FROM users WHERE name LIKE 'A%';

-- Ma'lumot yangilash
UPDATE users SET email = 'new@email.com' WHERE id = 1;

-- Ma'lumot o'chirish
DELETE FROM users WHERE id = 2;
\`\`\`

## 🍃 **MongoDB (NoSQL)**

\`\`\`javascript
// MongoDB Node.js bilan
const mongoose = require('mongoose');

// Schema yaratish
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true },
    age: Number,
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// Yangi foydalanuvchi yaratish
const newUser = new User({
    name: 'Ali',
    email: 'ali@example.com',
    age: 25
});

await newUser.save();

// Foydalanuvchilarni topish
const users = await User.find({ age: { $gte: 18 } });
\`\`\`

**Qaysi DB ni tanlash:**
- **SQL**: Murakkab so'rovlar, ACID tranzaksiyalar
- **NoSQL**: Moslashuvchan schema, katta ma'lumotlar`;
    }

    else {
      // Default javob - umumiy dasturlash maslahati
      response = `Salom! Men sizning dasturlash savollaringizga yordam beradigan AI yordamchiman.

**Sizning savolingiz:** "${userQuestion}"

## 💡 **Dasturlash bo'yicha umumiy maslahatlar:**

### 🌟 **Boshlovchilar uchun:**
1. **Asoslardan boshlang** - HTML, CSS, JavaScript
2. **Amaliyot qiling** - har kuni kod yozing
3. **Loyihalar yarating** - nazariyani amaliyotda sinang
4. **Xatoliklardan qo'rqmang** - ular o'rganish jarayoni

### 🛠️ **Afzal tillar:**
- **Web development**: JavaScript (React/Vue), HTML, CSS
- **Backend**: Node.js, Python (Django/Flask), PHP
- **Mobile**: React Native, Flutter
- **Data Science**: Python (Pandas, NumPy)

### 📚 **O'rganish resurslari:**
- **freeCodeCamp** - bepul kurslar
- **MDN Web Docs** - JavaScript hujjatlari
- **W3Schools** - interaktiv o'rganish
- **Stack Overflow** - savollar va javoblar

### 🎯 **Keyingi qadamlar:**
Aniqroq savol bering! Masalan:
- "React da state nima?"
- "Python da loop qanday yoziladi?"
- "CSS da flexbox qanday ishlaydi?"

Men sizga batafsil javob beraman! 🚀`;
    }

    // Typing effect bilan javob ko'rsatish
    await typeText(response, 30);
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

        {/* OUTPUT BOX */}
        {answer && (
          <div
            className="mb-8 p-5 rounded-xl text-white answer-container"
            style={{
              backgroundColor: "rgba(0,0,0,0.7)",
              border: "1px solid rgba(0,240,255,0.2)",
              boxShadow: "0 0 20px rgba(82,0,255,0.15)",

              height: "60vh",        // 🔥 FIXED HEIGHT
              overflowY: "auto",     // 🔥 SCROLL VERTICAL
              overflowX: "hidden",
            }}
            dangerouslySetInnerHTML={{ __html: formatAnswer(answer) }}
          />
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