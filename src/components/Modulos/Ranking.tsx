import { Space_Mono } from "next/font/google";
import Image from "next/image";

export default function StudentRanking() {
  return (
    <div id="ranking" className="bg-white p-4 md:p-8">


        <div className="relative flex items-center justify-center w-full max-w-[1300px] px-4 mx-auto mt-12">
  {/* Línea */}
  <div className="w-full h-[2px] bg-gray-300"></div>

  {/* Círculos en los extremos */}
  <div className="absolute left-0 w-3 h-3 bg-gray-400 rounded-full"></div>
  <div className="absolute right-0 w-3 h-3 bg-gray-400 rounded-full"></div>
</div>
                    
    <div className=" h-full max-w-[100rem] mx-auto flex flex-col items-center p-10  max-lg:w-[10rem] max-sm:w-[5rem]">
      <h1 className="text-center text-[#05abdd] text-6xl max-sm:text-4xl font-poppins font-bold mb-12">
        RANKING <span className=" text-yellowIngenia">DE ESTUDIANTES</span>
      </h1>
      <div className="flex justify-center gap-32 items-center max-xl:flex-col">
        <div className="flex justify-center items-end gap-4 max-sm:gap-1 mb-12 ">

          {/* Segundo lugar */}
          <div className="flex flex-col items-center">
        

            <div className="w-24 h-24 max-sm:size-[4.5rem] rounded-full overflow-hidden mb-2">
              <Image
                src="https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Home/images.png"
                alt="Segundo lugar"
                className="w-full h-full object-cover"
                width={800}
                height={800}
              />
            </div>
           
            <div className="border-t border-l border-r border-yellow-300 text-xs font-bold w-[100px] rounded-t-[10px] 
            ml-1 bg-gradient-to-b from-[#FFD36E] to-[#F9A825] text-white shadow-lg shadow-yellow-500 max-sm:w-20 ">
  <h3 className="px-3 py-1 text-center uppercase drop-shadow-[0_1px_4px_rgba(255,255,255,0.7)] max-sm:px-1">Oro </h3>
</div>




    <div className="bg-[#f9b233] text-white font-semibold px-4 py-3 rounded-md text-center mb-2 w-36 max-sm:text-sm max-sm:w-28 max-sm:px-1">
        Pedro Fierro <br/> Carranza
    </div>

            <div className="bg-[#f9b233] rounded-t-[10px] p-4 text-center max-sm:w-28 w-36 h-[200px] flex flex-col items-center justify-center ">
              <div className="text-5xl  text-white font-black leading-[4rem] scale-y-150">2</div>
              <div className="text-md text-white font-semibold ">
                Segundo Lugar
              </div>
            </div>
          </div>

          {/* Primer lugar */}
          
          <div className="flex flex-col items-center">
            
            <div className="w-24 h-24 max-sm:size-[4.5rem] rounded-full overflow-hidden mb-2 animate-bounce animate-infinite animate-ease-in">
            
              <Image
                src="https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Home/images.png"
                alt="Primer lugar"
                className="w-full h-full object-cover "
                width={800}
                height={800}
              />
             
            </div>


            
            <div className="flex flex-col items-center">

  {/* Encabezado */}
<div className="border-t border-l border-r border-yellow-500 text-xs font-bold w-[100px] rounded-t-[10px] ml-1 
bg-gradient-to-b from-yellow-400 to-yellow-700 text-gray-900 shadow-lg shadow-yellow-600 max-sm:w-20">
  <h3 className="px-3 py-1 text-center uppercase drop-shadow-lg "> Paladio</h3>
</div>

{/* Nombre */}
<div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white font-semibold px-4 py-3 
rounded-md text-center mb-2 w-36 shadow-lg shadow-yellow-700 border border-yellow-500 drop-shadow-2xl max-sm:text-sm max-sm:w-28">
  Leonardinho <br /> Suárez
</div>

{/* Primer Lugar */}
<div className="bg-gradient-to-b from-black via-gray-900 to-gray-800 rounded-t-[10px] p-4 text-center w-36 
h-[300px] flex flex-col items-center justify-center shadow-2xl shadow-yellow-800 border-4 border-yellow-500 relative max-sm:w-28">
  
  {/* Efecto de resplandor dorado aún más fuerte */}
  <div className="absolute top-8 w-24 h-24 bg-yellow-400 blur-3xl opacity-10 shadow-yellow-500 shadow-xl"></div>

  {/* Contorno alrededor del número */}
  <div className="relative">
   
    <div className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-600 text-7xl font-black drop-shadow-[0_0_10px_rgba(255,215,0,0.6)]">
      1
    </div>
  </div>

  {/* Texto "Primer Lugar" */}
  <div className="text-lg text-yellow-400 font-extrabold mt-2 uppercase tracking-wider drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]">
    Primer <br /> Lugar
  </div>
</div>




</div>






          </div>

          {/* Tercer lugar */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 max-sm:size-[4.5rem] rounded-full overflow-hidden mb-2">
              <Image
                src="https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Home/images.png"
                alt="Tercer lugar"
                className="w-full h-full object-cover"
                height={800}
                width={800}
              />                        
            </div>
            <div className="border-t border-l border-r border-gray-500 text-xs font-bold w-[100px] rounded-t-[10px] ml-1 
            bg-gradient-to-b from-[#E0E0E0] to-[#B0B0B0] text-gray-900 shadow-lg shadow-gray-600 max-sm:w-16">
  <h3 className="px-3 py-1 text-center uppercase drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]">PLATA</h3>
</div>


    <div className="bg-[#9d9d9d] text-white font-semibold px-4 py-3 rounded-md text-center mb-2 w-36 max-sm:text-sm max-sm:w-24">
        Andrea <br/> del Río
    </div>
            <div className="bg-[#bbbbbb] rounded-t-[10px] p-4 text-center max-sm:w-24 w-36 h-[170px] flex flex-col items-center justify-center ">
              <div className="text-5xl  text-white font-black leading-[4rem] scale-y-150">3</div>
              <div className="text-md text-white font-semibold">
                Tercer <br /> Lugar
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white  rounded-xl p-6 max-sm:p-2 w-fit mx-auto border-[3px] border-[#919191]">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b-2 border-gray-300">
                <th className="py-2 px-4 max-sm:px-2 max-sm:hidden text-[#05abdd] ">Avatar</th>
                <th className="py-2 px-4 max-sm:px-2 text-[#05abdd]">Nombre</th>
                <th className="py-2 px-4 max-sm:px-2 text-[#05abdd] ">Grado</th>
                <th className="py-2 px-4 max-sm:px-2 text-[#05abdd] ">Nota</th>
                <th className="py-2 px-4 max-sm:px-2 max-sm:hidden text-[#05abdd]">Tiempo</th>
                <th className="py-2 px-4 max-sm:px-2 text-[#05abdd] ">Puntos</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 7 }).map((_, index) => (
                <tr key={index} className="">
                  <td className="py-2 px-4 max-sm:hidden">
                    <Image
                      src="https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Home/images.png"
                      alt={`Estudiante ${index + 1}`}
                      className="w-10 h-10 rounded-full max-sm:hidden"
                      width={800}
                      height={800}
                    />
                  </td>
                  <td className="py-2 px-4 max-sm:px-2 text-[#167F99] text-xs ">Nombre y Apellido</td>
                  <td className="py-2 px-4 max-sm:px-2 text-xs text-[#167F99]">2° do</td>
                  <td className="py-2 px-4 max-sm:px-2 text-xs text-[#167F99]">20</td>
                  <td className="py-2 px-4 max-sm:px-2 text-xs max-sm:hidden text-[#167F99] border-collapse border-0">1 hr y 30 min</td>
                  <td className="py-2 px-4 max-sm:px-2 text-[#167F99] font-semibold text-xs ">100</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
}
