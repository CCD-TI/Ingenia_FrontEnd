"use client";

import CarruselCursos from "@/components/Carrusels/CarruselCursos";
import DraggableScrollContainer from "@/components/DraggableScrollContainer";
import { Avatar, AvatarGroup, Divider, ModalContent, Switch } from "@heroui/react";
import Beneficios from "@/components/Modulos/BeneficioModal";
import Image from "next/image";
import React from "react";
import {
  FaCheckCircle,
  FaFacebookF,
  FaInstagram,
  FaPlus,
  FaShoppingCart,
  FaStar,
  FaTiktok,
  FaUser,
  FaVideo,
} from "react-icons/fa";
import { FaCartShopping, FaRegCirclePlay, FaXTwitter } from "react-icons/fa6";
import CarruselPromos from "@/components/Carrusels/CarruselPromos";
import { IoBook } from "react-icons/io5";
import Testimonios from "@/components/Modulos/CursoDetalleComponet/Testimonios";
import { AiFillLike } from "react-icons/ai";
import { PiExamFill } from "react-icons/pi";
import CursosCarrusel from "@/components/Carrusels/CursosCarrusel";
import SectionCursos from "@/components/Modulos/CursoDetalleComponet/SectionCursos";
import Beneficio from "@/components/Modulos/Beneficio";
import ModalContents from "@/components/Modals/ModalContent"
import { GiOpenBook } from "react-icons/gi";
import { LuClapperboard } from "react-icons/lu";

function CursoDetalle() {
  return (
    <>
        {/* Curso Detalle /Primera seccion */}
      <div className="w-full h-full  py-16 pt-20 bg- relative bg-slate-800 bg-[url('https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Ejemplos/FondoTrama-ingenia-img.jpg')] bg-repeat">
        <div className="max-w-[100rem] w-full mx-auto flex flex-col items-center">
          <div className="w-full h-full  mx-auto  flex max-lg:flex-col justify-center gap-[4rem] items-start px-10 py-4 max-xl:px-20 max-lg:px-7">
            {/* Columna 1 */}
            <div className=" flex flex-col gap-6 w-[40%] max-2xl:w-[50%] max-lg:w-full ">
              {/* Nombre de los grados */}
              <div className="flex gap-2 items-end text-white">
                <div className="flex items-start font-bold">
                  <p className="text-5xl">4</p>
                  <p>to</p>
                </div>
                <h1 className="text-5xl font-bold">GRADO</h1>
              </div>
              {/* Nombre del curso */}
              <div className="rounded-2xl p-2  px-4 text-4xl font-bold bg-IngeniaYellowDark w-fit shadow-[0_0_25px_5px_rgba(168,123,4,0.7)] ">
                FÍSICA
              </div>
              {/* Tema del curso */}
              <h1 className="text-5xl font-bold text-IngeniaYellowDark">
                {" "}
                La fuerza de Atracción
              </h1>
              {/* Estadisiticas del Curso */}
              <div className="rounded-2xl  border-2 border-white p-3  text-white flex  justify-center items-center  space-x-4 text-small shadow-[0_0_5px_1px_rgba(255,255,255,0.7)] 
               max-sm:flex-wrap max-[325px]:items-start ">
                <div className="flex items-center gap-2 text-xl max-xl:text-base ">
                  <FaUser className=" text-IngeniaYellowDark" />
                  <h2>Integrantes</h2>
                </div>
                <div className="h-8 w-[2px] bg-white neon-white  max-[325px]:hidden "></div>
                <div className="flex items-center gap-2 text-xl  max-xl:text-base ">
                  <FaUser className=" text-IngeniaYellowDark" />
                  <h2>50%(250)</h2>
                </div>
                <div className="h-8 w-[2px] bg-white neon-white max-[480px]:hidden"></div>
                <div className="flex items-center gap-2 text-xl  max-xl:text-base ">
                  <FaUser className=" text-IngeniaYellowDark" />
                  <h2>
                    5 Horas <br /> Académicas
                  </h2>
                </div>
              </div>
              {/* swich de envio oh asincronico */}
              <div className="flex flex-col gap-3">
                <p className="text-white text-[15px] ">Selecciona tu modalidad:</p>
                <div className="flex gap-3 items-center w-full">
                  <Switch defaultSelected size="md">
                  <h1  className="text-white">Curso en vivo</h1>  
                  </Switch>
                  <FaVideo  className="text-2xl text-cyanIngenia " />
                </div>
              </div>
              {/* Texto plano */}
              <h1 className="text-2xl font-extrabold neon-white text-white">PROMOCIONES</h1>
              {/* Btn de compra */}
              <div className="flex items-center gap-4 font-extrabold">
                <button className="flex p-4  px-6 font-bold gap-3 rounded-2xl text-3xl w-fit bg-cyanIngenia text-white shadow-[0_0_15px_5px_rgba(49,133,247,0.7)]" >
                  <FaShoppingCart />
                  <h1>
                    s/ <span>599.99</span>
                  </h1>
                </button>
                <h1 className="text-2xl line-through text-cyanIngenia  ">
                  <span className="text-white"> S/ 899.99</span>
                </h1>
              </div>
              {/* Carrusel de promociones */}
              <CarruselCursos />
            </div>
            {/* Columna 2 */}
            <div className=" flex flex-col gap-6 w-[60%] max-2xl:w-[50%] max-lg:w-full h-full ">
              {/* Portada del Curso */}
                <Image
                alt=""
                src="https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Ejemplos/profesora.jpg"
                width={800}
                height={800}
                className="rounded-[3rem] w-full h-[600px]  shadow-[0_0_15px_4px_rgba(255,255,255,0.7)]  object-cover "
                />
              {/* Botones del modal */}
                <div className="flex justify-center gap-4 w-full items-center h-full  max-sm:flex-wrap">
                  <ModalContents
                   button={<div className="flex gap-1 items-center rounded-2xl border-2 border-dashed p-4 py-2 font-bold text-2xl text-white">
                              <FaPlus />
                              <p>TEMARIO</p>
                           </div>
                           } 
                   Content={undefined} 
                   sizesModal={"md"}                  
                  
                  />
                  <ModalContents
                   button={<div className="flex gap-1 items-center rounded-2xl border-2 border-dashed p-4 py-2 font-bold text-2xl text-white">
                             <GiOpenBook />
                              <p>LIBRO</p>
                           </div>
                           } 
                   Content={undefined} 
                   sizesModal={"md"}                  
                  
                  />
                  <ModalContents
                   button={<div className="flex gap-1 items-center rounded-2xl border-2 border-dashed p-4 py-2 font-bold text-2xl text-white">
                             <LuClapperboard />
                              <p>VIDEOS</p>
                           </div>
                           } 
                   Content={undefined} 
                   sizesModal={"md"}                  
                  
                  />
                </div>
            </div>
          </div>
        </div>

        <Testimonios />
        <SectionCursos />
        <Beneficio />
      </div>

      

    </>
  );
}

export default CursoDetalle;
