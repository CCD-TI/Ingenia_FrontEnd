import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa6";
import { environment } from "../../environments/environment";

const storageUrl = process.env.NEXT_PUBLIC_STORAGE_URL || "";
const img = {
  portadas: {
    principal: `${storageUrl}/Home/Portada.png`,
    nosotros: `${storageUrl}/Home/fondo-nosotros.jpeg`,
  },
};

export default function Inicio() {
  return (
    <div className="h-[96vh] max-lg:h-full w-full flex justify-center items-center bg-[linear-gradient(120deg,_#3185F7_10%,_#FFD700_90%)]">
      <div className="flex flex-col w-full justify-between mx-auto max-w-[100rem] lg:flex-row px-10">
        {/* Primera columna texto */}
        <div className="w-[50%] max-2xl:w-[60%] max-lg:w-full flex flex-col justify-start items-start gap-10 max-sm:gap-5">
          <h1 className="text-5xl max-xl:text-[2.6rem] font-semibold leading-[4.5rem] max-md:text-3xl max-sm:text-2xl">
            ¿Ingresar a la Universidad o <br />
            repasar todos tus ? <br />
            Ingenia, es la solución
          </h1>
          <div className="flex max-sm:flex-col gap-6">
            <button className="bg-cyanIngenia rounded-full p-4 px-8 text-2xl font-bold text-white">
              Cursos Comienza Ahora
            </button>
            <div className="flex gap-4 items-center">
              <div className="p-4 bg-white w-fit rounded-full">
                <FaPlay className="text-4xl text-cyanIngenia" />
              </div>
              <a href="" className="font-medium text-xl underline">
                Mi primera clase
              </a>
            </div>
          </div>
        </div>

        {/* Segunda columna Img */}
        <div className="lg:w-auto ml-auto w-full h-fit">
          <Image
            src={img.portadas.principal}
            className=""
            alt="landing-inicio"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
}
