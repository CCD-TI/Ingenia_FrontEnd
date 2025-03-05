import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import ModalText from "../Modals/ModalText";

export const Nosotros = () => {
  return (
    <>
      <div id="nosotros" className="bg-white p-9   text-center z-50 py-16">
      

        {/* Contenedor de Visión y Misión (Dos Columnas) */}
        <div className="grid grid-cols-1 md:grid-cols-2 px-[20px] max-lg:px-3 gap-0 max-w-[120rem] mx-auto items-center ">
          {/* Columna 1: Visión */}
          <section className="w-full flex justify-center items-center" style={{ perspective: "500px" }}>
    <div className="flex justify-center w-[60%] md:w-[70%] h-auto">
      <video
        className="video-vertical rounded-2xl h-[450px]"
        src="/video/video-docentes.mp4"
        controls={false}
        style={{ cursor: "pointer" }}
        muted
        autoPlay
        loop
      />
    </div>
  </section>

          {/* Columna 2: Misión */}
          <div className=" text-left flex flex-col justify-center gap-2 items-center w-full">


          <div className="w-full flex flex-col items-center text-center">
  <div className="mr-[430px] mb-[-45px]">
    <span className="text-[80px] max-lg:text-4xl font-poppins font-black text-[#fbb621] ">
      ¿QUIÉNES
    </span>
  </div>
  <div className="mr-[280px] mb-[-24px]" >
    <span className="text-[106px] max-lg:text-5xl font-poppins font-black text-[#05abdd]">
      SOMOS?
    </span>
  </div>
</div>
<div className="mr-72 mb-4 ">
  
<p className="text-grayIngenia text-2xl max-lg:text-base w-full font-poppins font-normal  ">
              Somos una Institución Educativa que bajo <br /> nuestro sistema
              vamos a reforzar la <br />
              educación de calidad.
            </p>


</div>

           
           

           
            
            <div className="flex justify-start items-start gap-16 max-lg:gap-6 w-full">
              <ModalText
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim esse nostrum reiciendis consequatur est repellendus inventore dolor maxime ad animi necessitatibus, aperiam error natus! Modi eveniet doloremque sapiente cumque?
"
                button={
                  <div className="flex flex-col justify-center items-start">
                    {/* <span className="rounded-lg py-4 px-5 bg-yellowIngenia"></span> */}
                    <div className="">
                    <h3 className="text-grayIngenia text-3xl max-md:text-xl font-poppins font-black text-yellowIngenia pr-16 mb-1">
                      Misión
                    </h3>
                    <h3 className="flex items-center font-poppins font-normal max-md:text-xs border-2 border-[#05abdd] pl-2 rounded-lg ">
                      Conoce mas aquí <IoIosArrowForward className=" max-md:text-3xl text-5xl text-[#05abdd]" />{" "}
                    </h3>

                    </div>
                 
                  </div>
                }
              />
              <ModalText
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim esse nostrum reiciendis consequatur est repellendus inventore dolor maxime ad animi necessitatibus, aperiam error natus! Modi eveniet doloremque sapiente cumque?"
                button={
                  <div className="flex flex-col justify-center items-start  ">
                    {/* <span className="rounded-lg py-4 px-5 bg-yellowIngenia"></span> */}
                    <h3 className="text-grayIngenia text-3xl max-md:text-xl font-poppins font-black text-[#05abdd] mb-1">
                      Visión
                    </h3>
                    <h3 className="flex items-center max-md:text-xs font-poppins font-normal border-2 border-[#05abdd] pl-2 rounded-lg">
                      Conoce mas aquí <IoIosArrowForward className=" max-md:text-3xl text-5xl text-[#05abdd]" />{" "}
                    </h3>
                   

                  </div>
                  
                }
              />
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center w-[1300px] mx-44">
                      {/* Línea */}
                      <div className="w-full h-[2px] bg-gray-300 mt-12"></div>

                      {/* Círculos en los extremos */}
                      <div className="absolute left-0 w-3 h-3 bg-gray-400 rounded-full mt-12"></div>
                      <div className="absolute right-0 w-3 h-3 bg-gray-400 rounded-full mt-12"></div>
                    </div>
      </div>
     
    </>
  );
};
