import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import ModalText from "../Modals/ModalText";
import Image from "next/image";
import {Image as ImageHero} from "@heroui/react";
import { div } from "framer-motion/client";
import { IoEyeSharp } from "react-icons/io5";


export const Nosotros = () => {
  return (
    <>
      <div id="nosotros" className="bg-black p-9   text-center z-50 py-32 max-sm:px-3">


        {/* Contenedor de Visión y Misión (Dos Columnas) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 px-[10px] max-lg:px-3 gap-0 max-w-[120rem] mx-auto items-center  ">
          {/* Columna 1: Visión */}

          <div className="w-[450px] max-sm:w-full  max-sm:text-3xl mx-auto flex justify-center items-center">
            <video
              className="rounded-2xl size-full "
              src="/video/video-docentes.mp4"
              controls={false}
              style={{ cursor: "pointer" }}
              muted
              autoPlay
              loop
            />
          </div>

          {/* Columna 2: Misión */}
          <div className=" text-left flex flex-col justify-center gap-4 items-center w-full">


            <div className="w-full text-left pl-6  max-sm:mt-10 max-lg:mt-10 max-lg:text-center ">

              <span className="block text-[60px] max-sm:text-6xl sm:text-6xl md:text-[80px] lg:text-[100px] 
              font-poppins font-black text-[#fbb621]  leading-[0.5] mb-2 ">
                SOMOS TU
              </span>

              <span className="block  max-sm:text-5xl sm:text-6xl md:text-[80px] lg:text-[95px] font-poppins font-black text-[#ffffff]
              leading-[1] drop-shadow-[0_0_10px_rgba(255,255,255,2)]">
                MEJOR OPCIÓN!
              </span>
            </div>


            <div className="text-center md:text-left w-full max-w-[600px] px-4 md:px-6 lg:px-8 xl:px-12 mr-auto max-lg:mx-auto">
              <p className="text-grayIngenia text-lg sm:text-xl md:text-2xl lg:text-3xl font-poppins text-white font-normal max-lg:text-center  ">
                <p> Somos una Institución Educativa que bajo nuestro sistema vamos a reforzar la educación de calidad.</p>  
              
              </p>
            </div>


            <div className="flex  max-[470px]:flex-col items-start max-[470px]:items-center   w-full max-w-[1200px] max-lg:justify-center  
            px-4 md:px-6 lg:px-8 xl:px-12 gap-6 md:gap-12 ">
              <ModalText
modal={
  <div className="shadow-xl shadow-gray-700/20 flex flex-col lg:flex-row items-center w-full bg-gradient-to-r from-[#05ABDD] to-[#000000] p-4 lg:p-0">
    {/* Recuadro gradiente - arriba en móvil/tablet, izquierda en desktop */}
    <div className="flex flex-col w-full lg:w-[600px] px-4 lg:pl-7 order-1 lg:order-none mb-4 lg:mb-0">
      <div className="bg-gradient-to-b from-[#05ABDD] to-[#000000] h-[250px] lg:h-[350px] w-full lg:w-[500px] px-4 lg:pl-4 rounded-xl shadow-[inset_0_-8px_20px_#05ABDD] drop-shadow-[0_0_30px_#05ABDD] mx-auto">
      </div>
    </div>

    {/* Contenido de Misión - abajo en móvil/tablet, derecha en desktop */}
    <div className="px-4 lg:pl-9 lg:pr-20 py-5 w-full flex flex-col gap-1 order-2 lg:order-none"> 
      <h1 className="text-justify text-[#05ABDD] font-poppins font-bold text-3xl lg:text-5xl drop-shadow-[0_0_30px_#05ABDD] mt-0 lg:mt-7">
        Misión
      </h1>                       
      <p className="font-poppins mt-4 lg:mt-7 text-justify text-white text-sm lg:text-[15px] leading-relaxed mb-4 lg:mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia consequuntur laborum debitis doloremque explicabo.
        Magni, similique quam. Maxime, error asperiores. Culpa dolorem atque laudantium, molestias excepturi ducimus rem tempore a?
        Magni, similique quam. Maxime, error asperiores. Culpa dolorem atque laudantium, molestias excepturi ducimus rem tempore a?
        Magni, similique quam. Maxime, error asperiores. Culpa dolorem atque laudantium, molestias excepturi ducimus rem tempore 
      </p>
    </div>
  </div>
}
                button={
                  <div className="flex flex-col justify-center items-start">
                    {/* <span className="rounded-lg py-4 px-5 bg-yellowIngenia"></span> */}
                    <div className="">
                      <h3 className="text-grayIngenia text-3xl max-md:text-xl font-poppins font-black text-yellowIngenia  pr-24 mb-3">
                        Misión
                      </h3>
                      <h3 className="flex items-center text-white max-md:text-xs font-poppins font-normal border-2 border-[#05abdd] px-3 py-1 rounded-lg min-w-[150px] whitespace-nowrap">
                        Conoce más aquí <IoIosArrowForward className="text-4xl text-[#05abdd]" />
                      </h3>

                    </div>

                  </div>
                }
              />

              <ModalText

modal={
  <div className="shadow-xl shadow-gray-700/20 flex flex-col lg:flex-row items-center w-full bg-gradient-to-r from-[#f9b233] to-[#000000] p-4 lg:p-0">
    {/* Recuadro gradiente - arriba en móvil/tablet, izquierda en desktop */}
    <div className="flex flex-col w-full lg:w-[600px] px-4 lg:pl-7 order-1 lg:order-none mb-4 lg:mb-0">
      <div className="bg-gradient-to-b from-[#f9b233] to-[#000000] h-[250px] lg:h-[350px] w-full lg:w-[500px] px-4 lg:pl-4 rounded-xl shadow-[inset_0_-8px_20px_#f9b233] drop-shadow-[0_0_30px_#f9b233] mx-auto">
      </div>
    </div>

    {/* Contenido de Visión - abajo en móvil/tablet, derecha en desktop */}
    <div className="px-4 lg:pl-9 lg:pr-20 py-5 w-full flex flex-col gap-1 order-2 lg:order-none"> 
      <h1 className="text-justify text-[#f9b233] font-poppins font-bold text-3xl lg:text-5xl drop-shadow-[0_0_30px_#f9b233] mt-0 lg:mt-7">
        Visión
      </h1>                       
      <p className="font-poppins mt-4 lg:mt-7 text-justify text-white text-sm lg:text-[15px] leading-relaxed mb-4 lg:mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia consequuntur laborum debitis doloremque explicabo.
        Magni, similique quam. Maxime, error asperiores. Culpa dolorem atque laudantium, molestias excepturi ducimus rem tempore a?
        Magni, similique quam. Maxime, error asperiores. Culpa dolorem atque laudantium, molestias excepturi ducimus rem tempore a?
        Magni, similique quam. Maxime, error asperiores. Culpa dolorem atque laudantium, molestias excepturi ducimus rem tempore 
      </p>
    </div>
  </div>
}


                button={
                  <div className="flex flex-col justify-center items-start">
                    {/* <span className="rounded-lg py-4 px-5 bg-yellowIngenia"></span> */}
                    <div className="">
                      <h3 className="text-grayIngenia text-3xl max-md:text-xl font-poppins font-black text-white   pr-24 mb-3">
                        Visión
                      </h3>
                      <h3 className="flex items-center text-white max-md:text-xs font-poppins font-normal border-2 border-[#05abdd] px-3 py-1 rounded-lg min-w-[150px] whitespace-nowrap">
                        Conoce más aquí <IoIosArrowForward className="text-4xl text-[#05abdd]" />
                      </h3>

                    </div>

                  </div>
                }
              />


            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center w-full max-w-[1300px] px-4 mx-auto mt-12">
        {/* Línea */}
        <div className="w-full h-[2px] bg-[#05abdd] "></div>

        {/* Círculos en los extremos */}
        <div className="absolute left-0 w-3 h-3 bg-[#1b5a79] rounded-full"></div>
        <div className="absolute right-0 w-3 h-3 bg-[#1b5a79] rounded-full"></div>
      </div>



      </div>

    </>
  );
};
