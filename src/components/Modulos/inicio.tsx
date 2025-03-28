import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa6";
import { environment } from "../../environments/environment";
import { IoIosArrowForward } from "react-icons/io";
import Contador from "../Contador";
import { div } from "framer-motion/client";

const storageUrl = process.env.NEXT_PUBLIC_STORAGE_URL || "";
const img = {
  portadas: {
    principal: `${storageUrl}/Home/Portada.png`,
    nosotros: `${storageUrl}/Home/fondo-nosotros.jpeg`,
  },
};

export default function Inicio() {
  return (
   
    

    
  
    <div id="inicio" className="h-full py-36 max-lg:h-full w-full flex justify-center items-center bg-gray-900">
      <div className="my-10 flex flex-col w-full justify-between mx-auto max-w-[100rem] lg:flex-row px-10">
        {/* Primera columna texto */}
        <div className="w-[50%] max-2xl:w-[60%] max-lg:w-full flex flex-col justify-start items-start gap-4 max-sm:gap-5">
         <div className="bg-sky-600 rotate-[-2deg] shadow-[0_0_20px_rgba(2,132,199,1)] drop-shadow-[0_0_10px_rgba(2,132,199,1)] py-1">
           <h1 className=" text-white ">
            <span className="text-8xl pr-10 pl-10 max-2xl:text-7xl max-md:text-4xl font-extrabold  drop-shadow-[0_0_10px_rgba(255,255,255,2)]
            max-md:leading-[0.1]  ">CONSTRUYE</span></h1>
            </div>
           
            <div className="bg-yellowIngenia rotate-[-2deg] drop-shadow-[0_0_10px_rgba(249,178,51,1)] shadow-[0_0_20px_rgba(234,179,8,1)] mb-6 py-1">
           <h1> <span className="text-8xl max-2xl:text-8xl max-md:text-6xl font-extrabold pl-10 pr-10 text-white
            drop-shadow-[0_0_10px_rgba(255,255,255,2)]">TU FUTURO</span>
           </h1>

          </div>
          
          <h1 className=" text-2xl max-sm:text-base max-2xl:text-lg font-poppins font-medium text-white mb-4">
          Educación accesible y de calidad para todos los estudiantes de la costa, sierra y selva del Perú.
          </h1>
          <div className="flex max-sm:flex-col gap-20">
            <button className="bg-transparent border-[3px] border-white rounded-xl p-3 py-4  text-base font-bold text-white
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
    </div>
    
 
  );
}
