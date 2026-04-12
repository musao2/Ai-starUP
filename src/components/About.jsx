import { FaArrowRight } from "react-icons/fa6";
import Dumaloq from '../Images/Dumaloq.png'
import useInViewAnimate from '../hooks/useInViewAnimate';

function About() {
    const { ref, containerClassName, transitionClassName } = useInViewAnimate();
    return (
        <>
            <section
                id="about"
                ref={ref}
                className={`bg-black ${containerClassName} ${transitionClassName}`}
            >
                <section className="px-6 md:px-12 lg:px-20 bg-black flex flex-col lg:flex-row justify-between items-center gap-10 pt-12 md:pt-16">
                    <div className="animate-slide-in-left hover:scale-110 transition-transform duration-500">
                        <img src={Dumaloq} alt="" className='drop-shadow-[0_0_30px_rgba(0,240,255,0.2)]' />
                    </div>
                    <div className="text-white flex flex-col gap-8 animate-slide-in-right max-w-3xl">
                        <h2 className='text-4xl md:text-5xl text-white transition-all duration-300 hover:scale-105'>
                            <span className='bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent animate-pulse'>AI Marketing.</span>
                            <br />
                            <span>Optimized Reach.</span>
                        </h2>
                        <p className="transition-opacity duration-300 hover:opacity-80">DOML is a digital media agency powered by AI technology providing real time, <br /> <span className="text-[#0075FF]">data-driven insights</span> on your business and audience. <br /> The mission of DOML is to create the best experiences for <br /> companies through intelligent insights, powerful analytics and <span className="text-[#0075FF]">strategic execution.</span></p>
                        <span className="block w-[135px] h-[2px] bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] animate-gradient"></span>
                        <div className="inline-flex p-[1.5px] rounded-xl bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] w-fit hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 group">
                            <button className="px-6 py-2 bg-black text-white rounded-[10px] flex gap-3 items-center group-hover:bg-black/80 transition-all duration-300">
                                Learn more <FaArrowRight
                                    className="ml-1 group-hover:translate-x-1 transition-transform duration-300"
                                    style={{
                                        background: "linear-gradient(to right, #00F0FF, #5200FF, #FF2DF7)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent"
                                    }} />
                            </button>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
export default About