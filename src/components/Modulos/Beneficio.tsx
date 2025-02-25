"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Tabs, Tab, Card, CardBody } from "@heroui/react";
import { FaCheck } from "react-icons/fa6";

export default function Beneficio() {
  // const cursos = [
  //   {
  //     name: "Aritmética",
  //     icon: "https://pub-9d2abfa175714e64aed33b90722a9fd5.r2.dev/Multimedia/Iconos/landing/icono-matematicas.svg",
  //     bgIcon: "bg-blue-500",
  //     bg: "bg-blue-800/30",
  //   },
  //   {
  //     name: "Trigometria",
  //     icon: "https://pub-9d2abfa175714e64aed33b90722a9fd5.r2.dev/Multimedia/Iconos/landing/icono-matematicas.svg",
  //     bgIcon: "bg-blue-500",
  //     bg: "bg-blue-800/30",
  //   },
  //   {
  //     name: "Geometria",
  //     icon: "https://pub-9d2abfa175714e64aed33b90722a9fd5.r2.dev/Multimedia/Iconos/landing/icono-matematicas.svg",
  //     bgIcon: "bg-blue-500",
  //     bg: "bg-blue-800/30",
  //   },
  //   {
  //     name: "Algebra",
  //     icon: "https://pub-9d2abfa175714e64aed33b90722a9fd5.r2.dev/Multimedia/Iconos/landing/icono-matematicas.svg",
  //     bgIcon: "bg-blue-500",
  //     bg: "bg-blue-800/30",
  //   },
  //   {
  //     name: "Razonamiento M.",
  //     icon: "https://pub-9d2abfa175714e64aed33b90722a9fd5.r2.dev/Multimedia/Iconos/landing/icono-matematicas.svg",
  //     bgIcon: "bg-blue-500",
  //     bg: "bg-blue-800/30",
  //   },
  //   {
  //     name: "Fisica",
  //     icon: "https://pub-9d2abfa175714e64aed33b90722a9fd5.r2.dev/Multimedia/Iconos/landing/icono-matematicas.svg",
  //     bgIcon: "bg-blue-500",
  //     bg: "bg-blue-800/30",
  //   },
  //   {
  //     name: "Quimica",
  //     icon: "https://pub-9d2abfa175714e64aed33b90722a9fd5.r2.dev/Multimedia/Iconos/landing/icono-matematicas.svg",
  //     bgIcon: "bg-blue-500",
  //     bg: "bg-blue-800/30",
  //   },
  // ];
  const [selected, setSelected] = React.useState("Mensual");

  const getBackgroundColor = () => {
    switch (selected) {
      case "Mensual":
        return "#ffcccc"; // Fondo rojo claro
      case "Anual":
        return "#ccffcc"; // Fondo verde claro
      default:
        return "#ffffff"; // Fondo blanco por defecto
    }
  };
  return (
    <div className={`${getBackgroundColor}`}>
      <div className="max-w-[100rem] mx-auto flex flex-col justify-center items-center gap-10 py-24">
        <div className="flex items-center gap-2">
          <div className="w-36 h-1.5 bg-white"></div>
          <h1 className="text-[53px] font-bold text-white">Membresías</h1>
          <div className="w-36 h-1.5 bg-white"></div>
        </div>
        <div className="text-5xl !text-white flex items-center gap-3">
          Aprovecha el <span className="text-7xl font-extrabold">50% </span>{" "}
          <span className="font-bold text-5xl">Dscto.</span> por apertura
        </div>
        <Tabs aria-label="Options"
        variant="light"
        selectedKey={selected} onSelectionChange={(key) => setSelected(key.toString())}
        classNames={{
           tab: "  !px-6 !py-5 text-2xl font-bold  !bg-transparent  ",
           tabContent:"! !text-violet-600   ",
           base: "   ",
           tabList: "!bg-transparent border-white border-2 !p-0  rounded-full  ",
           
        }}
        >
          <Tab key="Mensual" title="Mensual" >
            <Card className=" !border-none !shadow-none !bg-transparent     ">
              <CardBody>
                <div className="flex justify-center items-center gap-8">
                  <div className="w-[22rem] h-[30rem] rounded-3xl border-dashed border-2 border-white/20 p-2 ">
                    <div className=" bg-white/30 rounded-3xl flex items-center  size-full gap-6 text-white">
                      <div className="w-[80%] h-fit mx-auto flex flex-col justify-center items-center gap-6 p-4">
                        <h1 className="text-3xl font-extrabold">
                          Plan Aprendiz
                        </h1>
                        <div className="flex items-end">
                          <div className="w-full text-4xl  items-end font-extrabold flex gap-2">
                            <p className="text-5xl">S/</p>
                            <p >5</p>
                          </div>
                          <p className="text-2xl">/Mensual</p>
                        </div>
                        <hr className="border-2 w-full " />
                        <div className="flex items-start gap-1 ">
                          <FaCheck className="text-2xl" />
                          <h1 className="text-base">
                            Acceso a un libro virtual de un curso por 30 dias
                          </h1>
                        </div>
                        <div className="flex items-start gap-1 ">
                          <FaCheck className="text-2xl" />
                          <h1 className="text-base">
                            Acceso a un libro virtual de un curso por 30 dias
                          </h1>
                        </div>

                        <button className="w-full p-3 px-6 border-2 text-2xl border-white rounded-2xl">
                          {" "}
                          Adquirir Plan
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="w-[27rem] h-[35rem] rounded-3xl border-dashed border-2 border-white/20 p-2 ">
                    <div className="bg-gradient-to-t from-transparent to-violet-900 rounded-3xl flex items-center  text-white size-full">
                      <div className="w-[80%] mx-auto flex flex-col justify-center items-center gap-6 p-4">
                        <h1 className="text-3xl font-extrabold">
                          Plan Ingenia
                        </h1>
                        <div className="flex items-end">
                          <div className="text-4xl font-extrabold items-end flex gap-2">
                          <p className="text-5xl">S/</p>
                            <p>59.99</p>
                          </div>
                          <p className="text-2xl">/Mensual</p>
                        </div>
                        <hr className="border-2 w-full " />
                        <div className="flex items-start gap-1 ">
                          <FaCheck className="text-2xl" />
                          <h1 className="text-base">
                            Acceso a todos los libros virtuales  <br />y Clases en vivo
                            de todos los cursos por 30 dias 
                          </h1>
                        </div>
                        <div className="flex items-start gap-1 ">
                          <FaCheck className="text-2xl" />
                          <h1 className="text-base">
                            Acceso más de 4000 ejercicios
                            y 4000 videos explicativos
                          </h1>
                        </div>

                        <button className="w-full p-3 px-6 border-2 text-2xl mt-10 border-white rounded-2xl">
                          {" "}
                          Adquirir Plan
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-[22rem] h-[30rem] rounded-3xl border-dashed border-2 border-white/20 p-2 ">
                    <div className="bg-white/30 rounded-3xl  size-full flex items-center text-white">
                      <div className="w-[80%] h-ffit mx-auto flex flex-col justify-center items-center gap-6 p-4">
                        <h1 className="text-3xl font-extrabold">
                          Plan Avanzado
                        </h1>
                        <div className="flex items-end">
                        <div className="w-full text-4xl  items-end font-extrabold flex gap-2">
                          <p className="text-5xl">S/</p>
                            <p>19.99</p>
                          </div>
                          <p className="text-2xl">/Mensual</p>
                        </div>
                        <hr className="border-2 w-full " />
                        <div className="flex items-start gap-1 ">
                          <FaCheck className="text-2xl" />
                          <h1 className="text-base">
                            Acceso a 5 libros virtuales por 30 dias
                          </h1>
                        </div>
                        <div className="flex items-start gap-1 ">
                          <FaCheck className="text-3xl" />
                          <h1 className="text-base">
                            Acceso a mas de 400 ejercicios y 4000 videos explicativos
                          </h1>
                        </div>

                        <button className="w-full p-3 px-6 border-2 text-2xl border-white rounded-2xl">
                          {" "}
                          Adquirir Plan
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="Anual" title="Anual">
            <Card className=" !border-none !shadow-none !bg-transparent">
              <CardBody>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
