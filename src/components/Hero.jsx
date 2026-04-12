
import Global from '../Images/HeroImg.png'

import { FaArrowRight } from "react-icons/fa6";
import useInViewAnimate from '../hooks/useInViewAnimate';
import { Link } from 'react-router-dom';

function Hero() {
    const { ref, containerClassName, transitionClassName } = useInViewAnimate();
    return (
        <>
            <section ref={ref} className={`bg-black text-white flex flex-col lg:flex-row justify-between items-center px-6 md:px-10 lg:px-16 py-10 gap-10 ${containerClassName} ${transitionClassName}`}>
                <div className='flex flex-col gap-5 animate-slide-in-left max-w-3xl'>
                    <h2 className='font-bold text-5xl md:text-6xl transition-all duration-700 hover:scale-105'>
                        <span className='bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent animate-pulse'>AI Marketing.</span>
                        <br />
                        <span>Optimized Reach.</span>
                    </h2>
                    <p className='transition-opacity duration-500 hover:opacity-80'>Our vision is to revolutionize the way brands and advertisers target and reach the right audience.</p>
                    <span className="block w-[135px] h-[2px] bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] animate-gradient"></span>
                    <div className="inline-flex p-[1.5px] rounded-xl bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] w-fit hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 group">
                        <Link to={'/ai'}>
                            <button className="px-6 py-2 bg-black text-white rounded-[10px] flex gap-3 items-center group-hover:bg-black/80 transition-all duration-300">
                                Get Started <FaArrowRight
                                    className="ml-1 group-hover:translate-x-1 transition-transform duration-300"
                                    style={{
                                        background: "linear-gradient(to right, #00F0FF, #5200FF, #FF2DF7)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent"
                                    }} />
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='animate-slide-in-right hover:scale-105 transition-transform duration-500 max-w-xl w-full'>
                    <img src={Global} alt="" className='drop-shadow-[0_0_30px_rgba(0,240,255,0.3)] w-full h-auto' />
                </div>
            </section>
        </>
    )
}
export default Hero