import { Space_Mono } from "next/font/google";
import Image from "next/image";

export default function StudentRanking() {
  return (
    <div id="ranking" className="bg-white p-4 md:p-8">
    <div className=" h-full max-w-[100rem] mx-auto flex flex-col items-center p-10">
      <h1 className="text-center text-[#05abdd] text-6xl max-sm:text-3xl font-poppins font-bold mb-12">
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
           
    <div className="border-t border-l border-r border-yellow-500 text-xs font-bold  w-[100px] rounded-t-[10px] ml-1">
        <h3 className=" text-yellow-500 px-3 py-1 text-center">ORO AMARILLO</h3>
    </div>
    <div className="bg-[#f9b233] text-white font-semibold px-4 py-3 rounded-md text-center mb-2 w-36">
        Pedro Fierro <br/> Carranza
    </div>

            <div className="bg-[#f9b233] rounded-t-[10px] p-4 text-center max-sm:w-24 w-36 h-[200px] flex flex-col items-center justify-center">
              <div className="text-5xl  text-white font-black leading-[4rem] scale-y-150">2</div>
              <div className="text-md text-white font-semibold">
                Segundo Lugar
              </div>
            </div>
          </div>

          {/* Primer lugar */}
          
          <div className="flex flex-col items-center">
            
            <div className="w-24 h-24 max-sm:size-[4.5rem] rounded-full overflow-hidden mb-2">
              <Image
                src="https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Home/images.png"
                alt="Primer lugar"
                className="w-full h-full object-cover"
                width={800}
                height={800}
              />
            </div>
            <div className="border-t border-l border-r border-[#8e8e8e] text-xs font-bold  w-[100px] rounded-t-[10px] ml-1">
        <h3 className=" text-[#7f7f7f] px-3 py-1 text-center">PALADIO</h3>
    </div>
    <div className="bg-[#9d9d9d] text-white font-semibold px-4 py-3 rounded-md text-center mb-2 w-36">
        Leonardinho <br/> Suárez
    </div>
            
            <div className="bg-[#7f7f7f] rounded-t-[10px] p-4 text-center max-sm:w-24 w-36 h-[300px] flex flex-col items-center justify-center">
              <div className="text-yellow-400 mb-2">
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <div className="text-5xl m text-white font-black leading-[4rem] scale-y-150 mt-[-80px]">1</div>
              <div className="text-md text-white font-semibold">
                Primer  <br/>Lugar
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
            <div className="border-t border-l border-r border-[#8e8e8e] text-xs font-bold  w-[100px] rounded-t-[10px] ml-1">
        <h3 className=" text-[#7f7f7f] px-3 py-1 text-center">PLATA</h3>
    </div>
    <div className="bg-[#9d9d9d] text-white font-semibold px-4 py-3 rounded-md text-center mb-2 w-36">
        Andrea <br/> del Río
    </div>
            <div className="bg-[#bbbbbb] rounded-t-[10px] p-4 text-center max-sm:w-24 w-36 h-[170px] flex flex-col items-center justify-center">
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
