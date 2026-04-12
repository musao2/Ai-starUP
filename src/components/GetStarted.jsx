import { FaArrowRight } from 'react-icons/fa6';
import Dumaloq from '../Images/Dumaloq.png';

import useInViewAnimate from '../hooks/useInViewAnimate';

function GetStarted() {
  const { ref, containerClassName, transitionClassName } = useInViewAnimate();
  return (
    <section ref={ref} className={`py-20 bg-black text-white ${containerClassName} ${transitionClassName}`}>
      <div className="mx-4 md:mx-8 lg:mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#8900ff] via-[#1350ff] to-[#00f8ff] p-8 md:p-16 shadow-2xl hover:shadow-[0_0_60px_rgba(0,240,255,0.3)] transition-all duration-500">
          {/* Background overlay effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.15),rgba(255,255,255,0)_50%)]" />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="flex justify-center order-first md:order-first animate-slide-in-left hover:scale-110 transition-transform duration-500">
              <img src={Dumaloq} alt="shape" className="h-64 w-64 md:h-80 md:w-80 rounded-full object-cover shadow-lg drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]" />
            </div>

            {/* Right - Content */}
            <div className="flex flex-col gap-6 order-last md:order-last animate-slide-in-right">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold hover:scale-105 transition-transform duration-300">
                Ekspontsial kodlash kuchini oling
                <br />
                <span className="text-white">AI Yordamchi orqali</span>
              </h1>

              <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
                <input
                  type="email"
                  placeholder="Ish elektron pochtangizni kiriting"
                  className="flex-1 px-6 py-3 rounded-full bg-white/20 border border-white/40 text-white placeholder-white/60 focus:outline-none focus:border-cyan-300 focus:shadow-lg focus:shadow-cyan-400/30 transition-all duration-300"
                />
                <button className="px-8 py-3 rounded-full bg-black text-white font-semibold hover:bg-white/20 hover:shadow-lg hover:shadow-white/20 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap group">
                  Get in touch <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
