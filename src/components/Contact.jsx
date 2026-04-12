

import { FaDiscord } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import HeroImg from '../Images/HeroImg.png';

import useInViewAnimate from '../hooks/useInViewAnimate';

function Contact() {
  const slides = [1, 2, 3, 4, 5];
  const { ref, containerClassName, transitionClassName } = useInViewAnimate();

  return (
    <section id="contact" ref={ref} className={`py-16 bg-black text-white ${containerClassName} ${transitionClassName}`}>
      <div className="mx-4 md:mx-8 lg:mx-auto max-w-7xl">
        <div className="relative pb-16">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{ prevEl: '.custom-swiper-prev', nextEl: '.custom-swiper-next' }}
            pagination={{ el: '.custom-swiper-pagination', clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
          >
          {slides.map((item) => (
            <SwiperSlide key={item}>
              <div className="rounded-3xl border border-white/20 bg-gradient-to-r from-[#140012] via-[#0e005f] to-[#00283a] p-6 md:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.45)] hover:shadow-[0_30px_70px_rgba(0,255,255,0.25)] transition-all duration-500 animate-fade-up">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full">
                  <div className="flex-shrink-0 group hover:scale-110 transition-transform duration-300">
                    <div className="rounded-full border-2 border-cyan-300 p-1 shadow-[0_10px_30px_rgba(0,255,255,0.35)] group-hover:shadow-[0_15px_50px_rgba(0,255,255,0.5)] transition-all duration-300">
                      <img src={HeroImg} alt="Amaka Micheal" className="h-40 w-40 rounded-full object-cover" loading="lazy" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-3">
                    <p className="text-xs md:text-sm leading-relaxed md:leading-loose transition-opacity duration-300 hover:opacity-80">
                      CodesAi mening kodlash ish oqimini butunlay o'zgartirdi. Full-stack ishlanuvchi sifatida, men xatolarni tuzatish va yechimlarni qidirish uchun soatlarni sarflardim. Endi AI yordami bilan murakkab dasturlash savollariga tez javoblar, kod takliflar va eng yaxshi amaliyotlarni olaman. Bu 24/7 mavjud bo'lgan mutaxassis dasturchiga o'xshaydi. Mening mahsuldorligim kamida 300% ga oshdi va kod sifati sezilarli darajada yaxshilandi. Har qanday ishlanuvchi uchun tavsiya etaman!
                    </p>
                    <h2 className="mt-4 text-4xl md:text-5xl font-bold transition-all duration-300 hover:scale-105 hover:text-transparent hover:bg-gradient-to-r hover:from-[#00F0FF] hover:to-[#FF2DF7] hover:bg-clip-text">Alex Johnson</h2>
                    <p className="mt-1 text-xl text-white/90 transition-colors duration-300">Katta Full-Stack Ishlanuvchi</p>

                    <div className="mt-4 inline-flex items-center gap-3 text-lg transition-transform duration-300 hover:translate-x-2">
                      <FaDiscord className="text-3xl text-[#7289DA] animate-bounce" />
                      <span className="text-white font-semibold">Discord</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 inline-flex items-center gap-4 pointer-events-none animate-fade-up">
          <button className="custom-swiper-prev pointer-events-auto text-white text-2xl rounded-full border border-white/40 px-3 py-1 hover:bg-white/20 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50">&lt;</button>
          <div className="custom-swiper-pagination flex items-center gap-2" />
          <button className="custom-swiper-next pointer-events-auto text-white text-2xl rounded-full border border-white/40 px-3 py-1 hover:bg-white/20 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50">&gt;</button>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Contact;