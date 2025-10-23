import Bola_img from '../assets/image.png'

function App2() {
  return (
    <>
      <div className="flex h-screen">
        {/* Chap tomon (AI Code card) */}
        <div className="w-1/2 bg-[#0575E6] text-white flex flex-col items-center p-10 rounded-tr-[50px] rounded-br-[50px] shadow-2xl">
          
          {/* Profil rasmi */}
          <img
            className="w-28 h-28 rounded-full object-cover border-2 border-white mb-8"
            src={Bola_img}
            alt="Bola rasmi"
          />

          {/* Input qismi */}
          <div className="w-[85%] mb-8">
            <input
              type="text"
              placeholder="// Codni kiriting"
              className="w-full h-[150px] border-2 border-white rounded-xl bg-transparent placeholder:text-white placeholder:text-left px-4 pt-4 outline-none"
            />
          </div>

          {/* Tugmalar */}
            <div className="flex justify-between w-[85%] mb-10">
                {/* Natija tugmasi */}
                <button className="bg-gradient-to-r from-green-700 to-green-800 text-white font-semibold px-6 py-2 rounded-md shadow-md transition-all duration-300 hover:from-green-600 hover:to-green-700 hover:scale-105 hover:shadow-lg">
                    Natija
                </button>

                {/* Delete tugmasi */}
                <button className="bg-gradient-to-r from-red-700 to-red-800 text-white font-semibold px-6 py-2 rounded-md shadow-md transition-all duration-300 hover:from-red-600 hover:to-red-700 hover:scale-105 hover:shadow-lg">
                    Delete
                </button>

                {/* Algoritm tugmasi */}
                <button className="bg-gradient-to-r from-blue-700 to-blue-800 text-white font-semibold px-6 py-2 rounded-md shadow-md transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:scale-105 hover:shadow-lg">
                    Algoritm
                </button>
            </div>


          {/* Natija chiqadigan joy */}
          <div className="w-[85%]">
            <h2 className="text-3xl font-bold text-green-400 mb-2">Natija:</h2>
            <div className="min-h-[150px] border-2 border-white rounded-xl p-4 bg-gradient-to-b from-[#0587E6] to-[#0460B5] shadow-inner">
              {/* Natija shu yerda chiqadi */}
            </div>
          </div>
        </div>

        {/* O'ng tomon (bo'sh yoki boshqa ma’lumot uchun joy) */}
        <div className="w-1/2 bg-white flex items-center justify-center">
          <p className="text-gray-400 text-xl">Bu joy hozircha bo'sh 😄</p>
        </div>
      </div>
    </>
  )
}

export default App2
