"use client";
import { Space_Mono } from "next/font/google";
import Image from "next/image";
import { MdOutlineStarPurple500 } from "react-icons/md";
import TabsRanking from "../landingPage/TabsRanking";

export default function StudentRanking() {
  {
    /*
  const datos = [

    {
      avatar:"/img/corona.png",
      nombre: "carlos",
      grado: "2do",
      nota: "20",
      TiempoE: "1 hora",
      bgg:"",
      puntos: "100",
      bg: "bg-gradient-to-b from-amber-400 via-amber-500 to-amber-700",
      animación:"top", 
      textColor: "text-white"  ,
      shadow: "drop-shadow-[0_0_12px_rgba(255,215,0,0.9)]"   
    },
    {
      avatar:"/img/martillo.png",
      nombre: "Enrique",
      grado: "2do",
      nota: "20",
      TiempoE: "1 hora",
      puntos: "100",
      bg: "bg-gradient-to-b from-gray-400 via-gray-500 to-gray-900",
      animación:"top",
      textColor: "text-white"  ,
      shadow: "drop-shadow-[0_0_5px_rgba(255,255,255,1)]"   

    },
    {
      avatar:"/img/chaleco.png",
      nombre: "chamo",
      grado: "2do",
      nota: "20",
      TiempoE: "1 hora",
      puntos: "100",
      bg: "bg-gradient-to-t from-cyan-900 via-cyan-600 to-cyan-400",
      animación:"top",
      textColor: "text-white"  ,
      shadow: "drop-shadow-[0_0_12px_rgba(0,180,255,1)]"   

    },
    {
      avatar:"/img/audifonos.png",
      nombre: "chamo",
      grado: "2do",
      nota: "20",
      TiempoE: "1 hora",
      textColor: "text-black",
      puntos: "100",
      bg: "bg-white",
    
    },
    {
      avatar:"/img/casco.png",
      nombre: "chamo",
      grado: "2do",
      textColor: "text-black",
      nota: "20",
      TiempoE: "1 hora",
      puntos: "100",
      bg: "bg-white",
    
    },
    {
      avatar:"/img/casco.png",
      nombre: "chamo",
      grado: "2do",
      textColor: "text-black",
      nota: "20",
      TiempoE: "1 hora",
      puntos: "100",
      bg: "bg-white",
    
    },
    {
      avatar:"/img/casco.png",
      nombre: "Santi",
      grado: "2do",
      nota: "20",
      textColor: "text-black",
      TiempoE: "1 hora",
      puntos: "100",
      bg: "bg-white", 
     

    }
  ]
  */
  }
  return (
    <div id="ranking" className="bg-black p-4 md:p-8">
      <div className="relative flex items-center justify-center w-full max-w-[1300px] px-4 mx-auto mt-12">
        {/* Línea */}
        <div className="w-full h-[2px] bg-[#05abdd] "></div>

        {/* Círculos en los extremos */}
        <div className="absolute left-0 w-3 h-3 bg-[#1b5a79] rounded-full"></div>
        <div className="absolute right-0 w-3 h-3 bg-[#1b5a79] rounded-full"></div>
      </div>

      <div className=" h-full max-w-[100rem] mx-auto flex flex-col items-center p-10  max-lg:w-[10rem] max-sm:w-[5rem]">
        <h1 className="text-center text-[#05abdd] text-6xl max-sm:text-4xl font-poppins font-bold mb-12">
          RANKING <span className=" text-yellowIngenia">DE ESTUDIANTES</span>
        </h1>
        <div className=" justify-center gap-32 items-center max-xl:flex-col">
          <div className="flex justify-center items-end gap-6 max-sm:gap-1 max-lg:gap-3 mb-12 ">
            {/* Quinto lugar */}
            <div className="flex flex-col items-center max-md:hidden">
              <div className="mb-7">
                <h2 className="text-white">Carlos Lee</h2>
                <div className="w-full h-[5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_cyan]"></div>
              </div>
              <div className="w-20 h-20 max-sm:size-[4.5rem] overflow-hidden mb-2">
                <Image
                  src="/img/casco.png"
                  alt="Tercer lugar"
                  className=" object-contain drop-shadow-[0_0_5px_rgba(255,255,255,1)]"
                  height={800}
                  width={800}
                />
              </div>

              <div className="bg-[#8ac8d6] rounded-t-[30px] p-4 text-center max-sm:w-24 w-36 h-[140px] flex flex-col items-center justify-center ">
                <div className="text-[80px]  text-white font-black leading-[4rem] scale-y-150">
                  5
                </div>
              </div>
            </div>

            {/* Cuarto lugar */}
            <div className="flex flex-col items-center max-md:hidden">
              <h2 className="text-white max-sm:hidden">Carlos Lee </h2>

              <div className="w-full h-[5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_cyan]  mb-7"></div>

              <div className="w-20 h-20 max-sm:size-[4.5rem]  overflow-hidden mb-2">
                <Image
                  src="/img/audifonos.png"
                  alt="Tercer lugar"
                  className="w-full h-full object-cover drop-shadow-[0_0_5px_rgba(255,255,255,1)]"
                  height={800}
                  width={800}
                />
              </div>

              <div className="bg-[#8ac8d6] rounded-t-[30px] p-4 text-center max-sm:w-24 w-36 h-[180px] flex flex-col items-center justify-center ">
                <div className="text-[80px] max-sm:hidden text-white font-black leading-[4rem] scale-y-150">
                  4
                </div>
              </div>
            </div>

            {/* Tercer lugar */}
            <div className="flex flex-col items-center">
              <div className="mb-7">
                <h2 className="text-white">Carlos Lee</h2>
                <div className="w-full h-[5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_cyan]"></div>
              </div>
              <div className="w-20 h-24 max-sm:size-[4.5rem]  overflow-hidden mb-2">
                <Image
                  src="/img/chaleco.png"
                  alt="Tercer lugar"
                  className="w-full h-full object-cover drop-shadow-[0_0_5px_rgba(255,255,255,1)]"
                  height={800}
                  width={800}
                />
              </div>

              <div
                className="bg-gradient-to-t from-cyan-900 via-cyan-600 to-cyan-400 rounded-t-[30px] p-4 text-center max-sm:w-24 w-36 h-[210px]
               flex flex-col items-center justify-center drop-shadow-[0_0_12px_rgba(0,180,255,1)] "
              >
                <div className="text-[80px]  text-white font-black leading-[4rem] scale-y-150">
                  3
                </div>

                <div
                  className="absolute  mt-44 text-white text-lg font-bold bg-gradient-to-t from-cyan-900 via-cyan-600 to-cyan-400
     py-1 px-3 rounded-t-xl  drop-shadow-[0_0_12px_rgba(0,180,255,1)]"
                >
                  <p className="flex items-center gap-1">
                    TOP
                    <MdOutlineStarPurple500 />
                  </p>
                </div>
              </div>
            </div>

            {/* Segundo lugar */}
            <div className="flex flex-col items-center gap-2">
              <div className="mb-7">
                <h2 className="text-white">Carlos Lee</h2>
                <div className="w-full h-[5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_cyan]"></div>
              </div>

              <div className="w-24 h-24 max-sm:size-[4.5rem]  overflow-hidden mb-2">
                <Image
                  src="/img/martillo.png"
                  alt="Segundo lugar"
                  className="w-full h-full object-cover drop-shadow-[0_0_5px_rgba(255,255,255,1)]"
                  width={1000}
                  height={1000}
                />
              </div>

              <div
                className="bg-gradient-to-b from-gray-400 via-gray-500 to-gray-900 rounded-t-[30px] p-4 text-center max-sm:w-28 w-36 h-[250px] 
              flex flex-col items-center justify-center   drop-shadow-[0_0_12px_rgba(255,255,255,1)] "
              >
                <div className="text-[80px]  text-white font-black leading-[4rem] scale-y-150">
                  2
                </div>

                <div
                  className="absolute  mt-52 text-white text-lg font-bold bg-gradient-to-b from-gray-400 via-gray-500 to-gray-900
     py-1 px-3 rounded-t-xl  drop-shadow-[0_0_12px_rgba(255,255,255,1)]"
                >
                  <p className="flex items-center gap-1">
                    TOP
                    <MdOutlineStarPurple500 />
                  </p>
                </div>
              </div>
            </div>

            {/* Primer lugar */}

            <div className="flex flex-col items-center">
              <div className="mb-10">
                <h2 className="text-white">Carlos Lee</h2>
                <div className="w-full h-[5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_cyan]"></div>
              </div>

              <div className="w-32 h-24 max-sm:size-[4.5rem]  overflow-hidden mb-2 animate-bounce animate-infinite animate-ease-in">
                <Image
                  src="/img/corona.png"
                  alt="Primer lugar"
                  className="w-full h-full object-cover drop-shadow-[0_0_5px_rgba(255,255,255,1)]"
                  width={800}
                  height={800}
                />
              </div>

              <div className="flex flex-col items-center">
                {/* Primer Lugar */}
                <div
                  className="bg-gradient-to-b from-amber-400 via-amber-500 to-amber-700 rounded-t-[30px] p-4 text-center w-36 h-[300px] 
                flex flex-col items-center justify-center drop-shadow-[0_0_12px_rgba(255,215,0,0.9)] relative max-sm:w-28"
                >
                  {/* Contorno alrededor del número */}
                  <div className="relative">
                    {/* Número */}
                    <div className="text-[80px] text-white font-black leading-[4rem] scale-y-150">
                      1
                    </div>

                    <div
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-20 text-white text-lg font-bold bg-gradient-to-b from-amber-400 via-amber-500 to-amber-700
                      py-1 px-3 rounded-t-xl  drop-shadow-[0_0_12px_rgba(255,215,0,0.9)]"
                    >
                      <p className="flex items-center gap-1">
                        TOP
                        <MdOutlineStarPurple500 />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 
          <div className="w-full h-[5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_cyan]">

          </div>
           <div className="bg-white  rounded-xl py-6 max-sm:p-2 w-fit mx-auto border-[3px] border-[#05abdd] mt-5"></div>
          */}

          <table className="w-full">
            {/*
              <thead className="">
                <tr className="text-left border-b-2 border-[#05abdd] w-full">
                  <th className="py-2 px-4 max-sm:px-2 max-sm:hidden text-[#05abdd]">Avatar</th>
                  <th className="py-2 px-4 max-sm:px-2 text-[#05abdd]">Nombre</th>
                  <th className="py-2 px-4 max-sm:px-2 text-[#05abdd] ">Grado</th>
                  <th className="py-2 px-4 max-sm:px-2 text-[#05abdd] ">Nota</th>
                  <th className="py-2 px-4 max-sm:px-2 max-sm:hidden text-[#05abdd]">Tiempo Exámen</th>
                  <th className="py-2 px-4 max-sm:px-2 text-[#05abdd] ">Puntos</th>
                 
                  
                </tr>
              </thead>


              {/*
              <tbody>
                
                {datos.map((data, index) => (
                  <tr key={index} className="">
                    <td className={`py-2 px-4 max-sm:hidden ${data.bg} `}>
                    
                     <div className=" border-2 rounded-full p-2">
                     <Image
                        src= {data.avatar}
                        alt={`Estudiante ${index + 1}`}
                        className="w-7 h-7  max-sm:hidden "
                        width={800}
                        height={800}
                      />
                     </div>
                    </td>
                    <td className={`py-2 px-4 max-sm:px-2 text-center ${data.textColor} font-poppins font-semibold text-xs ${data.bg}`}>{data.nombre} </td>
                    <td className={`py-2 px-4 max-sm:px-2 text-center ${data.textColor} text-xs font-poppins font-semibold  ${data.bg}`}>2° do</td>
                    <td className={`py-2 px-4 max-sm:px-2 text-center text-xs font-poppins ${data.textColor} font-semibold  ${data.bg}`}>20 </td>
                    <td className={`py-2 px-4 max-sm:px-2 text-center text-xs font-poppins font-semibold ${data.textColor} ${data.bg} max-sm:hidden text-[#167F99] border-collapse border-0 `}>1 hr y 30 min</td>
                    <td className={`py-2 px-4 max-sm:px-2 text-center text-xs  ${data.textColor}font-poppins font-semibold   ${data.bg}`}> 100 </td>                    
                   <td className={`${data.bg}`}>
                   <div className={`py-[6px]  px-[20px] mt-3 max-sm:px-2 ${data.textColor} font-semibold text-xs  
                      text-white ${data.textColor} flex gap-1 rounded-l-xl ${data.shadow} ${data.bg}`}>{data.animación}<MdOutlineStarPurple500 
                    className="text-white"/> 
                    </div>
                   </td>
                     
                   
                  </tr>
                ))}
              </tbody>
              */}
          </table>
        </div>

        <TabsRanking />
      </div>
    </div>
  );
}
