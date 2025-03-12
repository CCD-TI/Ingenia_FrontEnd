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
      <div id="nosotros" className="bg-white p-9   text-center z-50 py-16 max-sm:px-3">


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

              <span className="block text-[60px] max-sm:text-5xl  md:text-[80px] lg:text-[100px] 
              font-poppins font-black text-[#fbb621]  leading-[0.5] ">
                ¿QUIÉNES
              </span>

              <span className="block text-[80px] max-sm:text-xl md:text-[106px] lg:text-[120px] font-poppins font-black text-[#05abdd]">
                SOMOS?
              </span>
            </div>


            <div className="text-center md:text-left w-full max-w-[600px] px-4 md:px-6 lg:px-8 xl:px-12 mr-auto max-lg:mx-auto">
              <p className="text-grayIngenia text-lg sm:text-xl md:text-2xl lg:text-3xl font-poppins font-normal max-lg:text-center  ">
                Somos una Institución Educativa que bajo
                nuestro sistema vamos a reforzar la
                educación de calidad.
              </p>
            </div>


            <div className="flex  max-[470px]:flex-col items-start max-[470px]:items-center   w-full max-w-[1200px] max-lg:justify-center  
            px-4 md:px-6 lg:px-8 xl:px-12 gap-6 md:gap-12 ">
              <ModalText

                modal={
                  <div className=" shadow-xl shadow-gray-700/20 flex w-full ">

                    <div className=" flex flex-col gap-1 items-center  w-[480px]">

                      <h1 className="text-4xl font-poppins font-extrabold text-center text-white flex items-center justify-center mt-6 w-full gap-3 drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] 
                 [text-shadow:_-2px_-2px_0_#facc15,_2px_-2px_0_#facc15,_-2px_2px_0_#facc15,_2px_2px_0_#facc15] tracking-[0.2em] ">
                   
                        VISIÓN
                      </h1>

                      <Image
                        src="/img/student.png"
                        alt="Primer lugar"
                        className=" object-cover animate-jump animate-infinite animate-duration-[7000ms] animate-ease-linear"
                        width={200}
                        height={200}
                      />
                    </div>

                             

                    <div className="px-6 py-5 w-full">     
                      <div className=" bg-white/50 shadow-2xl  border-2 border-yellow-500  p-2 rounded-xl">
                      <p className="font-poppins  text-center text-black text-sm leading-relaxed ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia consequuntur laborum debitis doloremque explicabo.
                        Magni, similique quam. Maxime, error asperiores. Culpa dolorem atque laudantium,  molestias excepturi ducimus rem tempore a?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque in provident enim aperiam saepe quaerat! Alias,
                        m, consequuntur amet, natus omnis quidem suscipit inventore enim esse recusandae quis maiores obcaecati!
                       
                      </p>
                        </div>               
                      
                    </div>
                  </div>
                }

                button={
                  <div className="flex flex-col justify-center items-start">
                    {/* <span className="rounded-lg py-4 px-5 bg-yellowIngenia"></span> */}
                    <div className="">
                      <h3 className="text-grayIngenia text-3xl max-md:text-xl font-poppins font-black text-yellowIngenia  pr-24 mb-1">
                        Misión
                      </h3>
                      <h3 className="flex items-center max-md:text-xs font-poppins font-normal border-2 border-[#05abdd] px-3 py-1 rounded-lg min-w-[150px] whitespace-nowrap">
                        Conoce más aquí <IoIosArrowForward className="text-4xl text-[#05abdd]" />
                      </h3>

                    </div>

                  </div>
                }
              />

              <ModalText

                modal={
                  <div className="rounded-2xl shadow-xl shadow-gray-700/20 border border-gray-200 bg-white overflow-hidden 
                    transition-all scale-95 hover:scale-100">
                    {/* Imagen arriba */}
                    <Image
                      src="/img/inge.jpg"
                      alt="Tercer lugar"
                      className="w-full object-cover transition-y-[-50] transition-transform duration-75"
                      height={400}
                      width={400}
                    />


                    <div className="px-6 py-8 flex flex-col gap-6 bg-[#d3d3d3]">

                      <p className="font-poppins font-medium text-center text-white text-lg leading-relaxed ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia consequuntur laborum debitis doloremque explicabo.
                        Magni, similique quam. Maxime, error asperiores. Culpa dolorem atque laudantium, molestias excepturi ducimus rem tempore a?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque in provident enim aperiam saepe quaerat! Alias,

                      </p>
                    </div>
                  </div>
                }


                button={
                  <div className="flex flex-col justify-center items-start">
                    {/* <span className="rounded-lg py-4 px-5 bg-yellowIngenia"></span> */}
                    <div className="">
                      <h3 className="text-grayIngenia text-3xl max-md:text-xl font-poppins font-black text-yellowIngenia  pr-24 mb-1">
                        Misión
                      </h3>
                      <h3 className="flex items-center max-md:text-xs font-poppins font-normal border-2 border-[#05abdd] px-3 py-1 rounded-lg min-w-[150px] whitespace-nowrap">
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
          <div className="w-full h-[2px] bg-gray-300"></div>

          {/* Círculos en los extremos */}
          <div className="absolute left-0 w-3 h-3 bg-gray-400 rounded-full"></div>
          <div className="absolute right-0 w-3 h-3 bg-gray-400 rounded-full"></div>
        </div>



      </div>

    </>
  );
};
