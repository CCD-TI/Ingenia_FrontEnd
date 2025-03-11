"use client";

import CarruselCursos from "@/components/Carrusels/CarruselCursos";
import DraggableScrollContainer from "@/components/DraggableScrollContainer";
import ModalContents from "@/components/Modals/ModalContent";
import { Avatar, AvatarGroup, ModalContent } from "@heroui/react";
import Beneficios from "@/components/Modulos/BeneficioModal";
import Image from "next/image";
import React from "react";
import {
  FaCheckCircle,
  FaFacebookF,
  FaInstagram,
  FaStar,
  FaTiktok,
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

function CursoDetalle() {
  return (
    <>
      <div className="w-full h-full pt-10   bg- relative bg-white bg-[url('https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Ejemplos/FondoTrama-ingenia-img.jpg')] bg-repeat">
        <div
          className="bg-[url('https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Home/grado.jpg')] h-full  bg-no-repeat bg-contain w-full   absolute -top-20 left-0 z-10"
          style={{ clipPath: "ellipse(55% 10% at 50% 0%)" }}
        >
          <div className="size-full flex flex-col  gap-4 items-center justify-end h-[350px] mt-3">
            <div className="flex items-center gap-4">
              <div className="flex items-start justify-center">
                <p className="text-7xl text-white font-extrabold drop-shadow-[0_0_15px_rgba(255,255,255,1)]">
                  4
                </p>
                <p className="text-3xl text-white font-extrabold drop-shadow-[0_0_15px_rgba(255,255,255,1)]">
                  to
                </p>
              </div>
              <h1 className="text-7xl text-white font-extrabold drop-shadow-[0_0_15px_rgba(255,255,255,1)]">
                GRADO
              </h1>
            </div>
            <h1 className="text-3xl text-white font-extrabold drop-shadow-[0_0_15px_rgba(255,255,255,1)]">
              PRIMARIA
            </h1>
          </div>
        </div>
        <div className="max-w-[100rem] w-full mx-auto flex flex-col items-center">
          <div className="w-[90%] h-full  mx-auto mt-[18rem] flex  justify-center gap-[4rem] items-start px-10 py-4">
            <div className=" w-[65%] h-full flex flex-col items-start justify-centr gap-2  rounded-xl ">
              <div>
                <h1 className="text-6xl font-extrabold mb-4 text-cyan-400">
                  Física
                </h1>
              </div>
              <div className="flex flex-col gap-4 w-full">
                <h1 className="font-bold text-3xl py-2 text-cyan-400">
                  Resumen
                </h1>
                <p className="font-semibold text-slate-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                  facere expedita earum quisquam saepe eligendi ullam aliquid,
                  obcaecati reiciendis repudiandae totam voluptatem, consectetur
                  rem. Fugiat atque quam iste optio enim?
                </p>
                <div className="flex items-center justify-between px-4  gap-4 p-4 border-2 border-dashed border-cyan-400 rounded-xl w-full">
                  <div className="flex flex-col items-center">
                    <h1 className="flex items-center gap-2 text-xl">
                      {" "}
                      4.6 <FaStar className="text-2xl text-cyan-300" />
                    </h1>
                    <p className="text-xs">(188 reseñas)</p>
                  </div>
                  <span className="text-cyan-300">|</span>
                  <div className="flex flex-col items-start ">
                    <h1 className="text-lg font-bold ">Nivel Primaria</h1>
                    <h1 className="flex items-center gap-1 text-sm ">
                      Experiencia recomendada{" "}
                      <AiFillLike className="text-xl text-cyan-300   mb-1" />
                    </h1>
                  </div>
                  <span className="text-cyan-300">|</span>
                  <div className="flex flex-col items-start ">
                    <h1 className="text-[1rem] font-bold ">Ejercicios Prácticos</h1>
                    <h1 className="flex items-center gap-1 text-xs ">
                    Más de 100 ejercicios interactivos
                      <PiExamFill  className="text-2xl text-cyan-300   mb-1" />
                    </h1>
                  </div>
                  <span className="text-cyan-300">|</span>
                  <div className="flex flex-col items-start ">
                    <h1 className="text-[1rem] font-bold ">500 horas academicas</h1>
                    <h1 className="flex items-center gap-1 text-xs ">
                      El mejor material en HD
                      <FaRegCirclePlay  className="text-xl text-cyan-300   mb-1" />
                    </h1>
                  </div>
                </div>
              </div>
              <div className="size-full flex flex-col gap-4">
                <div className="border-[2px] border-cyan-300 border-dashed bg-transparent  rounded-xl relative my-4">
                  <Image
                    alt=""
                    src="https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Ejemplos/profesora.jpg"
                    width={1000}
                    height={200}
                    className="rounded-3xl w-full h-[500px] object-cover p-2 "
                  />
                  <FaRegCirclePlay className="absolute text-9xl  left-[43%] top-[40%]  text-cyan-400/60 " />
                </div>
                <div className="w-full relative">
                  <h1 className="text-3xl font-bold absolute text-cyan-400">
                    Mas Materias
                  </h1>
                  <CarruselCursos />
                </div>
              </div>
            </div>
            <div className=" h-fit border-2 border-dashed border-amber-400  p-2 rounded-xl w-[500px]  mt-11">
              <div className="size-full bg-amber-400/60 p-6 rounded-xl flex flex-col items-center gap-8">
                <h1 className="p-4  w-fit text-white font-bold text-3xl rounded-xl">
                  Profesores Destacados
                </h1>
                <div className=" w-[75%]  mx-auto">
                  <DraggableScrollContainer>
                    <AvatarGroup isBordered max={15} size="lg" total={1}>
                      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                      <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                    </AvatarGroup>
                  </DraggableScrollContainer>
                </div>
                <div className="flex flex-col items-center gap-6 w-full">
                  <ModalContents
                    button={
                      <div className="p-4 bg-gradient-to-r from-green-300 via-teal-300 to-yellow-200 rounded-2xl border-[2.5px]  w-[250px] shadow-lg shadow-slate-200 text-white font-bold text-xl flex gap-2 justify-center items-center  ">
                        <h1>Temario</h1>
                        <IoBook className="text-2xl" />
                      </div>
                    }
                    Content={
                      <div className="flex gap-10 w-full bg-blue-400 p-6">
                        <Image
                          alt="ejemplo"
                          src="https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Ejemplos/Temario.png"
                          width={600}
                          height={600}
                          className=" rounded-2xl "
                        />

                        <div className="w-full">
                          <h1 className="text-3xl text-white text-center font-bold my-2">
                            Profesores
                          </h1>

                          <div className="flex flex-col items-center gap-4 overflow-y-auto h-[600px]">
                            <Image
                              alt="ejemplo"
                              src="https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Ejemplos/Temario.png"
                              width={300}
                              height={800}
                              className=" rounded-2xl border-2 border-cyan-600"
                            />
                            <Image
                              alt="ejemplo"
                              src="https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Ejemplos/Temario.png"
                              width={300}
                              height={800}
                              className=" rounded-2xl border-2 border-cyan-600"
                            />
                            <Image
                              alt="ejemplo"
                              src="https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Ejemplos/Temario.png"
                              width={300}
                              height={800}
                              className=" rounded-2xl border-2 border-cyan-600"
                            />
                          </div>
                        </div>
                      </div>
                    }
                    sizesModal="5xl"
                  />
                  {/* <hr className="w-[80%] mx-auto border-white" /> */}
                </div>
                <div className="flex flex-col items-center gap-16 w-full">
                  <ModalContents
                    button={
                      <div className="w-[250px] p-4 bg-gradient-to-r from-green-300 via-teal-300 to-yellow-200 rounded-2xl border-[2.5px]  text-white shadow-lg font-bold text-xl flex gap-2 justify-center items-center animate-wiggle animate-infinite ">
                        <h1>¡Comprar Ahora!</h1>
                        <FaCartShopping className="text-2xl" />
                      </div>
                    }
                    Content={<Beneficios />}
                    sizesModal="md"
                  />
                  {/* <hr className="w-[80%] mx-auto border-white" /> */}
                </div>
                <div className="flex flex-col items-center  w-full">
                  <h1 className="font-bold text-white text-3xl">
                    Promociones:
                  </h1>
                  <CarruselPromos />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Testimonios />
        <SectionCursos/>
        <Beneficio/>
       
      </div>
    </>
  );
}

export default CursoDetalle;
