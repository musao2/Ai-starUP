import useInViewAnimate from "../hooks/useInViewAnimate";
import Hero from "./Hero";
import About from "./About";
import AiMarketing from "./Aimarketing";
import GetStarted from "./GetStarted";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  const { ref, containerClassName, transitionClassName } = useInViewAnimate();

  return (
    <>
      <section
        id="home"
        ref={ref}
        className={`px-6 md:px-10 lg:px-16 py-5 bg-black text-white ${containerClassName} ${transitionClassName}`}
      >
        <header className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <h1 className="font-bold text-3xl transition-all duration-300 hover:scale-110 hover:text-cyan-400">
            CodesAi
          </h1>

          <nav className="flex flex-wrap gap-6 items-center justify-center lg:justify-start">
            <a href="#home" className="hover:text-cyan-400 transition">
              Home
            </a>
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
            <a href="#marketing" className="hover:text-cyan-400 transition">
              Explore
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </nav>

          <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-end">
            <input
              className="bg-[#272F43] border border-white px-3 py-2 rounded focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/20 outline-none"
              type="text"
              placeholder="Search CodesAi"
            />

            <button className="hover:bg-white/10 px-4 py-2 rounded transition">
              Sign In
            </button>

            <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
              Sign Up
            </button>
          </div>
        </header>
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