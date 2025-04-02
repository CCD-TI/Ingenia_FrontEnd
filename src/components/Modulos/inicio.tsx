import Image from "next/image";
import React from "react";
import Conta from "@/components/Contador";
import { FaPlay } from "react-icons/fa6";
import { environment } from "../../environments/environment";
import { IoIosArrowForward } from "react-icons/io";
import Contador from "../Contador";
import { div } from "framer-motion/client";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

const storageUrl = process.env.NEXT_PUBLIC_STORAGE_URL || "";
const img = {
  portadas: {
    principal: `${storageUrl}/Home/Portada.png`,
    nosotros: `${storageUrl}/Home/fondo-nosotros.jpeg`,
  },
};

export default function Inicio() {
  return (
   
    

    
  
    <div id="inicio" className="h-full pt-48 max-lg:h-full w-full flex flex-col justify-center items-center bg-gray-900">
      <div className="my-10 flex flex-col w-full justify-between mx-auto max-w-[100rem] lg:flex-row px-10">
        {/* Primera columna texto */}
        <div className="w-[50%] max-2xl:w-[60%] max-lg:w-full flex flex-col justify-start items-start gap-4 max-sm:gap-5">
         <div className="bg-sky-600 rotate-[-2deg] shadow-[0_0_20px_rgba(2,132,199,1)] drop-shadow-[0_0_10px_rgba(2,132,199,1)] py-1">
           <h1 className=" text-white ">
            <span className="text-8xl pr-10 pl-10 max-2xl:text-7xl max-md:text-7xl font-extrabold  drop-shadow-[0_0_10px_rgba(255,255,255,2)]
            ">CONSTRUYE</span></h1>
            </div>
           
            <div className="bg-yellowIngenia rotate-[-2deg] drop-shadow-[0_0_10px_rgba(249,178,51,1)] shadow-[0_0_20px_rgba(234,179,8,1)] mb-8 py-1">
           <h1> <span className="text-8xl max-2xl:text-8xl max-md:text-6xl font-extrabold pl-10 pr-10 text-white
            drop-shadow-[0_0_10px_rgba(255,255,255,2)]">TU FUTURO</span>
           </h1>

          </div>
          
          <h1 className=" text-2xl max-sm:text-base max-2xl:text-lg font-poppins font-medium text-white mb-4">
          Educación accesible y de calidad para todos los estudiantes de la costa, sierra y selva del Perú.
          </h1>
          <div className="flex max-sm:flex-col gap-20">
            <button className="bg-transparent border-[3px] rounded-xl border-white  p-3 py-4  text-base font-bold text-white
            flex items-center gap-2 size-fit">
            <h1 className="text-2xl"> ¡Comienza ahora! </h1><IoIosArrowForward className="size-[20px] " />
            </button>
            <div className="flex gap-4 items-center  rounded-xl p-3 py-4 text-white font-bold size-fit bg-yellowIngenia">
              <a href="" className="font-medium text-base  flex gap-8 items-center">
               <h1 className="text-2xl"> Primera clase gratis </h1><IoIosArrowForward className="size-[20px] " />
              </a>
            </div>
          </div>
      

        </div>

      
        <div className="lg:w-auto ml-auto w-full h-fit">
       
        </div>
      </div>


      <div className="flex flex-col lg:flex-row gap-4 items-center bg-gradient-to-r from-[#D93D04] via-[#A66B16] to-[#048CD9] w-full mt-14 justify-center py-6 lg:py-9 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] px-4 sm:px-6">
  {/* Texto del descuento - siempre en su propia línea hasta lg */}
  <div className="flex flex-wrap justify-center items-center gap-2 lg:gap-4">
    <h1 className="text-white font-poppins font-semibold text-2xl sm:text-3xl lg:text-4xl">¡Aprovecha</h1>
    <h1 className="text-white font-poppins font-semibold text-2xl sm:text-3xl lg:text-4xl">el</h1>
    <h1 className="drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] text-white font-poppins 
     font-semibold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">80%</h1>
    <h1 className="text-white font-poppins font-semibold text-2xl sm:text-3xl lg:text-4xl">Dscto!</h1>
  </div>

  {/* Contador y botón - se mantienen juntos en todas las vistas */}
  <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-4 mt-0 lg:mt-0">
    <div className="border-2 rounded-2xl w-fit p-4 sm:p-5 lg:p-6 px-4 sm:px-5 lg:px-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] brightness-200 transition-transform duration-300 hover:scale-110">
      <Conta targetDate="06/30/2025 23:59:59" />
    </div>
    
    <button className="rounded-full py-4 sm:py-5 lg:py-6 px-6 sm:px-8 lg:px-10 border-2 border-white text-white font-poppins font-semibold text-xl sm:text-2xl lg:text-3xl drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] hover:bg-white hover:text-[#D93D04] transition-colors duration-300">
      ¡Comprar Ahora!
    </button>
  </div>
</div>
      
    </div>
    
    
 
  );
}
