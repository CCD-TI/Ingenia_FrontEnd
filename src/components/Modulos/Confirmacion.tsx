"use client";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function Confirmacion(){



    return (
        <>
        <div className="bg-[url('/img/vision.png')] relative bg-center bg-no-repeat bg-cover w-full h-full py-20">
        <div className=" flex justify-center">
        <h1 className="flex gap-3 font-poppins font-semibold text-6xl drop-shadow-[0_0_10px_rgba(255,255,255,2)] text-white"><FaCheckCircle className="text-cyan-400 text-[65px]"/>
        Compra Existosa</h1> 
        </div>
        <div className=" flex justify-center text-white mt-10 font-poppins font-semibold text-xl">
            <h1>Hemos enviado un correo de confirmación a</h1>
                     
        </div>

        <div className=" flex justify-center text-white  font-poppins font-semibold text-xl">
              <h1 className="text-cyan-600">raulperez50@gmail.com</h1>
                     
        </div>
        <div className=" flex justify-center text-white  mt-14 font-poppins font-semibold text-xl" >
              <h1>¡Ya puedes disfrutar del contenido de tu <strong className="text-cyan-600">curso</strong>!</h1>
                     
        </div>
              <div className="flex justify-center text-white mt-7   ml-7   " >
                                      
                                       
                                        <div className="h-[120px] w-[120px]  ">
                                              <Image
                                                              alt="crown"
                                                              src="/img/ciencias1.jpeg"
                                                              width={1000}
                                                              height={1000} 
                                                              className="w-full h-full object-cover rounded-xl"
                                                            />
                                        </div>                 
                    
                                        <span className="flex flex-col mt-5 ml-4"> 
                                            <p> <strong className="text-3xl max-sm:text-xl">4to grado - Física</strong></p>
                                            <p className="font-poppins font-extralight text-2xl max-sm:text-base">Marzo 14, 2025 - 13:00</p>
                                            <p className="font-poppins font-extralight max-sm:text-xs">Periodo de validación: <strong>12 Julio 2025</strong>  </p>
                                        </span>
                                        
                                     
                                        </div>

                                        <div className="flex justify-center text-white mt-7   ml-7 ">
                                        <div className="flex gap-10 mt-10">
            <span className="font-poppins font-extralight drop-shadow-[0_0_10px_rgba(255,255,255,2)] text-xl"> Total</span>
            <span  className="font-poppins font-semibold text-xl"><strong className="text-cyan-600">S/. 599.99</strong></span>
              
           </div>

                                        </div>
        
        
        </div>
        </>
    )
}