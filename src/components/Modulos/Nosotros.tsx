import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import ModalText from "../Modals/ModalText";

export const Nosotros = () => {
  return (
    <>
      <div className="bg-creamIngenia p-8 text-center z-50 py-20">
        {/* Título */}
        {/* <h1 className="text-4xl font-bold text-gray-800 mb-6">¿Quiénes Somos?</h1> */}

        {/* Descripción */}
        {/* <p className="text-lg text-gray-600 mb-12">
        Somos una Institución Educativa que, bajo nuestro sistema, vamos a
        reforzar la educación de calidad.
      </p> */}

        {/* Contenedor de Visión y Misión (Dos Columnas) */}
        <div className="grid grid-cols-1 md:grid-cols-2 px-24 max-lg:px-3 gap-8 max-w-[100rem] mx-auto ">
          {/* Columna 1: Visión */}
          <section
            className="w-[50%] group relative z-10 flex justify-center items-center overflow-hidden "
            style={{ perspective: "800px" }}
          >
            {/* <span className="rounded-xl h-[6px] w-20 group-hover:w-28 bg-colors-sky-ccd group-hover:bg-colors-cyan-ccd transition duration-500"></span> Linea superior */}

            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <video
                className="video-vertical   "
                src="/video/video-docentes.mp4" // Asegúrate de colocar aquí la ruta correcta de tu video
                controls={false} // Desactivamos los controles
                style={{ position: "static", cursor: "pointer" }} // Añadimos cursor pointer
                muted
                autoPlay // Autoplay
                loop
              />
            </div>
          </section>

          {/* Columna 2: Misión */}
          <div className=" text-left flex flex-col justify-center items-center gap-6 w-full">
            <div className="w-full">
              <h2 className="text-7xl max-lg:text-4xl font-semibold text-yellowIngenia mb-4 ">
                ¿Quienes Somos?
              </h2>
            </div>
            <p className="text-grayIngenia text-2xl max-lg:text-base w-full">
              Somos una Institución Educativa que bajo <br /> nuestro sistema
              vamos a reforzar la <br />
              educación de calidad.
            </p>
            <div className="flex justify-start items-start gap-16 max-lg:gap-6 w-full">
              <ModalText
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim esse nostrum reiciendis consequatur est repellendus inventore dolor maxime ad animi necessitatibus, aperiam error natus! Modi eveniet doloremque sapiente cumque?
"
                button={
                  <div className="flex flex-col justify-center items-start ">
                    {/* <span className="rounded-lg py-4 px-5 bg-yellowIngenia"></span> */}
                    <h3 className="text-grayIngenia text-3xl max-md:text-xl font-bold">
                      Misión
                    </h3>
                    <h3 className="flex items-center font-extralight max-md:text-xs">
                      Conoce mas aquí <IoIosArrowForward className=" max-md:text-3xl text-5xl" />{" "}
                    </h3>
                  </div>
                }
              />
              <ModalText
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim esse nostrum reiciendis consequatur est repellendus inventore dolor maxime ad animi necessitatibus, aperiam error natus! Modi eveniet doloremque sapiente cumque?"
                button={
                  <div className="flex flex-col justify-center items-start ">
                    {/* <span className="rounded-lg py-4 px-5 bg-yellowIngenia"></span> */}
                    <h3 className="text-grayIngenia text-3xl max-md:text-xl font-bold">
                      Visión
                    </h3>
                    <h3 className="flex items-center font-extralight max-md:text-xs">
                      Conoce mas aquí <IoIosArrowForward className=" max-md:text-3xl text-5xl" />{" "}
                    </h3>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
