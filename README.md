# CodesAi - AI Dasturlash Yordamchi

Bu loyiha dasturlash savollariga javob beradigan AI yordamchi veb-ilovadir.

## 🚀 Xususiyatlar

- **AI Chat**: Dasturlash savollariga javob beruvchi aqlli yordamchi
- **Autentifikatsiya**: Ro'yxatdan o'tish va kirish tizimi
- **Responsive Dizayn**: Barcha qurilmalarda mukammal ishlaydi
- **Uzbek Tilida**: To'liq o'zbek tilidagi interfeys

## 🛠️ O'rnatish

1. **Loyihani klonlash:**
   ```bash
   git clone <repository-url>
   cd ai-starup
   ```

2. **Bog'liqliklarni o'rnatish:**
   ```bash
   npm install
   ```

3. **Loyihani ishga tushirish:**
   ```bash
   npm run dev
   ```

## 🤖 AI Funksiyasi

### Hozirda (Demo)
AI chat hozircha mock javoblar beradi. Bu sizga UI/UX ni test qilish uchun mo'ljallangan.

### Haqiqiy AI API ulash uchun:

1. **Google AI Studio ga boring:**
   https://makersuite.google.com/app/apikey

2. **API kalitini oling**

3. **.env faylini yarating:**
   ```bash
   cp .env.example .env
   ```

4. **.env faylida API kalitini kiriting:**
   ```
   VITE_GEMINI_API_KEY=sizning_api_kalitingiz
   ```

5. **Ai.jsx faylida mock kodni kommentdan chiqaring:**
   ```javascript
   // Mock javoblar o'rniga haqiqiy API kodini ishlatish uchun
   // yuqoridagi kommentlangan kodni aktivlashtiring
   ```

## 📱 Mobil Optimizatsiya

- Lighthouse da 100 ball olish uchun optimizatsiya qilingan
- Lazy loading rasmlar
- Error boundaries
- Responsive dizayn

## 🏗️ Build

```bash
npm run build
```

## 📦 Deployment

Vercel, Netlify yoki boshqa platformalarda deploy qilish mumkin.

## 🔒 Xavfsizlik

- API kalitlari hech qachon kodga hardcode qilinmasin
- Environment variables dan foydalaning
- .env faylini .gitignore ga qo'shing

## 📝 Litsenziya

MIT License# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
