import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import AiMarketing from "./components/Aimarketing";
import Contact from "./components/Contact";
import Ai from "./components/Ai";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/marketing" element={<AiMarketing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/ai" element={<Ai/>}/>
    </Routes>
  );
}

export default App;