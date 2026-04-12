import useInViewAnimate from "../hooks/useInViewAnimate";
import Hero from "./Hero";
import About from "./About";
import AiMarketing from "./Aimarketing";
import GetStarted from "./GetStarted";
import Contact from "./Contact";
import Footer from "./Footer";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Home() {
  const { ref, containerClassName, transitionClassName } = useInViewAnimate();
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <section
        id="home"
        ref={ref}
        className={`px-4 md:px-6 lg:px-16 py-5 bg-black text-white ${containerClassName} ${transitionClassName}`}
      >
        <header className="flex items-center justify-between">
          <h1 className="font-bold text-2xl md:text-3xl transition-all duration-300 hover:scale-110 hover:text-cyan-400">
            CodesAi
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-6 items-center">
            <a href="#home" className="hover:text-cyan-400 transition">
              Bosh sahifa
            </a>
            <a href="#about" className="hover:text-cyan-400 transition">
              Biz haqimizda
            </a>
            <a href="#marketing" className="hover:text-cyan-400 transition">
              Xususiyatlar
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Aloqa
            </a>
            {user && (
              <Link to="/ai" className="hover:text-cyan-400 transition">
                AI Suhbat
              </Link>
            )}
          </nav>

          {/* Desktop Auth */}
          <div className="hidden lg:flex gap-4 items-center">
            <input
              className="bg-[#272F43] border border-white px-3 py-2 rounded focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/20 outline-none"
              type="text"
              placeholder="CodesAi'da qidirish"
            />

            {user ? (
              <div className="flex items-center gap-2">
                <span className="text-sm">Xush kelibsiz, {user.email.split('@')[0]}</span>
                <button
                  onClick={logout}
                  className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
                >
                  Chiqish
                </button>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <button className="hover:bg-white/10 px-4 py-2 rounded transition">
                    Kirish
                  </button>
                </Link>
                <Link to="/register">
                  <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
                    Ro'yxatdan o'tish
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-700 pt-4">
            <nav className="flex flex-col gap-4">
              <a href="#home" className="hover:text-cyan-400 transition" onClick={() => setIsMenuOpen(false)}>
                Bosh sahifa
              </a>
              <a href="#about" className="hover:text-cyan-400 transition" onClick={() => setIsMenuOpen(false)}>
                Biz haqimizda
              </a>
              <a href="#marketing" className="hover:text-cyan-400 transition" onClick={() => setIsMenuOpen(false)}>
                Xususiyatlar
              </a>
              <a href="#contact" className="hover:text-cyan-400 transition" onClick={() => setIsMenuOpen(false)}>
                Aloqa
              </a>
              {user && (
                <Link to="/ai" className="hover:text-cyan-400 transition" onClick={() => setIsMenuOpen(false)}>
                  AI Suhbat
                </Link>
              )}
            </nav>

            <div className="mt-4 flex flex-col gap-4">
              <input
                className="bg-[#272F43] border border-white px-3 py-2 rounded focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/20 outline-none"
                type="text"
                placeholder="CodesAi'da qidirish"
              />

              {user ? (
                <div className="flex flex-col gap-2">
                  <span className="text-sm">Xush kelibsiz, {user.email.split('@')[0]}</span>
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
                  >
                    Chiqish
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                    <button className="hover:bg-white/10 px-4 py-2 rounded transition w-full text-left">
                      Kirish
                    </button>
                  </Link>
                  <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                    <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition w-full text-left">
                      Ro'yxatdan o'tish
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </section>

      <Hero />
      <About />
      <AiMarketing />
      <GetStarted />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;