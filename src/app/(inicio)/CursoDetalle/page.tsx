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
  FaTiktok,
} from "react-icons/fa";
import { FaCartShopping, FaRegCirclePlay, FaXTwitter } from "react-icons/fa6";
import CarruselPromos from "@/components/Carrusels/CarruselPromos";
import { IoBook } from "react-icons/io5";

function CursoDetalle() {
  return (
    <div className="w-full h-full pt-10  px-6 bg- relative bg-white bg-[url('https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Ejemplos/FondoTrama-ingenia-img.jpg')] bg-repeat">
      <div
        className="bg-[url('https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Home/grado.jpg')]   bg-no-repeat bg-contain w-full h-full absolute -top-24 left-0"
        style={{ clipPath: "ellipse(55% 30% at 50% 0%)" }}
      >
        <div className="size-full flex flex-col  gap-4 items-center justify-end h-[300px] mt-10">
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
          <h1 className="text-3xl text-white font-extrabold drop-shadow-[0_0_15px_rgba(255,255,255,1)]">PRIMARIA</h1>
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
            <div>
              <h1 className="font-bold text-3xl py-2 text-cyan-400">Resumen</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                facere expedita earum quisquam saepe eligendi ullam aliquid,
                obcaecati reiciendis repudiandae totam voluptatem, consectetur
                rem. Fugiat atque quam iste optio enim?
              </p>
            </div>
            <div className="size-full flex flex-col gap-4">
              <div className="border-[1.5px] border-dashed bg-transparent  rounded-xl relative">
                <Image
                  alt=""
                  src="https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Ejemplos/profesora.jpg"
                  width={1000}
                  height={200}
                  className="rounded-3xl w-full h-[500px] object-cover my-3 "
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
                Estudiantes Destacados
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
                    <div className="p-4 bg-yellow-500 rounded-2xl w-[250px] text-white font-bold text-xl flex gap-2 justify-center items-center  ">
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
                    <div className="w-[250px] p-4 bg-yellow-500 rounded-2xl text-white font-bold text-xl flex gap-2 justify-center items-center ">
                      <h1>!Comprar Ahora¡ </h1>
                      <FaCartShopping className="text-2xl" />
                    </div>
                  }
                  Content={<Beneficios />}
                  sizesModal="md"
                />
                {/* <hr className="w-[80%] mx-auto border-white" /> */}
              </div>
              <div className="flex flex-col items-center  w-full">
                <h1 className="font-bold text-white text-3xl">Promociones:</h1>
                <CarruselPromos />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="max-w-[95rem] mx-auto flex flex-col items-center">
        <div className="w-[80%] h-full  mx-auto mt-[2rem] flex  justify-center gap-[2rem] items-start px-10 py-4">
          <div className=" w-fit h-full flex flex-col items-start justify-centr gap-2  rounded-xl ">
            <div>
              <h1 className="text-4xl font-extrabold mb-4">TEMARIO</h1>
              <p className="w-[70%] mb-8 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio debitis voluptas voluptatem praesentium rerum
                doloremque accusamus, dignissimos at doloribus maxime quod
                ducimus maiores dicta iste fuga, amet cupiditate modi nostrum.
              </p>
            </div>
            <div className="size-fit flex flex-col gap-3">
              <div className="flex flex-col  gap-4 rounded-xl">
                <div className="flex items-start gap-2">
                  <FaCheckCircle className="text-xl " />
                  <p className="text-xs w-[70%] ">
                    Lorem ipsum dolor sit amet, consectetur aonem vero nihil
                    voluptate pariatur dolorem enim, est impedit quos sint ipsa
                    nesciunt.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <FaCheckCircle className="text-xl " />
                  <p className="text-xs  w-[70%]">
                    Lorem ipsum dolor sit amet, consectetur aonem vero nihil
                    voluptate pariatur dolorem enim, est impedit quos sint ipsa
                    nesciunt.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <FaCheckCircle className="text-xl " />
                  <p className="text-xs  w-[70%]">
                    Lorem ipsum dolor sit amet, consectetur aonem vero nihil
                    voluptate pariatur dolorem enim, est impedit quos sint ipsa
                    nesciunt.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <FaCheckCircle className="text-xl " />
                  <p className="text-xs  w-[70%]">
                    Lorem ipsum dolor sit amet, consectetur aonem vero nihil
                    voluptate pariatur dolorem enim, est impedit quos sint ipsa
                    nesciunt.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="font-bold text-4xl">OTROS CURSOS</h1>
                <div className="flex gap-4">
                       <div className="size-[110px]  rounded-xl bg-white">
                        </div>  
                       <div className="size-[110px]  rounded-xl bg-white">
                        </div>  
                       <div className="size-[110px]  rounded-xl bg-white">
                        </div>  
                       <div className="size-[110px]  rounded-xl bg-white">
                        </div>  
                </div>
              </div>
            </div>
          </div>
          <div className=" h-fit p-2 border-dashed border-[1.5px]  bg-transparent rounded-xl w-[600px]  ">
            <div className="size-full bg-green-600/30 p-4 rounded-xl flex flex-col items-center gap-4">
              <div>
                <Image
                  alt=""
                  src="https://pub-9d2abfa175714e64aed33b90722a9fd5.r2.dev/Multimedia/Imagen/Ccd/Banners/BannerPrincipal-04.jpg"
                  width={700}
                  height={700}
                  className="rounded-full  size-[250px] p-2 "
                />
              </div>
              <h1>NOMBRE Y APELLIDO</h1>
              <h2 className="mt-4"> PROFESOR</h2>
              <p className="text-center text-xs px-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo delectus quia ad voluptatum voluptates nihil eligendi
                fugiat
              </p>
              <div className="flex justify-between items-center  gap-6">
                <div className="rounded-full p-2 bg-white text-green-600">
                  <FaFacebookF />
                </div>
                <div className="rounded-full p-2 bg-white text-green-600">
                  <FaInstagram />
                </div>
                <div className="rounded-full p-2 bg-white text-green-600">
                  <FaXTwitter />
                </div>
                <div className="rounded-full p-2 bg-white text-green-600">
                  <FaTiktok />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default CursoDetalle;
