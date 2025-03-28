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
            <div className=""
               
             >
         
             <motion.div className="  h-[22rem] w-[15rem] border-gray-300 rounded-[20px] drop-shadow-[0_0_10px_rgba(2,132,199,1)]
             flex items-end overflow-hidden shadow-[0_0_20px_rgba(2,132,199,1)]"
             whileHover={{ y: -20, scale: 1.02 }}
             transition={{ type: "spring", stiffness: 150, damping: 12 }}>
                      <Image
                                     alt="crown"
                                     src="/img/niño1.png"
                                     width={1000}
                                     height={1000}
                                     className=" w-full h-full object-cover opacity-50"
                                   />
         
                        
               
                </motion.div>

             
              <p className="mt-7 w-full text-start pl-4 font-poppins font-black text-[#05abdd] uppercase">
                Nivel Primario
              </p>
              <p className="text-white text-start pl-4 flex items-center gap-[120px] font-poppins font-medium">
                Conocer más <FaArrowRightLong className="text-white " />
              </p>
             
            </div>


            <div className="">
              
                <motion.div className="  h-[22rem] w-[15rem] border-gray-300 rounded-[20px] flex items-end overflow-hidden 
                shadow-[0_0_20px_rgba(234,88,12,1)] drop-shadow-[0_0_10px_rgba(255,140,0,1)] "
                whileHover={{ y: -20, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 150, damping: 12 }}>
                      <Image
                                     alt="crown"
                                     src="/img/niño2.png"
                                     width={1000}
                                     height={1000}
                                     className=" w-full h-full object-cover opacity-50"
                                   />
                        
               
                </motion.div>
              
              <p className="mt-7 w-full text-start pl-4 text-1xl font-poppins font-black text-orange-600 uppercase">
                nivel Secundario 
              </p>
              <p className="text-white text-start pl-4 flex items-center gap-[120px] font-poppins font-medium">
                Conocer más <FaArrowRightLong className="text-white " />
              </p>
            </div>
            <div className="">
            <motion.div className="  h-[22rem] w-[15rem] border-gray-300 drop-shadow-[0_0_10px_rgba(249,178,51,1)] rounded-[20px] flex items-end 
            overflow-hidden  shadow-[0_0_20px_rgba(234,179,8,1)]"
            whileHover={{ y: -20, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}>
                      <Image
                                     alt="crown"
                                     src="/img/niño3.png"
                                     width={1000}
                                     height={1000}
                                     className=" w-full h-full object-cover 
                                     opacity-50  "
                                   />
                        
               
                </motion.div>
           
              <p className="mt-7 w-full text-start pl-4 text-1xl font-poppins font-black text-yellowIngenia uppercase">
                Pre Universitario  <br /> 
              </p>
              <p className="text-white text-start pl-4 font-poppins font-medium">
                Conocer más
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NivelesEducacion;
