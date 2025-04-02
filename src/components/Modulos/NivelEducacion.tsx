"use client";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import { motion } from "framer-motion";


const NivelesEducacion: React.FC = () => {
  return (
    <div id="niveles" className="w-full flex  justify-center items-center pb-7 bg-black">
      <div className="max-w-[100rem] w-[90%] mx-auto flex flex-col justify-center  m-6 ">
        <div className="w-fit mx-auto flex flex-col justify-center items-center gap-10 ">
        <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-semibold mb-3 xs:mb-4 sm:mb-6 md:mb-8 w-full text-center uppercase text-white px-2 xs:px-4">
  <span className="block xs:inline">Niveles de Educación</span>
  <span className="text-yellowIngenia drop-shadow-[0_0_8px_rgba(249,178,51,0.8)] xs:drop-shadow-[0_0_10px_rgba(249,178,51,1)]">
    en Ingenia
    <span className="block xs:inline sm:block md:inline"> College</span>
  </span>
</h2>
          <div className="flex flex-wrap justify-center gap-14">

            <motion.div className="bg-gradient-to-t from-[#05ABDD]/30 to-[#035D78]/30 drop-shadow-[0_0_20px_rgba(2,132,199,1)] p-8 rounded-[50px] group"
              whileHover={{ y: -40, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 150, damping: 12 }}>
              <div className="relative h-[40rem] w-[22rem]  rounded-[30px] flex justify-center  overflow-hidden border-4 border-sky-600 drop-shadow-[0_0_20px_rgba(2,132,199,1)] group-hover:brightness-[0.15] group-hover:contrast-5 transition duration-300">
                <Image
                  alt="crown"
                  src="/img/niño1.png"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover "
                />
                <div className="absolute  text-white text-xl font-bold text-center   ">
                  <p className="mt-[450px] w-full   text-5xl font-poppins font-black text-white uppercase">
                    INICIAL  <br />
                  </p>
                  <p className="text-white mt-2  font-poppins font-medium uppercase">
                    Conoce aqui los años
                  </p>
                  <p className="text-white text-md px-6 py-2 font-poppins font-medium bg-transparent border-2 rounded-full mt-3
   border-white text-center">
  Haz click aquí
</p>
                </div>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-sky-600 text-white px-12 py-4 text-2xl rounded-lg font-bold transition-all duration-300 
                transform hover:scale-105 hover:shadow-lg active:scale-95 hover:bg-sky-700">
                  Matemática
                </button>
                <button className="bg-sky-600 text-white px-12 py-4 text-2xl rounded-lg font-bold  transition-all duration-300 
                transform hover:scale-105 hover:shadow-lg active:scale-95 hover:bg-sky-700">
                  Comunicación 
                </button>
                <button className="bg-sky-600 text-white px-12 py-4 text-2xl rounded-lg font-bold transition-all duration-300 
                transform hover:scale-105 hover:shadow-lg active:scale-95 hover:bg-sky-700">
                  Historia
                </button>

              </div>


            </motion.div>


            <motion.div className="bg-gradient-to-t from-[#f9B233]/30 to-[#f9B233]/30 p-8 rounded-[50px] drop-shadow-[0_0_20px_rgba(204,88,21,1)] group"
              whileHover={{ y: -40, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 150, damping: 12 }}>
              <div className="relative h-[40rem] w-[22rem]  rounded-[30px] flex justify-center  overflow-hidden border-4 border-yellow-600 drop-shadow-[0_0_20px_rgba(204,88,21,1)] group-hover:brightness-[0.15] group-hover:contrast-5 transition duration-300">
                <Image
                  alt="crown"
                  src="/img/niño2.png"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover "
                />
                <div className="absolute  text-white text-xl font-bold text-center   ">
                  <p className="mt-[500px] w-full   text-5xl font-poppins font-black text-white uppercase">
                    PRIMARIA  <br />
                  </p>
                  <p className="text-white  pl-4 font-poppins font-medium uppercase">
                    Conoce aqui los años
                  </p>
                  <p className="text-white text-base pl-4 font-poppins font-medium bg-transparent border-2 mt-2 rounded-full
                   border-white">Haz click aquí</p>

                </div>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-yellow-600 text-white px-12 py-4 text-2xl rounded-lg font-bold transition-all duration-300 
                transform hover:scale-105 hover:shadow-lg active:scale-95 hover:bg-yellow-700">
                  Matemática
                </button>
                <button className="bg-yellow-600 text-white px-12 py-4 text-2xl  rounded-lg font-bold transition-all duration-300 
                transform hover:scale-105 hover:shadow-lg active:scale-95 hover:bg-yellow-700">
                  Comunicación 
                </button>
                <button className="bg-yellow-600 text-white px-12 py-4 text-2xl rounded-lg font-bold  transition-all duration-300 
                transform hover:scale-105 hover:shadow-lg active:scale-95 hover:bg-yellow-700">
                  Historia
                </button>

              </div>


            </motion.div>


            <motion.div className="bg-gradient-to-t from-[#f78018]/30 to-[#d46300]/30 p-8 rounded-[50px] drop-shadow-[0_0_20px_rgba(234,88,12,1)] group"
              whileHover={{ y: -40, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 150, damping: 12 }}>
              <div className="relative h-[40rem] w-[22rem]  rounded-[30px] flex justify-center  overflow-hidden border-4 border-orange-600 drop-shadow-[0_0_20px_rgba(234,88,12,1)] group-hover:brightness-[0.15] group-hover:contrast-5 transition duration-300">
                <Image
                  alt="crown"
                  src="/img/niño3.png"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover  "
                />
                <div className="absolute  text-white text-xl font-bold text-center   ">
                  <p className="mt-[500px] w-full   text-5xl font-poppins font-black text-white uppercase">
                    SECUNDARIA  <br />
                  </p>
                  <p className="text-white  pl-4 font-poppins font-medium uppercase">
                    Conoce aqui los años
                  </p>
                  <p className="text-white text-base pl-4 font-poppins font-medium bg-transparent border-2 mt-2 rounded-full
                   border-white">Haz click aquí</p>

                </div>

              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-orange-600 text-white px-12 py-4 text-2xl rounded-lg font-bold  transition-all duration-300 
                transform hover:scale-105 hover:shadow-lg active:scale-95 hover:bg-orange-700">
                  Matemática
                </button>
                <button className="bg-orange-600 text-white px-12 py-4 text-2xl rounded-lg font-bold  transition-all duration-300 
                transform hover:scale-105 hover:shadow-lg active:scale-95 hover:bg-orange-700">
                  Comunicación 
                </button>
                <button className="bg-orange-600 text-white px-12 py-4 text-2xl rounded-lg font-bold  transition-all duration-300 
                transform hover:scale-105 hover:shadow-lg active:scale-95 hover:bg-orange-700">
                  Historia
                </button>

              </div>
            </motion.div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default NivelesEducacion;
