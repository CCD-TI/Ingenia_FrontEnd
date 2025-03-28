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
          <h2 className="text-7xl font-semibold mb-8 w-full text-center uppercase text-white">
            Niveles de Educación <br /><span className="text-yellowIngenia drop-shadow-[0_0_10px_rgba(249,178,51,1)]">en Ingenia College</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-14">

          <motion.div className="bg-gradient-to-t from-[#05ABDD]/30 to-[#035D78]/30 drop-shadow-[0_0_20px_rgba(2,132,199,1)] p-8 rounded-[50px]" 
            whileHover={{ y: -40, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}>
              <div className="relative h-[40rem] w-[22rem]  rounded-[30px] flex justify-center  overflow-hidden border-4 border-sky-600 drop-shadow-[0_0_20px_rgba(2,132,199,1)]">
                <Image
                  alt="crown"
                  src="/img/niño1.png"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover "
                />
                <div className="absolute  text-white text-xl font-bold text-center   ">
                  <p className="mt-[500px] w-full   text-5xl font-poppins font-black text-white uppercase">
                    INICIAL  <br />
                  </p>
                  <p className="text-white  pl-4 font-poppins font-medium uppercase">
                    Conoce aqui los años
                  </p>
                  <p className="text-white text-base pl-4 font-poppins font-medium bg-transparent border-2 mt-2 rounded-full
                   border-white">Haz click aquí</p>
                  
                </div>
              </div>


            </motion.div>


            <motion.div className="bg-gradient-to-t from-[#f9B233]/30 to-[#f9B233]/30 p-8 rounded-[50px] drop-shadow-[0_0_20px_rgba(204,88,21,1)]"
               whileHover={{ y: -40, scale: 1.03 }}
               transition={{ type: "spring", stiffness: 150, damping: 12 }}>
              <div className="relative h-[40rem] w-[22rem]  rounded-[30px] flex justify-center  overflow-hidden border-4 border-yellow-600 drop-shadow-[0_0_20px_rgba(204,88,21,1)]">
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


            </motion.div>


            <motion.div className="bg-gradient-to-t from-[#f78018]/30 to-[#d46300]/30 p-8 rounded-[50px] drop-shadow-[0_0_20px_rgba(234,88,12,1)]"
               whileHover={{ y: -40, scale: 1.03 }}
               transition={{ type: "spring", stiffness: 150, damping: 12 }}>
              <div className="relative h-[40rem] w-[22rem]  rounded-[30px] flex justify-center  overflow-hidden border-4 border-orange-600 drop-shadow-[0_0_20px_rgba(234,88,12,1)]  ">
                <Image
                  alt="crown"
                  src="/img/niño3.png"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover "
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
            </motion.div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default NivelesEducacion;
