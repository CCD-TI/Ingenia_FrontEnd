import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa6";
import { environment } from "../../environments/environment";
import { IoIosArrowForward } from "react-icons/io";
import Contador from "../Contador";

const storageUrl = process.env.NEXT_PUBLIC_STORAGE_URL || "";
const img = {
  portadas: {
    principal: `${storageUrl}/Home/Portada.png`,
    nosotros: `${storageUrl}/Home/fondo-nosotros.jpeg`,
  },
};

export default function Inicio() {
  return (
    <div className="h-full py-20 max-lg:h-full w-full flex justify-center items-center bg-[linear-gradient(120deg,_#3185F7_10%,_#FFD700_90%)]">
      <div className="my-10 flex flex-col w-full justify-between mx-auto max-w-[100rem] lg:flex-row px-10">
        {/* Primera columna texto */}
        <div className="w-[50%] max-2xl:w-[60%] max-lg:w-full flex flex-col justify-start items-start gap-10 max-sm:gap-5">
          <h1 className="flex flex-col text-white ">
            <span className="text-5xl max-sm:text-2xl font-extrabold leading-[0.2]">CONSTRUYE TU</span>
            <span className="text-9xl max-sm:text-6xl font-extrabold ">FUTURO</span>
          </h1>
          <h1 className=" text-2xl max-sm:text-base font-bold text-white">
          Educación accesible y de calidad para todos los estudiantes de la costa, sierra y selva del Perú.
          </h1>
          <div className="flex max-sm:flex-col gap-6">
            <button className="bg-white border-2 border-violet-700 rounded-full p-3 py-4  text-base font-bold text-violet-700 flex items-center gap-2 size-fit">
            <h1> Comienza ahora </h1><IoIosArrowForward className="size-[20px] " />
            </button>
            <div className="flex gap-4 items-center border-[3px] rounded-full p-3 py-4 text-white font-bold size-fit">
              <a href="" className="font-medium text-base  flex gap-8 items-center">
               <h1> Primera clase </h1><IoIosArrowForward className="size-[20px] " />
              </a>
            </div>
          </div>
          <div>
          <div className="flex text-white mt-7 mb-4">
           <div>
              <h1 className="text-9xl max-lg:text-6xl">80</h1>
            </div>
            <div className="flex flex-col gap-1 text-white  ">
              <p className="text-4xl font-bold max-lg:text-xl  max-lg:leading-[0] ">%</p>
              <p className="text-sm font-bold">Dscto</p>
              <p className="ml-[58px] font-bold text-2xl max-lg:text-base max-lg:leading-[1.5] max-lg:ml-[40px]">PROMOCIÓN</p>
           </div>
           
           </div>
           <Contador targetDate="02/28/2025 23:59:59"/>
          </div>

        </div>

        {/* Segunda columna Img */}
        <div className="lg:w-auto ml-auto w-full h-fit">
          {/* <Image
            src={img.portadas.principal}
            className=""
            alt="landing-inicio"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          /> */}
        </div>
      </div>
    </div>
  );
}
