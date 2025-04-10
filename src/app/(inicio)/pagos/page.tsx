"use client";
import BeneficiosPagos from "@/components/Modulos/BeneficiosPagos";
import { FaCheckSquare } from "react-icons/fa";
import Image from "next/image";

export default function Pagos() {
    return (
        <>
            <div className='bg-[url("/img/testimonios.jpg")] relative w-full h-[900px] bg-cover bg-center flex flex-col items-start 
            justify-center gap-1 '>
            <div className=" ml-10">Regresar</div>
            <div className="flex items-start justify-center gap-12 mx-auto max-sm:flex-col max-sm:gap-2"> 
            <div className="w-[56rem] h-[39rem] border-2 border-cyan-600 p-2 rounded-[30px] bg-white/10">
            <div className="flex gap-64 mt-3">
                <h1 className="py-4 pl-16 font-poppins font-semibold text-2xl">Información de pago</h1>
                <button className="border-2 border-white bg-transparent  px-7 rounded-full font-poppins font-extralight text-lg">Eliminar Item</button>
            </div>
            <div className=" px-16">
                    <span className="flex gap-3 mt-3"><FaCheckSquare/>2 Item Seleccionado</span>
                    <div className="w-full h-[3px] bg-white drop-shadow-[0_0_10px_rgba(255,255,255,2)] mt-2 "></div>
                </div>

                <div className="flex items-center gap-4 pl-16 mt-6">
                    <span className="flex gap-4"><FaCheckSquare className="w-6 h-6"/></span>
                    <div className="h-[120px] w-[120px]">
                          <Image
                                          alt="crown"
                                          src="/img/ciencias1.jpeg"
                                          width={1000}
                                          height={1000}
                                          className="w-full h-full object-cover "
                                        />
                    </div>
                    <span className="flex flex-col "> 
                        <p> <strong className="text-lg">4to grado Física</strong></p>
                        <p className="font-poppins font-extralight">Marzo 14, 2025 - 13:00</p>
                        <p className="font-poppins font-extralight">Periodo de validación: <strong>12 Julio 2025</strong>  </p>
                    </span>
                    
                    <span className="ml-40 font-poppins font-semibold text-xl">S/. 599.99</span>
                </div> 

                <div className="flex items-center gap-4 pl-16 mt-4">
                    <span className="flex gap-4"><FaCheckSquare className="w-6 h-6"/></span>
                    <div className="h-[120px] w-[120px]">
                          <Image
                                          alt="crown"
                                          src="/img/ciencias1.jpeg"
                                          width={1000}
                                          height={1000}
                                          className="w-full h-full object-cover "
                                        />
                    </div>
                    <span className="flex flex-col "> 
                        <p> <strong className="text-lg">4to grado Física</strong></p>
                        <p className="font-poppins font-extralight">Marzo 14, 2025 - 13:00</p>
                        <p className="font-poppins font-extralight">Periodo de validación: <strong>12 Julio 2025</strong>  </p>
                    </span>
                    
                    <span className="ml-40 font-poppins font-semibold text-xl">S/. 599.99</span>

                </div>

                <div className="flex items-center gap-4 pl-16 mt-4">
                    <span className="flex gap-4"><FaCheckSquare className="w-6 h-6"/></span>
                    <div className="h-[120px] w-[120px] ">
                          <Image
                                          alt="crown"
                                          src="/img/ciencias1.jpeg"
                                          width={1000}
                                          height={1000}
                                          className="w-full h-full object-cover "
                                        />
                    </div>
                    <span className="flex flex-col "> 
                        <p> <strong className="text-lg">4to grado Física</strong></p>
                        <p className="font-poppins font-extralight">Marzo 14, 2025 - 13:00</p>
                        <p className="font-poppins font-extralight">Periodo de validación: <strong>12 Julio 2025</strong>  </p>
                    </span>
                    
                    <span className="ml-40 font-poppins font-semibold text-xl">S/. 599.99</span>
                </div>

               <span></span>
       
            
            </div>




            <div className="w-[39rem] h-[39rem] border-2 border-cyan-600 pt-8 px-16 rounded-[30px] bg-white/10 ">
            <h1 className="font-poppins font-semibold text-2xl">Subtotal</h1> 
           <div className="flex gap-[340px] mt-10">
            <span className="font-poppins font-extralight">Física</span>
            <span className="font-poppins font-semibold text-xl">S/. 599.99</span>

           </div>

           <div className="flex gap-[350px] mt-10">
            <span className="font-poppins font-extralight">Descuento</span>
            <span  className="font-poppins font-semibold text-xl">S/. 0</span>
              
           </div>
           <div className="w-full h-[3px] bg-white drop-shadow-[0_0_10px_rgba(255,255,255,2)] mt-10 "></div>

           <div className="flex gap-[350px] mt-10">
            <span className="font-poppins font-extralight"> Total</span>
            <span  className="font-poppins font-semibold text-xl">S/. 599.99</span>
              
           </div>

           <button className="bg-transparent border-2 border-white p-4 rounded-full w-full mt-14">Continuar</button>
                   
            
            </div>


            </div>
            
            

            </div>
            <BeneficiosPagos />
        </>
    );
}
