"use client";
import DropdownList from "@/components/Desplegables/DropdownList";
import { motion } from "framer-motion";

import Image from "next/image";
import React from "react";

const Grado = () => {
  return (

    <div className="flex flex-col  w-full h-full    ">
      
      <div className="pt-28 bg-[url('/img/niños.jpg')] bg-cover bg-center relative">
      <div className="absolute inset-0 
       w-full h-full"></div>
      

      <div className="flex items-start justify-center">
        <p className="text-9xl text-white font-extrabold drop-shadow-[0_0_15px_rgba(255,255,255,1)] max-sm:text-6xl sm:text-9xl">4</p>
        <p className="text-5xl text-white font-extrabold drop-shadow-[0_0_15px_rgba(255,255,255,1)] max-sm:text-4xl sm:text-5xl">to</p>
        <h1 className="text-9xl text-white font-extrabold drop-shadow-[0_0_15px_rgba(255,255,255,1)] max-sm:text-6xl sm:text-9xl">GRADO</h1>
      </div>
      



      <div className="max-w-[100rem]  flex flex-col items-center ">
        <div className="flex flex-wrap justify-center lg:gap-[12rem] items-center w-full mt-[4rem]  max-sm:flex-col max-sm:gap-3 md:gap-12 mb-16">

          <motion.div className="flex flex-col items-center justify-center bg-gradient-to-t from-yellow-600 via-[#21212151] to-[#21212100] p-4
           rounded-xl   hover:shadow-[0_0_50px_0_#F9B233]"
            whileHover={{ y: -20, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}>

            <div className="w-[335px] h-[250px] bg-white rounded-xl overflow-hidden border-2 border-[#F9B233] shadow-[0_0_15px_0_#F9B233]">
              <Image
                alt=""
                src="https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Ejemplos/CursoEjem2.jpeg"
                width={900}
                height={900}
                className="size-full object-cover scale-150 transform -translate-x-3"
              />
            </div>

            <div className=" flex flex-col gap-3 items-center justify-center rounded-xl mt-6  ">
              <div className="flex flex-col items-center justify-center gap-4 rounded-xl p-4 w-[330px] ">
                <h1 className="text-5xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,2)]">Ciencias</h1>
                <DropdownList
                  TextColor="text-[#F5AB2C]"
                  BgColor="bg-[#F5AB2C]"
                  Hover=" hover:text-[#F5AB2C]"
                  BorderH="hover:border-[#F5AB2C]"
                />
              </div>
            </div>
          </motion.div >

          <motion.div
            className="flex flex-col items-center justify-center bg-gradient-to-t from-[#179EC1] via-[#21212151] to-[#21212100] rounded-xl 
            p-4  hover:shadow-[0_0_50px_0_#38bdf8]"
            whileHover={{ y: -20, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
            >

            <div className=" w-[335px] h-[250px] bg-white rounded-xl overflow-hidden border-2 border-[#179EC1] shadow-[0_0_20px_0_#179EC1] ">
              <Image
                alt=""
                src="https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Ejemplos/CursoEjem.jpeg"
                width={900}
                height={900}
                className="size-full object-cover scale-150 transform -translate-x-3   "
              />
            </div>
            <div className=" flex flex-col gap-3 items-center justify-center rounded-xl mt-6  ">
              <div className="flex flex-col items-center justify-center gap-4 rounded-xl p-4  w-[330px] ">
                <h1 className="text-5xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,2)]">Matemáticas</h1>
                <DropdownList 
                TextColor="text-sky-500" 
                BgColor="bg-sky-500 "
                 Hover="hover:text-sky-500" 
                 BorderH=" hover:border-sky-500"
                 />
              </div>
            </div>
          </motion.div>
        </div>


        </div>
      </div>
      
     
      <div className="bg-white w-full   ">
        <div className="max-w-[100rem]  px-12 py-10 mx-auto mt-9 ">

          <h1 className="px-3 py-5 text-center font-poppins font-bold text-yellow-500 text-7xl  tracking-[3px]  
          drop-shadow-[0_0_10px_rgba(249,178,51,1)] relative z-30">VIDEO EDUCATIVO</h1>
          <Image
            alt="un video introductorio"
            src="/img/clase.jpg"
            width={1000}
            height={1000}
            className=" w-[950px]   object-cover mx-auto rounded-3xl shadow-[0_0_50px_0_#F9B233] mt-10"
          />
        </div>
      </div>

    </div>
  );
};

export default Grado;