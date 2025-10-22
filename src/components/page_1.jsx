import Img_Bola from "../assets/image.png";

function Page() {
  return (
    <>
      <div className="flex h-screen">
        {/* Chap tomondagi rasm qismi */}
        <div className="w-[50%] flex items-center justify-center bg-white">
          <img
            src={Img_Bola}
            alt="O'quvchi rasmi"
            className="w-[80%] max-w-[400px] object-contain"
          />
        </div>
        {/* O‘ng tomondagi matn va tugma qismi */}
        <div className="w-[50%] bg-[#0575E6] text-white flex flex-col items-center justify-center text-center rounded-tl-[50px] rounded-bl-[50px] px-10 space-y-5">
          <img
            className="w-[130px] h-[130px] rounded-full object-cover border-4 border-white"
            src={Img_Bola}
            alt="Profil rasmi"
          />
          <h1 className="font-bold text-4xl leading-snug">
            Salom, Code AI ga xush kelibsiz!
          </h1>
          <p className="font-medium max-w-[600px]">
            Men sizga HTML, CSS va JS kodlarini oddiy tilda tushuntirib beraman.
            Kodingizni tashlang — men uning nima vazifa bajarishini izohlab
            beraman. Murakkab kodlar ham siz uchun soddalashadi. Endi kodni
            tushunish yanada oson bo'ladi!
          </p>
          <button className="bg-white text-[#0575E6] rounded-lg w-[60%] cursor-grabbing py-2 font-bold hover:bg-[#0575E6] hover:text-white border-2 border-transparent hover:border-white transition-all duration-500">
            Tushuntirishni boshlash
          </button>
        </div>
      </div>
    </>
  );
}

export default Page;
