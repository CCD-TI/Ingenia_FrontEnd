import DropdownList from "@/components/Desplegables/DropdownList";
import { Dropdown } from "@heroui/react";
import Image from "next/image";
import React from "react";

const Grado = () => {
  return (
    <div className="flex flex-col gap-2 w-full h-full pt-32  relative bg-gradient-to-r from-gray-900 via-teal-500 to-indigo-20">
      
      <div className="flex items-start justify-center">
              <p className="text-9xl text-white font-extrabold drop-shadow-[0_0_15px_rgba(255,255,255,1)]">4</p>
              <p className="text-5xl text-white font-extrabold drop-shadow-[0_0_15px_rgba(255,255,255,1)]">to</p>
              <h1 className="text-9xl text-white font-extrabold drop-shadow-[0_0_15px_rgba(255,255,255,1)]">GRADO</h1>
            </div>
        
    
     
      
     

      <div className="max-w-[100rem]  flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-[10rem] items-center w-full mt-[7rem] ">
          <div className="flex flex-col items-center justify-center bg-yellow-500  rounded-xl p-4  ">


            <div className=" w-[330px] h-[250px] bg-white rounded-xl overflow-hidden ">
              <Image
                alt=""
                src="https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Ejemplos/CursoEjem2.jpeg"
                width={900}
                height={900}
                className="size-full object-cover scale-150 transform -translate-x-3   "
              />
            </div>
            <div className=" flex flex-col gap-3 items-center justify-center rounded-xl mt-6  ">
              <div className="flex flex-col items-center justify-center gap-4 rounded-xl border-dashed border-3 p-4 w-[330px] ">
                <h1 className="text-5xl font-bold text-white">Ciencias</h1>
                <DropdownList
                  TextColor="text-[#F5AB2C]"
                  BgColor="bg-[#F5AB2C]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-sky-500  rounded-xl p-4  ">
            <div className=" w-[330px] h-[250px] bg-white rounded-xl overflow-hidden ">
              <Image
                alt=""
                src="https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Ejemplos/CursoEjem.jpeg"
                width={900}
                height={900}
                className="size-full object-cover scale-150 transform -translate-x-3   "
              />
            </div>
            <div className=" flex flex-col gap-3 items-center justify-center rounded-xl mt-6  ">
              <div className="flex flex-col items-center justify-center gap-4 rounded-xl border-dashed border-3 p-4 w-[330px] ">
                <h1 className="text-5xl font-bold text-white">Matemáticas</h1>
                <DropdownList TextColor="text-sky-500" BgColor="bg-sky-500" />
              </div>
            </div>
          </div>
        </div>



      </div>
      <div className="bg-white w-full   mt-7 ">
          <div className="max-w-[100rem]  px-12 py-10 mx-auto ">

          <h1 className="px-3 py-5 text-center font-poppins font-bold text-yellowIngenia text-5xl mb-6">VIDEO EDUCATIVO</h1>
          <Image
                alt="un video introductorio"
                src="/img/clase.jpg"
                width={1000}
                height={1000}
                className=" w-[950px]   object-cover mx-auto rounded-3xl"
              />       
          </div>
      </div>
      
    </div>
  );
};

export default Grado;