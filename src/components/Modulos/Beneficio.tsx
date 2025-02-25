"use client";

import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";

const Tabs = () => {
  // Estado para manejar la pestaña seleccionada
  const [selectedTab, setSelectedTab] = useState<string>("Mensual");

  return (
    <div
      className={`${
        selectedTab === "Mensual"
          ? "bg-gradient-to-t from-amber-300 to-violet-900"
          : "bg-gradient-to-t from-amber-300 to-blue-600"
      }`}
    >
      <div className="max-w-[100rem] mx-auto flex flex-col justify-center items-center gap-6 py-24">
        <div className="flex items-center gap-2">
          <div className="w-36 h-1.5 bg-white"></div>
          <h1 className="text-[53px] font-bold text-white">Membresías</h1>
          <div className="w-36 h-1.5 bg-white"></div>
        </div>
        <div className="text-5xl !text-white flex items-center gap-3">
          Aprovecha el <span className="text-7xl font-extrabold">50% </span>{" "}
          <span className="font-bold text-5xl">Dscto.</span> por apertura
        </div>

        {/* Botones de las pestañas */}
        <div className="w-[20rem] rounded-full flex bg-transparent border-3">
          <button
            className={`flex-1 py-3 px-6 text-3xl font-extrabold text-center text-white transition-colors duration-200 rounded-full ${
              selectedTab === "Mensual" ? "bg-white text-violet-600" : ""
            }`}
            onClick={() => setSelectedTab("Mensual")}
          >
            Mensual
          </button>
          <button
            className={`flex-1 py-3 px-6 text-center text-3xl font-extrabold text-white transition-colors duration-200 rounded-full ${
              selectedTab === "Anual" ? "bg-white text-yellow-600" : ""
            }`}
            onClick={() => setSelectedTab("Anual")}
          >
            Anual
          </button>
        </div>

        {/* Contenido de las pestañas */}
        <div className=" ">
          {selectedTab === "Mensual" && (
            <div className="w-full flex justify-center items-center gap-8">
              <div className="w-[22rem] h-[30rem] rounded-3xl border-dashed border-2 border-white/20 p-2 ">
                <div className=" bg-white/30 rounded-3xl flex items-center  size-full gap-6 text-white">
                  <div className="w-[80%] h-fit mx-auto flex flex-col justify-center items-center gap-6 p-4">
                    <h1 className="text-3xl font-extrabold">Plan Aprendiz</h1>
                    <div className="flex items-end">
                      <div className="w-full text-4xl  items-end font-extrabold flex gap-2">
                        <p className="text-5xl">S/</p>
                        <p>5</p>
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
                <div className="bg-gradient-to-t from-amber-500 to-violet-900 rounded-3xl flex items-center  text-white size-full">
                  <div className="w-[80%] mx-auto flex flex-col justify-center items-center gap-6 p-4">
                    <h1 className="text-3xl font-extrabold">Plan Ingenia</h1>
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
                        Acceso a todos los libros virtuales <br />y Clases en
                        vivo de todos los cursos por 30 dias
                      </h1>
                    </div>
                    <div className="flex items-start gap-1 ">
                      <FaCheck className="text-2xl" />
                      <h1 className="text-base">
                        Acceso más de 4000 ejercicios y 4000 videos explicativos
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
                    <h1 className="text-3xl font-extrabold">Plan Avanzado</h1>
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
                        Acceso a mas de 400 ejercicios y 4000 videos
                        explicativos
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
          )}
          {selectedTab === "Anual" && (
            <div className="w-full flex justify-center items-center gap-8">
              <div className="w-[22rem] h-[30rem] rounded-3xl border-dashed border-2 border-white/20 p-2 ">
                <div className=" bg-white/30 rounded-3xl flex items-center  size-full gap-6 text-white">
                  <div className="w-[80%] h-fit mx-auto flex flex-col justify-center items-center gap-6 p-4">
                    <h1 className="text-3xl font-extrabold">Plan Aprendiz</h1>
                    <div className="flex items-end">
                      <div className="w-full text-4xl  items-end font-extrabold flex gap-2">
                        <p className="text-5xl">S/</p>
                        <p>39.90</p>
                      </div>
                      <p className="text-2xl">/Mensual</p>
                    </div>
                    <hr className="border-2 w-full " />
                    <div className="flex items-start gap-1 ">
                      <FaCheck className="text-2xl" />
                      <h1 className="text-base">
                        Acceso a un libro virtual de un curso por 12 meses
                      </h1>
                    </div>
                    <div className="flex items-start gap-1 ">
                      <FaCheck className="text-2xl" />
                      <h1 className="text-base">
                        Acceso a mas de 800 ejercicios y 850 ejercicios y 850 videos explicativos
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
                <div className="bg-gradient-to-t from-amber-500 to-blue-600 rounded-3xl flex items-center  text-white size-full">
                  <div className="w-[80%] mx-auto flex flex-col justify-center items-center gap-6 p-4">
                    <h1 className="text-3xl font-extrabold">Plan Ingenia</h1>
                    <div className="flex items-end">
                      <div className="text-4xl font-extrabold items-end flex gap-2">
                        <p className="text-5xl">S/</p>
                        <p>199.99</p>
                      </div>
                      <p className="text-2xl">/Mensual</p>
                    </div>
                    <hr className="border-2 w-full " />
                    <div className="flex items-start gap-1 ">
                      <FaCheck className="text-2xl" />
                      <h1 className="text-base">
                        Acceso a 5 libros virtuales por 12 meses 
                      </h1>
                    </div>
                    <div className="flex items-start gap-1 ">
                      <FaCheck className="text-2xl" />
                      <h1 className="text-base">
                        Acceso más de 4000 ejercicios y 4000 videos explicativos
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
                    <h1 className="text-3xl font-extrabold">Plan Avanzado</h1>
                    <div className="flex items-end">
                      <div className="w-full text-4xl  items-end font-extrabold flex gap-2">
                        <p className="text-5xl">S/</p>
                        <p>599.99</p>
                      </div>
                      <p className="text-2xl">/Mensual</p>
                    </div>
                    <hr className="border-2 w-full " />
                    <div className="flex items-start gap-1 ">
                      <FaCheck className="text-2xl w-[10%]  " />
                      <h1 className="text-base w-[90%] ">
                        Acceso a todos los libros virtual y clases en vivo por 12 meses
                      </h1>
                    </div>
                    <div className="flex items-start gap-1 ">
                    <FaCheck className="text-2xl w-[10%]  " />
                    <h1 className="text-base w-[90%] ">
                        Acceso a mas de 6000 ejercicios y 6000 videos
                        explicativos
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
