"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";

const Tabs = () => {
  // Estado para manejar la pestaña seleccionada
  const [selectedTab, setSelectedTab] = useState<string>("Mensual");

  return (
    <div
      id="promociones"
      className={`h-full ${selectedTab === "Mensual"
        ? "bg-gradient-to-b from-[#03B6FB] via-[#8ABDAE] to-[#F88119] "
        : "bg-[linear-gradient(342.43deg,#F9B233_-4.91%,#167F99_56.07%)]"
        }`}
    >
      <div className="max-w-[100rem] mx-auto flex flex-col justify-center items-center gap-2 py-8">
        <div className="flex items-center gap-4 w-full max-sm:flex-col">
          <div className="flex-1 h-1.5 bg-white max-sm:w-36"></div>
          <h1 className="text-[43px] font-poppins font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,2)]">Membresías</h1>
          <div className="flex-1 h-1.5 bg-white max-sm:w-36"></div>
        </div>

        <div className="text-5xl !text-white flex items-center gap-3 max-lg:flex-col">
          <span className="font-poppins font-normal text-3xl"> Aprovecha el</span><span className="text-5xl font-bold  text-white drop-shadow-[0_0_15px_rgba(255,255,255,1)]">50% </span>{" "}
          <span className="font-poppins font-bold text-3xl  text-white drop-shadow-[0_0_15px_rgba(255,255,255,1)]">Dscto.</span>
          <span className="font-poppins font-normal  text-3xl">por apertura</span>
        </div>

        {/* Botones de las pestañas */}
        <div className="w-[20rem] rounded-2xl flex bg-transparent border-3 mb-7 ">
          <button
            className={`flex-1 py-1 px-6 text-xl font-extrabold text-center   transition-colors duration-200 rounded-xl ${selectedTab === "Mensual" ? "bg-white text-[#05ABDD] " : ""
              }`}
            onClick={() => setSelectedTab("Mensual")}
          >
            Mensual
          </button>
          <button
            className={`flex-1 py-1 px-6 text-center text-xl font-extrabold transition-colors duration-200 rounded-xl ${selectedTab === "Anual" ? "bg-white text-[#05ABDD] " : ""
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
                className="w-[19rem] h-[28rem] max-sm:w-[20rem] rounded-3xl border-dashed border-2 border-white/20 p-2"
                whileHover={{ y: -20, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 150, damping: 12 }}
              >
                <div className=" bg-white/30 rounded-3xl flex items-center  size-full gap-6 text-white border-3 border-white">

                  <div className="w-[80%] h-fit mx-auto flex flex-col justify-center items-center gap-6 p-4">
                    <div className="flex flex-col items-center gap-6">
                    

                      <h1 className="text-xl font-extrabold uppercase text-white relative z-10
                                  after:absolute after:inset-0 after:bg-orange-400 after:opacity-90 after:blur-lg 
                                  after:scale-130 after:-z-10">
                        Plan Aprendiz
                      </h1>
                    </div>
                    <div className="flex items-end">
                      <p className="text-4xl font-extrabold">S/</p>
                      <p className="text-4xl font-extrabold">5</p>
                      <p className="text-xl mb- ml-4">/ mensual</p>
                    </div>


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



                    <motion.button
                      className="w-full p-3 px-6 border-2 text-xl border-white rounded-2xl transition-colors"
                      initial={{ color: "#ffffff" }}
                      whileHover={{ y: -6, scale: 1.05, backgroundColor: "#F0E803", color: "#ffffff" }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    >
                      Adquirir Plan
                    </motion.button>
                  </div>
                </div>
              </motion.div>



              <motion.div
                className="w-[20rem] h-[29rem] max-sm:w-[20rem] rounded-3xl border-dashed border-2 border-white/20 p-2"
                whileHover={{ y: -25, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 150, damping: 12 }}
              >
                <div className="bg-[linear-gradient(342.43deg,#F9B233_-4.91%,#63DEFd_56%)] rounded-[40px] flex items-center border-3 border-white text-white size-full">
                  <div className="w-[80%] mx-auto flex flex-col justify-center items-center gap-6 p-4">
                    <h1 className="text-xl font-extrabold uppercase text-white relative z-10
                    after:absolute after:inset-0 after:bg-[#63defd] after:opacity-90 after:blur-lg 
                    after:scale-130 after:-z-10">Plan Avanzado</h1>
                    <div className="flex items-end">
                      <div className="text-4xl font-extrabold items-end flex gap-2">
                        <p className="text-4xl">S/</p>
                        <p>59.99</p>
                      </div>
                      <p className="text-xl">/Mensual</p>
                    </div>

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

                    <motion.button
                      className="w-full p-3 px-6 border-2 text-2xl border-white rounded-2xl transition-colors "
                      initial={{ color: "#ffffff" }}
                      whileHover={{ y: -6, scale: 1.05, backgroundColor: "#F0E803", color: "#ffffff" }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    >
                      Adquirir Plan
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="w-[19rem] h-[28rem] max-sm:w-[20rem] rounded-3xl border-dashed border-2 border-white/20 p-2"
                whileHover={{ y: -25, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 150, damping: 12 }}
              >
                <div className="bg-white/30 rounded-[40px]  size-full flex items-center border-3 border-white text-white">
                  <div className="w-[80%] h-ffit mx-auto flex flex-col justify-center items-center gap-6 p-4">
                    <h1 className="text-xl font-extrabold uppercase text-white relative z-10
                    after:absolute after:inset-0 after:bg-orange-400 after:opacity-90 after:blur-lg 
                    after:scale-130 after:-z-10">Plan Avanzado</h1>
                    <div className="flex items-end">
                      <div className="w-full text-4xl  items-end font-extrabold flex gap-2">
                        <p className="text-4xl">S/</p>
                        <p>19.99</p>
                      </div>
                      <p className="text-xl">/Mensual</p>
                    </div>

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

                    <motion.button
                      className="w-full p-3 px-6 border-2 text-xl border-white rounded-2xl transition-colors "
                      initial={{ color: "#ffffff" }}
                      whileHover={{ y: -6, scale: 1.05, backgroundColor: "#F0E803", color: "#ffffff" }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
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
                className="w-[22rem] h-[30rem] max-sm:w-[20rem] rounded-3xl border-dashed border-2 border-white/20 p-2"
                whileHover={{ y: -20, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 150, damping: 12 }}
              >

                <div className=" bg-white/30 rounded-[40px] flex items-center  size-full gap-6 border-3 border-white text-white">
                  <div className="w-[80%] h-fit mx-auto flex flex-col justify-center items-center gap-6 p-4">

                    <h1 className="text-2xl font-extrabold uppercase text-white relative z-10
                    after:absolute after:inset-0 after:bg-orange-400 after:opacity-90 after:blur-lg 
                    after:scale-130 after:-z-10">Plan Avanzado</h1>

                    <div className="flex items-end">
                      <div className="w-full text-4xl  items-end font-extrabold flex gap-2">
                        <p className="text-5xl">S/</p>
                        <p>39.90</p>
                      </div>
                      <p className="text-2xl">/Mensual</p>
                    </div>

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

                    <motion.button
                      className="w-full p-3 px-6 border-2 text-2xl border-white rounded-2xl transition-colors"
                      initial={{ color: "#ffffff" }}
                      whileHover={{ y: -6, scale: 1.05, backgroundColor: "#F0E803", color: "#ffffff" }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    >
                      Adquirir Plan
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="w-[22rem] h-[30rem] max-sm:w-[20rem] rounded-3xl border-dashed border-2 border-white/20 p-2"
                whileHover={{ y: -25, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 150, damping: 12 }}
              >

                <div className="bg-[linear-gradient(342.43deg,#F9B233_-4.91%,#63DEFD_56.07%)] rounded-[40px] flex items-center 
                  border-3 border-white text-white size-full">
                  <div className="w-[80%] mx-auto flex flex-col justify-center items-center gap-6 p-4">
                    <h1 className="text-3xl font-extrabold uppercase">Plan Ingenia</h1>
                    <div className="flex items-end">
                      <div className="text-4xl font-extrabold items-end flex gap-2">
                        <p className="text-5xl">S/</p>
                        <p>199.99</p>
                      </div>
                      <p className="text-2xl">/Mensual</p>
                    </div>

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

                    <motion.button
                      className="w-full p-3 px-6 border-2 text-2xl border-white rounded-2xl transition-colors"
                      initial={{ color: "#ffffff" }}
                      whileHover={{ y: -6, scale: 1.05, backgroundColor: "#F0E803", color: "#ffffff" }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    >
                      Adquirir Plan
                    </motion.button>
                  </div>
                </div>
              </motion.div>






              <motion.div
                className="w-[22rem] h-[30rem] max-sm:w-[20rem] rounded-3xl border-dashed border-2 border-white/20 p-2"
                whileHover={{ y: -20, scale: 1.02 }} // Elevación y agrandamiento leve
                transition={{ type: "spring", stiffness: 150, damping: 12 }} // Transición suave
              >
                <div className="bg-white/30 rounded-[40px] size-full flex items-center border-3 border-white text-white">
                  <div className="w-[80%] h-fit mx-auto flex flex-col justify-center items-center gap-6 p-4">

                    <h1 className="text-2xl font-extrabold uppercase text-white relative z-10
        after:absolute after:inset-0 after:bg-orange-400 after:opacity-90 after:blur-lg 
        after:scale-130 after:-z-10">Plan Avanzado</h1>

                    <div className="flex items-end">
                      <div className="w-full text-4xl items-end font-extrabold flex gap-2">
                        <p className="text-5xl">S/</p>
                        <p>599.99</p>
                      </div>
                      <p className="text-2xl">/Mensual</p>
                    </div>

                    <div className="flex items-start gap-1 ">
                      <FaCheck className="text-2xl w-[10%]" />
                      <h1 className="text-base w-[90%]">
                        Acceso a todos los libros virtual y clases en vivo por 12 meses
                      </h1>
                    </div>
                    <div className="flex items-start gap-1 ">
                      <FaCheck className="text-2xl w-[10%]" />
                      <h1 className="text-base w-[90%]">
                        Acceso a más de 6000 ejercicios y 6000 videos explicativos
                      </h1>
                    </div>

                    <motion.button
                      className="w-full p-3 px-6 border-2 text-2xl border-white rounded-2xl transition-colors"
                      initial={{ color: "#ffffff" }}
                      whileHover={{ y: -6, scale: 1.05, backgroundColor: "#F0E803", color: "#ffffff" }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    >
                      Adquirir Plan
                    </motion.button>
                  </div>
                </div>
              </motion.div>






            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
