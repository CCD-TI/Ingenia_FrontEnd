"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Conta from "@/components/Contador";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const Tabs = () => {
  // Estado para manejar la pestaña seleccionada
  const [selectedTab, setSelectedTab] = useState<string>("Mensual");

  return (
    <div
      id="promociones"
      className={`${
        selectedTab === "Mensual"
          ? "bg-[url('/img/vision.png')] bg-center bg-cover"
          : "bg-[url('/img/mision.png')] bg-center bg-cover"
      }`}
    >
      <div className="max-w-[100rem] h-full mx-auto flex flex-col justify-center items-center gap-6">
        

        <div className="text-5xl !text-white flex items-center gap-3 max-lg:flex-col mt-10">
          <span className="font-poppins font-normal "> Ofertas con un</span>
          <span className="text-7xl font-bold  text-white drop-shadow-[0_0_15px_rgba(255,255,255,1)]">
            50%
          </span>
          <span className="font-poppins font-bold text-5xl  text-white drop-shadow-[0_0_15px_rgba(255,255,255,1)]">
            Dscto.
          </span>
         
        </div>
          <div className="relative flex items-center justify-center w-full max-w-[90rem] px-4 mx-auto mt-5">
                  {/* Línea */}
                  <div className="w-full h-[3px] bg-white drop-shadow-[0_0_10px_rgba(255,255,255,2)] "></div>
        
                  {/* Círculos en los extremos */}
                  <div className="absolute left-1 w-3 h-3 bg-white rounded-full drop-shadow-[0_0_10px_rgba(255,255,255,2)] "></div>
                  <div className="absolute right-1 w-3 h-3 bg-white rounded-full drop-shadow-[0_0_10px_rgba(255,255,255,2)]"></div>
                </div>

        {/* Botones de las pestañas */}
        <div className="w-[20rem] rounded-2xl flex bg-transparent border-3 mb-7 ">
          <button
            className={`flex-1 py-4 px-6 text-3xl font-extrabold text-center   transition-colors duration-200 rounded-xl ${
              selectedTab === "Mensual" ? "bg-white text-[#05ABDD] " : ""
            }`}
            onClick={() => setSelectedTab("Mensual")}
          >
            Mensual
          </button>
          <button
            className={`flex-1 py-3 px-6 text-center text-3xl font-extrabold transition-colors duration-200 rounded-xl ${
              selectedTab === "Anual" ? "bg-white text-[#05ABDD] " : ""
            }`}
            onClick={() => setSelectedTab("Anual")}
          >
            Anual
          </button>
        </div>

        {/* Contenido de las pestañas */}
        <div className="">
          {selectedTab === "Mensual" && (
            <div className="w-full flex flex-wrap justify-center items-center gap-10">
              
              <motion.div
                className="w-[22rem] h-[20rem] max-sm:w-[20rem] rounded-3xl bg-gradient-to-b from-amber-400 via-amber-500 to-amber-700 p-2 
                border-3 border-white "
                whileHover={{ y: -20, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 150, damping: 12 }}
              >
                <div className="  rounded-3xl flex items-center  size-full gap-6 text-white border-3 border-white">
                  <div className="w-[80%] h-fit mx-auto flex flex-col justify-center items-center gap-6 ">
                    <div className="flex flex-col items-center gap-6">
                      <h1 className="text-xl font-extrabold uppercase text-amber-500 relative rounded-full  bg-white py-2 px-4">
                        Plan Aprendiz
                      </h1>
                    </div>
                    <div className="flex items-end">
                      <div className="text-4xl font-extrabold items-end flex gap-2">
                        <p className="text-5xl max-sm:text-3xl drop-shadow-[0_0_10px_rgba(255,255,255,2)]">
                          S/
                        </p>
                        <p className="max-sm:text-3xl drop-shadow-[0_0_10px_rgba(255,255,255,2)]">
                          5.00
                        </p>
                      </div>
                      <p className="text-2xl max-sm:text-3xl drop-shadow-[0_0_10px_rgba(255,255,255,2)]">
                        /Mensual
                      </p>
                    </div>

                    
                

                    <motion.button
                      className="w-full p-3 px-6 border-2 text-2xl border-white rounded-2xl transition-colors"
                      initial={{ color: "#ffffff" }}
                      whileHover={{
                        y: -6,
                        scale: 1.05,
                        backgroundColor: "#F0E803",
                        color: "#ffffff",
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                      }}
                    >
                      Adquirir Plan
                    </motion.button>
                  </div>
                </div>
              </motion.div>




              <motion.div
                className="w-[22rem] h-[20rem] max-sm:w-[20rem] bg-gradient-to-t from-cyan-900 via-cyan-600 to-cyan-400 rounded-3xl  border-3 border-white p-2"
                whileHover={{ y: -25, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 150, damping: 12 }}
              >
                <div className="bg-gradient-to-t from-cyan-900 via-cyan-600 to-cyan-400  flex items-center border-3 border-white text-white size-full rounded-3xl">
                  <div className="w-[80%] mx-auto flex flex-col justify-center items-center gap-6 pt-6">
                    <h1
                      className="text-2xl font-extrabold uppercase text-white relative z-10
                    after:absolute after:inset-0 after:bg-[#63defd] after:opacity-90 after:blur-lg 
                    after:scale-130 after:-z-10"
                    >
                      Plan Avanzado
                    </h1>
                    <div className="flex items-end">
                      <div className="text-4xl font-extrabold items-end flex gap-2">
                        <p className="text-5xl max-sm:text-3xl">S/</p>
                        <p className="max-sm:text-3xl">59.99</p>
                      </div>
                      <p className="text-2xl max-sm:text-3xl">/Mensual</p>
                    </div>

                    <motion.button
                      className="w-full p-3 px-6 border-2 text-2xl border-white rounded-2xl transition-colors "
                      initial={{ color: "#ffffff" }}
                      whileHover={{
                        y: -6,
                        scale: 1.05,
                        backgroundColor: "#F0E803",
                        color: "#ffffff",
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                      }}
                    >
                      Adquirir Plan
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="w-[22rem] h-[20rem] max-sm:w-[20rem] rounded-3xl  border-2 bg-gradient-to-t from-orange-800 via-orange-600 to-orange-400 border-white p-2"
                whileHover={{ y: -25, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 150, damping: 12 }}
              >
                <div className="bg-gradient-to-t from-orange-800 via-orange-600 to-orange-400 rounded-3xl size-full flex items-center border-3 border-white text-white">
                  <div className="w-[80%] h-ffit mx-auto flex flex-col justify-center items-center gap-6 pt-6">
                    <h1 className="text-xl font-extrabold uppercase text-orange-600 rounded-full  bg-white py-2 px-4">
                      Plan Avanzado
                    </h1>
                    <div className="flex items-end">
                      <div className="w-full text-4xl  items-end font-extrabold flex gap-2">
                        <p className="text-5xl max-sm:text-3xl drop-shadow-[0_0_10px_rgba(255,255,255,2)]">
                          S/
                        </p>
                        <p className="max-sm:text-3xl drop-shadow-[0_0_10px_rgba(255,255,255,2)]">
                          19.99
                        </p>
                      </div>
                      <p className="text-2xl max-sm:text-3xl drop-shadow-[0_0_10px_rgba(255,255,255,2)] ">
                        /Mensual
                      </p>
                    </div>

                    <motion.button
                      className="w-full p-3 px-6 border-2 text-2xl border-white rounded-2xl transition-colors "
                      initial={{ color: "#ffffff" }}
                      whileHover={{
                        y: -6,
                        scale: 1.05,
                        backgroundColor: "#F0E803",
                        color: "#ffffff",
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                      }}
                    >
                      Adquirir Plan
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
          {selectedTab === "Anual" && (
            <div className="w-full flex flex-wrap justify-center items-center gap-8">
              <motion.div
                className="w-[22rem] h-[20rem] max-sm:w-[20rem] rounded-3xl bg-gradient-to-b from-amber-400 via-amber-500 to-amber-700  border-2 border-white p-2"
                whileHover={{ y: -20, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 150, damping: 12 }}
              >
                <div className=" bg-gradient-to-b from-amber-400 via-amber-500 to-amber-700 rounded-3xl flex items-center  size-full gap-6 border-3 border-white text-white">
                  <div className="w-[80%] h-fit mx-auto flex flex-col justify-center items-center gap-6 pt-6  ">
                    <h1 className="text-xl font-extrabold uppercase text-amber-700 relative rounded-full  bg-white py-2 px-4">
                      Plan Avanzado
                    </h1>

                    <div className="flex items-end">
                      <div className="w-full text-4xl  items-end font-extrabold flex gap-2">
                        <p className="text-5xl max-sm:text-3xl drop-shadow-[0_0_10px_rgba(255,255,255,2)]">
                          S/
                        </p>
                        <p className="max-sm:text-3xl drop-shadow-[0_0_10px_rgba(255,255,255,2)]">
                          39.90
                        </p>
                      </div>
                      <p className="text-2xl drop-shadow-[0_0_10px_rgba(255,255,255,2)]">
                        /Mensual
                      </p>
                    </div>

                    <motion.button
                      className="w-full p-3 px-6 border-2 text-2xl border-white rounded-2xl transition-colors"
                      initial={{ color: "#ffffff" }}
                      whileHover={{
                        y: -6,
                        scale: 1.05,
                        backgroundColor: "#F0E803",
                        color: "#ffffff",
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                      }}
                    >
                      Adquirir Plan
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="w-[22rem] h-[20rem] max-sm:w-[20rem] rounded-3xl bg-gradient-to-t from-cyan-900 via-cyan-600 to-cyan-400 border-2 border-white p-2"
                whileHover={{ y: -25, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 150, damping: 12 }}
              >
                <div
                  className="bg-gradient-to-t from-cyan-900 via-cyan-600 to-cyan-400 rounded-3xl flex items-center 
                  border-3 border-white text-white size-full"
                >
                  <div className="w-[80%] mx-auto flex flex-col justify-center items-center gap-6 pt-6 rounded-3xl">
                    <h1 className="text-xl font-black font-poppins uppercase bg-white py-2 px-4 text-cyan-600 rounded-full mr-20">
                      Plan Ingenia
                    </h1>
                    <div className="flex items-end">
                      <div className="text-4xl font-extrabold items-end flex gap-2">
                        <p className="text-5xl max-sm:text-3xl drop-shadow-[0_0_10px_rgba(255,255,255,2)]">
                          S/
                        </p>
                        <p className="max-sm:text-3xl drop-shadow-[0_0_10px_rgba(255,255,255,2)]">
                          199.99
                        </p>
                      </div>
                      <p className="text-2xl max-sm:text-3xl drop-shadow-[0_0_10px_rgba(255,255,255,2)]">
                        /Mensual
                      </p>
                    </div>

                    <motion.button
                      className="w-full p-3 px-6 border-2 text-2xl border-white rounded-2xl transition-colors"
                      initial={{ color: "#ffffff" }}
                      whileHover={{
                        y: -6,
                        scale: 1.05,
                        backgroundColor: "#F0E803",
                        color: "#ffffff",
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                      }}
                    >
                      Adquirir Plan
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="w-[22rem] h-[20rem] max-sm:w-[20rem] rounded-3xl bg-gradient-to-t from-orange-800 via-orange-600 to-orange-400 border-2 border-white p-2"
                whileHover={{ y: -20, scale: 1.02 }} // Elevación y agrandamiento leve
                transition={{ type: "spring", stiffness: 150, damping: 12 }} // Transición suave
              >
                <div className="bg-gradient-to-t from-orange-800 via-orange-600 to-orange-400 rounded-3xl size-full flex items-center border-3 border-white text-white">
                  <div className="w-[80%] h-fit mx-auto flex flex-col justify-center items-center gap-6 pt-6 rounded-3xl">
                    <h1 className="text-xl font-extrabold uppercase text-orange-600 rounded-full  bg-white py-2 px-4">
                      Plan Avanzado
                    </h1>

                    <div className="flex items-end">
                      <div className="w-full text-4xl items-end font-extrabold flex gap-2">
                        <p className="text-5xl max-sm:text-3xl drop-shadow-[0_0_10px_rgba(255,255,255,2)]">
                          S/
                        </p>
                        <p className="max-sm:text-3xl drop-shadow-[0_0_10px_rgba(255,255,255,2)]">
                          599.99
                        </p>
                      </div>
                      <p className="text-2xl max-sm:text-2xl drop-shadow-[0_0_10px_rgba(255,255,255,2)]">
                        /Mensual
                      </p>
                    </div>

                    <motion.button
                      className="w-full  p-3 border-2 text-2xl border-white rounded-2xl transition-colors"
                      initial={{ color: "#ffffff" }}
                      whileHover={{
                        y: -6,
                        scale: 1.05,
                        backgroundColor: "#F0E803",
                        color: "#ffffff",
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                      }}
                    >
                      Adquirir Plan
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mt-5 md:mt-7 px-4">
          {/* Grupo flechas + texto - siempre en línea desde 500px */}
          <div className="flex items-center gap-3 md:gap-4">
            <MdKeyboardDoubleArrowRight className="text-white text-5xl md:text-6xl drop-shadow-[0_0_25px_#ffffff] md:drop-shadow-[0_0_40px_#ffffff] brightness-200 hover:scale-110 transition-transform duration-300 min-w-[36px]" />

            <h1 className="text-white max-sm:text-sm font-poppins font-semibold text-3xl md:text-4xl drop-shadow-[0_0_25px_#ffffff] md:drop-shadow-[0_0_40px_#ffffff] brightness-200 hover:scale-110 transition-transform duration-300 whitespace-nowrap">
              ¡Aprovecha Ahora!
            </h1>
          </div>

          {/* Contador - se mueve abajo en <768px */}
          <div className="border-2 border-white rounded-2xl w-fit p-2 md:p-3 px-4 md:px-5 drop-shadow-[0_0_25px_#ffffff] md:drop-shadow-[0_0_40px_#ffffff] brightness-200 hover:scale-110 transition-transform duration-300 mt-3 md:mt-0">
            <Conta targetDate="06/30/2025 23:59:59" />
          </div>
          <MdKeyboardDoubleArrowLeft className="text-white text-5xl md:text-6xl drop-shadow-[0_0_25px_#ffffff] md:drop-shadow-[0_0_40px_#ffffff] brightness-200 hover:scale-110 transition-transform duration-300 min-w-[36px]" />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
