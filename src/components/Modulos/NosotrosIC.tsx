// import Image from "next/image";
import React from "react";
import { environment } from "../../environments/environment";
import { motion } from "framer-motion";

const storageUrl = process.env.NEXT_PUBLIC_STORAGE_URL || "";
const img = {
  portadas: {
    principal: `${storageUrl}/Home/Portada.png`,
    nosotros: `${storageUrl}/Home/fondo-nosotros.jpeg`,
  },
};

export default function NosotrosIC() {
  return (
    <div className="bg-creamIngenia p-8 text-center z-50">
      {/* Título */}
      {/* <h1 className="text-4xl font-bold text-gray-800 mb-6">¿Quiénes Somos?</h1> */}

      {/* Descripción */}
      {/* <p className="text-lg text-gray-600 mb-12">
        Somos una Institución Educativa que, bajo nuestro sistema, vamos a
        reforzar la educación de calidad.
      </p> */}

      {/* Contenedor de Visión y Misión (Dos Columnas) */}
      <div className="grid grid-cols-1 md:grid-cols-2 px-24 gap-8">
        {/* Columna 1: Visión */}
        <section
          className="group relative z-10 flex justify-center items-center overflow-hidden "
          style={{ perspective: "800px" }}
        >
          {/* <span className="rounded-xl h-[6px] w-20 group-hover:w-28 bg-colors-sky-ccd group-hover:bg-colors-cyan-ccd transition duration-500"></span> Linea superior */}
          <motion.div>
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
          </motion.div>
        </section>

        {/* Columna 2: Misión */}
        <div className="p-6 text-left flex flex-col justify-center items-center gap-4">
          <div className="w-[650px] text-left flex flex-col justify-start">
            <h2 className="text-7xl font-semibold text-cyanIngenia mb-4">
              Quienes
            </h2>
            <h2 className="text-7xl font-semibold text-yellowIngenia mb-4">
              Somos?
            </h2>
          </div>
          <p className="text-grayIngenia text-2xl w-[650px]">
            Somos una Institución Educativa que bajo nuestro sistema vamos a
            reforzar la educación de calidad.
          </p>
          <div className="flex justify-center items-center gap-10">
            <div className="flex relative justify-center items-center gap-4">
              <span className="rounded-lg py-4 px-5 bg-yellowIngenia"></span>
              <h3 className="text-grayIngenia text-2xl">Visión</h3>
            </div>
            <div className="flex relative justify-center items-center gap-4">
              <span className="rounded-lg py-4 px-5 bg-yellowIngenia"></span>
              <h3 className="text-grayIngenia text-2xl">Misión</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
