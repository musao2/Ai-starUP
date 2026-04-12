import { FaArrowRight } from "react-icons/fa6";
import Kvadrat from '../Images/Kvadrat.png'
import Brand from '../Images/brand.png'
import useInViewAnimate from '../hooks/useInViewAnimate';

function AiMarketing() {
    const { ref, containerClassName, transitionClassName } = useInViewAnimate();
    return (
        <>
            <section id="marketing" ref={ref} className={`bg-black ${containerClassName} ${transitionClassName}`}>
                <div className="flex justify-center text-center pt-12 md:pt-20 animate-fade-up">
                    <img className="justify-center hover:scale-110 transition-transform duration-300" src={Brand} alt="" />
                </div>
                <section className="px-6 md:px-12 lg:px-20 bg-black flex flex-col lg:flex-row justify-between items-center gap-10 pt-10 md:pt-16">
                    <div className="text-white flex flex-col gap-8 animate-slide-in-left max-w-3xl">
                        <h2 className='text-4xl md:text-5xl text-white transition-all duration-300 hover:scale-105'>
                            <span className='bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent animate-pulse'>AI Yordamchi.</span>
                            <br />
                            <span>Aqlli Kodlash Hamkori.</span>
                        </h2>
                        <p className="transition-opacity duration-300 hover:opacity-80">CodesAi - bu ishlanuvchilarga yaxshiroq kod yozishda tezroq yordam berish uchun mo'ljallangan aqlli AI quvvatli yordamchi. Murakkab tushunchalarni tushuntirishdan tortib kod parchalarini yaratishga, xatolarni tuzatishga va eng yaxshi amaliyotlarni taqdim etishgacha, bizning AI hamkorimiz barcha dasturlash ehtiyojlaringiz uchun sizning asosiy vositangizdir. <br /> Kodlash kelajagini <span className="text-[#0075FF]">real vaqtda AI yordami</span> bilan his qiling, u sizning ish oqimingizga moslashadi. <br /> Minglab ishlanuvchilarga qo'shiling, ular o'zlarining kodlash tajribalarini <span className="text-[#0075FF]">aqlli avtomatlashtirish va mutaxassis rahbarlik</span> bilan o'zgartirdilar.</p>
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

                    <div className="animate-slide-in-right hover:scale-110 transition-transform duration-500 max-w-md">
                        <img src={Kvadrat} alt="" className='drop-shadow-[0_0_30px_rgba(0,240,255,0.2)]' />
                    </div>
                </section>
            </section>
        </>
    )
}
export default AiMarketing