"use client";
 import { useState } from 'react';

import Tarjeta from "@/components/Modulos/Tarjeta";
import BeneficiosPagos from "@/components/Modulos/BeneficiosPagos";
import Image from "next/image";
import { MdKeyboardArrowLeft } from "react-icons/md";

export default function Pagos() {
  const [mostrarConfirmacion, setMostrarConfirmacionn] = useState(false);




    return (
        <>
       
       <div>
       {!mostrarConfirmacion ? (
        <>
          {/* Todo el contenido del formulario */}
          <div className='bg-[url("/img/testimonios.jpg")] relative w-full h-full py-20 max-sm:h-full bg-cover bg-center flex flex-col items-start  
            justify-center gap-1 '>
            <span className=" ml-16 flex gap-2 items-center text-white"><MdKeyboardArrowLeft className="w-5 h-5 text-white" />Regresar</span>
            <div className="  flex lg:gap-10 min-[1330px]:gap-24  items-start justify-center  mx-auto mt-4 max-sm:flex-col max-sm:gap-3
             sm:gap-3 min-[1545px]:flex-row  max-[1548px]:flex-col px-6 max-sm:px-2"> 
            <div className="min-[1300px]:w-[53rem] max-sm:w-full min-[1300px]:h-[39rem] sm:w-full md:w-[47rem]  lg:w-[53rem] min-[1300px]:ml-5 border-2 border-cyan-600  py-2 sm:pl-2 pr-3 max-sm:pr-1 rounded-[30px] bg-white/10 shadow-[0_30px_50px_42px_rgba(8,145,178,0.3)]  ">
            <div className="flex max-sm:gap-2 mt-3 max-sm:flex-col max-sm:items-center sm:flex-col sm:items-center">
                <h1 className="py-4 min-[1390px]:pl-16 sm:pl-5 font-poppins font-semibold text-3xl max-sm:text-xl drop-shadow-[0_0_10px_rgba(255,255,255,2)] text-white ">Información de pago</h1>
               
            </div>
         
                <div className="max-h-[400px] overflow-y-auto pr-4 max-sm:pr-1 mt-4 scroll-box">
                <style jsx>{`
    .scroll-box::-webkit-scrollbar {
      width: 10px;
    }

    .scroll-box::-webkit-scrollbar-track {
      background: transparent;
      border: 1px solid white;
      border-radius: 9999px;
    }

    .scroll-box::-webkit-scrollbar-thumb {
      background: linear-gradient(to bottom, transparent, #facc15); /* de transparente a yellow-500 */
      border-radius: 9999px;
      transition: background 0.3s ease;
    }

    .scroll-box::-webkit-scrollbar-thumb:hover {
      background: #facc15; /* al hacer hover */
    }

    .scroll-box {
      scrollbar-width: thin;
      scrollbar-color: #facc15 transparent;
    }
  `}</style>
                <div className="flex items-start flex-col lg:flex-row md:flex-row lg:items-center md:items-center text-white ">
                  <div className="flex flex-row lg:gap-4 max-sm:gap-3 lg:pl-10  mt-4 sm:gap-2 items-center lg:h-[120px] md:h-[120px] 
                  h-[180px] max-sm:pl-5 " >
                    <span className="flex gap-4 items-center sm:gap-2 sm:pl-5"></span>
                    
                    <div className="h-[120px] w-[120px] ">
                          <Image
                                          alt="crown"
                                          src="/img/ciencias1.jpeg"
                                          width={1000}
                                          height={1000} 
                                          className="w-full h-full object-cover rounded-xl"
                                        />
                    </div>                                      

                    <span className="flex flex-col mt-5"> 
                        <p> <strong className="text-3xl max-sm:text-xl ">4to grado - Física</strong></p>
                        <p className="font-poppins font-extralight text-2xl max-sm:text-base">Marzo 14, 2025 - 13:00</p>
                        <p className="font-poppins font-extralight max-sm:flex flex-col max-sm:text-xs">Periodo de validación: <strong>12 Julio 2025</strong>  </p>
                    </span>
                    </div>
                    <div className="flex max-sm:w-full max-sm:justify-center lg:mt-0  md:mt-0 mt-[-25px] my-3  ">
                      <span className="lg:ml-40 md:ml-36 ml-[199px] max-sm:ml-0 font-poppins font-semibold text-2xl max-sm:p-4 max-sm:rounded-xl 
                      ">S/. 599.99</span>
                    </div>

                </div>
          

                <div className="flex items-start flex-col lg:flex-row md:flex-row lg:items-center md:items-center text-white ">
                  <div className="flex flex-row lg:gap-4 max-sm:gap-3 lg:pl-10  mt-4 sm:gap-2 items-center lg:h-[120px] md:h-[120px] 
                  h-[180px] max-sm:pl-5 " >
                    <span className="flex gap-4 items-center sm:gap-2 sm:pl-5"></span>
                    
                    <div className="h-[120px] w-[120px] ">
                          <Image
                                          alt="crown"
                                          src="/img/ciencias1.jpeg"
                                          width={1000}
                                          height={1000} 
                                          className="w-full h-full object-cover rounded-xl"
                                        />
                    </div>                                      

                    <span className="flex flex-col mt-5"> 
                        <p> <strong className="text-3xl max-sm:text-xl ">4to grado - Física</strong></p>
                        <p className="font-poppins font-extralight text-2xl max-sm:text-base">Marzo 14, 2025 - 13:00</p>
                        <p className="font-poppins font-extralight max-sm:flex flex-col max-sm:text-xs">Periodo de validación: <strong>12 Julio 2025</strong>  </p>
                    </span>
                    </div>
                    <div className="flex max-sm:w-full max-sm:justify-center lg:mt-0  md:mt-0 mt-[-25px] my-3  ">
                      <span className="lg:ml-40 md:ml-36 ml-[199px] max-sm:ml-0 font-poppins font-semibold text-2xl max-sm:p-4 max-sm:rounded-xl 
                      ">S/. 599.99</span>
                    </div>

                </div>

                <div className="flex items-start flex-col lg:flex-row md:flex-row lg:items-center md:items-center text-white ">
                  <div className="flex flex-row lg:gap-4 max-sm:gap-3 lg:pl-10  mt-4 sm:gap-2 items-center lg:h-[120px] md:h-[120px] 
                  h-[180px] max-sm:pl-5 " >
                    <span className="flex gap-4 items-center sm:gap-2 sm:pl-5"></span>
                    
                    <div className="h-[120px] w-[120px] ">
                          <Image
                                          alt="crown"
                                          src="/img/ciencias1.jpeg"
                                          width={1000}
                                          height={1000} 
                                          className="w-full h-full object-cover rounded-xl"
                                        />
                    </div>                                      

                    <span className="flex flex-col mt-5"> 
                        <p> <strong className="text-3xl max-sm:text-xl ">4to grado - Física</strong></p>
                        <p className="font-poppins font-extralight text-2xl max-sm:text-base">Marzo 14, 2025 - 13:00</p>
                        <p className="font-poppins font-extralight max-sm:flex flex-col max-sm:text-xs">Periodo de validación: <strong>12 Julio 2025</strong>  </p>
                    </span>
                    </div>
                    <div className="flex max-sm:w-full max-sm:justify-center lg:mt-0  md:mt-0 mt-[-25px] my-3  ">
                      <span className="lg:ml-40 md:ml-36 ml-[199px] max-sm:ml-0 font-poppins font-semibold text-2xl max-sm:p-4 max-sm:rounded-xl 
                      ">S/. 599.99</span>
                    </div>

                </div>

                <div className="flex items-start flex-col lg:flex-row md:flex-row lg:items-center md:items-center text-white ">
                  <div className="flex flex-row lg:gap-4 max-sm:gap-3 lg:pl-10  mt-4 sm:gap-2 items-center lg:h-[120px] md:h-[120px] 
                  h-[180px] max-sm:pl-5 " >
                    <span className="flex gap-4 items-center sm:gap-2 sm:pl-5"></span>
                    
                    <div className="h-[120px] w-[120px] ">
                          <Image
                                          alt="crown"
                                          src="/img/ciencias1.jpeg"
                                          width={1000}
                                          height={1000} 
                                          className="w-full h-full object-cover rounded-xl"
                                        />
                    </div>                                      

                    <span className="flex flex-col mt-5"> 
                        <p> <strong className="text-3xl max-sm:text-xl ">4to grado - Física</strong></p>
                        <p className="font-poppins font-extralight text-2xl max-sm:text-base">Marzo 14, 2025 - 13:00</p>
                        <p className="font-poppins font-extralight max-sm:flex flex-col max-sm:text-xs">Periodo de validación: <strong>12 Julio 2025</strong>  </p>
                    </span>
                    </div>
                    <div className="flex max-sm:w-full max-sm:justify-center lg:mt-0  md:mt-0 mt-[-25px] my-3  ">
                      <span className="lg:ml-40 md:ml-36 ml-[199px] max-sm:ml-0 font-poppins font-semibold text-2xl max-sm:p-4 max-sm:rounded-xl 
                      ">S/. 599.99</span>
                    </div>

                </div>

                <div className="flex items-start flex-col lg:flex-row md:flex-row lg:items-center md:items-center text-white ">
                  <div className="flex flex-row lg:gap-4 max-sm:gap-3 lg:pl-10  mt-4 sm:gap-2 items-center lg:h-[120px] md:h-[120px] 
                  h-[180px] max-sm:pl-5 " >
                    <span className="flex gap-4 items-center sm:gap-2 sm:pl-5"></span>
                    
                    <div className="h-[120px] w-[120px] ">
                          <Image
                                          alt="crown"
                                          src="/img/ciencias1.jpeg"
                                          width={1000}
                                          height={1000} 
                                          className="w-full h-full object-cover rounded-xl"
                                        />
                    </div>                                      

                    <span className="flex flex-col mt-5"> 
                        <p> <strong className="text-3xl max-sm:text-xl ">4to grado - Física</strong></p>
                        <p className="font-poppins font-extralight text-2xl max-sm:text-base">Marzo 14, 2025 - 13:00</p>
                        <p className="font-poppins font-extralight max-sm:flex flex-col max-sm:text-xs">Periodo de validación: <strong>12 Julio 2025</strong>  </p>
                    </span>
                    </div>
                    <div className="flex max-sm:w-full max-sm:justify-center lg:mt-0  md:mt-0 mt-[-25px] my-3  ">
                      <span className="lg:ml-40 md:ml-36 ml-[199px] max-sm:ml-0 font-poppins font-semibold text-2xl max-sm:p-4 max-sm:rounded-xl 
                      ">S/. 599.99</span>
                    </div>

                </div>

<div className="flex items-start flex-col lg:flex-row md:flex-row lg:items-center md:items-center text-white">
                  <div className="flex flex-row lg:gap-4 max-sm:gap-3 lg:pl-10  mt-4 sm:gap-2 items-center lg:h-[120px] md:h-[120px] h-[180px] max-sm:pl-5" >
                    <span className="flex gap-4 items-center sm:pl-5"></span>
                    
                    <div className="h-[120px] w-[120px] ">
                          <Image
                                          alt="crown"
                                          src="/img/ciencias1.jpeg"
                                          width={1000}
                                          height={1000} 
                                          className="w-full h-full object-cover rounded-xl"
                                        />
                    </div>                 

                    <span className="flex flex-col mt-5"> 
                        <p> <strong className="text-3xl max-sm:text-xl">4to grado - Física</strong></p>
                        <p className="font-poppins font-extralight text-2xl max-sm:text-base">Marzo 14, 2025 - 13:00</p>
                        <p className="font-poppins font-extralight max-sm:text-xs">Periodo de validación: <strong>12 Julio 2025</strong>  </p>
                    </span>
                    </div>
                    
                    <div className="flex max-sm:w-full max-sm:justify-center lg:mt-0  md:mt-0 mt-[-25px] my-3  ">
                      <span className="lg:ml-40 md:ml-36 ml-[199px] max-sm:ml-0 font-poppins font-semibold text-2xl max-sm:p-4 max-sm:rounded-xl 
                      ">S/. 599.99</span>
                    </div>

                </div> 
            
            </div>

                </div>           

        <div className="w-[34rem] max-sm:w-full min-[1300px]:h-[39rem]  max-sm:h-[27rem]  sm:h-[27rem] border-2 border-cyan-600 pt-8 px-16 max-sm:px-10 rounded-[30px] sm:mx-auto
         bg-white/10 shadow-[0_30px_50px_42px_rgba(8,145,178,0.3)] text-white ">
            <h1 className="font-poppins font-semibold text-3xl drop-shadow-[0_0_10px_rgba(255,255,255,2)]">Subtotal</h1> 
           <div className="flex justify-between w-full mt-10">
            <span className="font-poppins font-extralight">Física</span>
            <span className="font-poppins font-semibold text-xl">S/. 599.99</span>

           </div>

           <div className="flex justify-between w-full max-sm:gap-[90px] mt-10">
            <span className="font-poppins font-extralight">Descuento</span>
            <span  className="font-poppins font-semibold text-xl">S/. 0</span>
              
           </div>
           <div className="w-full h-[3px] bg-white drop-shadow-[0_0_10px_rgba(255,255,255,2)] mt-10 "></div>

           <div className="flex justify-between w-full max-sm:gap-[80px] mt-10">
            <span className="font-poppins font-extralight drop-shadow-[0_0_10px_rgba(255,255,255,2)]"> Total</span>
            <span  className="font-poppins font-semibold text-xl">S/. 599.99</span>
              
           </div>

           <button 
            onClick={() => setMostrarConfirmacionn(true)}
           className="bg-transparent border-2 border-white p-4 rounded-full w-full  min-[1300px]:mt-14 max-sm:mt-5  drop-shadow-[0_0_30px_rgba(255,255,255,8)] uppercase
           text-2xl font-poppins font-black hover:text-cyan-600 hover:bg-white sm:mt-400">Continuar</button>
                              
            </div>
            </div>        

            </div>
            
            <BeneficiosPagos></BeneficiosPagos>
         
        </>
      ) : (
        <div>
         <Tarjeta ></Tarjeta>
         
        </div>
      )}
    </div>
        </>
    );
}
