"use client";
import BeneficiosPagos from "@/components/Modulos/BeneficiosPagos";
import { FaCheckSquare } from "react-icons/fa";
import Image from "next/image";
import { MdKeyboardArrowLeft } from "react-icons/md";

export default function Pagos() {
    return (
        <>
            <div className='bg-[url("/img/testimonios.jpg")] relative w-full h-[900px] bg-cover bg-center flex flex-col items-start 
            justify-center gap-1 '>
            <span className=" ml-16 flex gap-2 items-center"><MdKeyboardArrowLeft className="w-5 h-5" />Regresar</span>
            <div className="flex gap-10 items-start justify-center  mx-auto mt-4 max-sm:flex-col max-sm:gap-2 "> 
            <div className="w-[53rem] h-[39rem] border-2 border-cyan-600 py-2 pl-2 pr-3 rounded-[30px] bg-white/10 shadow-[0_30px_50px_42px_rgba(8,145,178,0.3)]  ">
            <div className="flex gap-52 mt-3">
                <h1 className="py-4 pl-16 font-poppins font-semibold text-3xl drop-shadow-[0_0_10px_rgba(255,255,255,2)]">Información de pago</h1>
                <button className="border-2 border-white bg-transparent  px-7 rounded-full font-poppins font-extralight text-lg hover:bg-white hover:text-black">Eliminar Item</button>
            </div>
            <div className=" px-16">
                    <span className="flex gap-3 items-center mt-3"><FaCheckSquare/>2 Item Seleccionado</span>
                    <div className="w-full h-[3px] bg-white drop-shadow-[0_0_10px_rgba(255,255,255,2)] mt-2 "></div>
                </div>
                <div className="max-h-[400px] overflow-y-auto pr-4 mt-4 scroll-box">
                <style jsx>{`
    .scroll-box::-webkit-scrollbar {
      width: 10px;
    }
      

    .scroll-box::-webkit-scrollbar-thumb {
      background-color: #06b6d4;
      border-radius: 9999px;
    }
    .scroll-box {
      scrollbar-color: #06b6d4 transparent;
      scrollbar-width: thin;
    }
  `}</style>
                <div className="flex items-center gap-4 pl-10 mt-6 ">
                    <span className="flex gap-4"><FaCheckSquare className="w-6 h-6"/></span>
                    <div className="h-[120px] w-[120px]">
                          <Image
                                          alt="crown"
                                          src="/img/ciencias1.jpeg"
                                          width={1000}
                                          height={1000}
                                          className="w-full h-full object-cover  rounded-xl "
                                        />
                    </div>
                    <span className="flex flex-col "> 
                        <p> <strong className="text-lg">4to grado Física</strong></p>
                        <p className="font-poppins font-extralight">Marzo 14, 2025 - 13:00</p>
                        <p className="font-poppins font-extralight">Periodo de validación: <strong>12 Julio 2025</strong>  </p>
                    </span>
                    
                    <span className="ml-40 font-poppins font-semibold text-xl">S/. 599.99</span>
                </div> 

                <div className="flex items-center gap-4 pl-10 mt-4">
                    <span className="flex gap-4"><FaCheckSquare className="w-6 h-6"/></span>
                    <div className="h-[120px] w-[120px]">
                          <Image
                                          alt="crown"
                                          src="/img/ciencias1.jpeg"
                                          width={1000}
                                          height={1000}
                                          className="w-full h-full object-cover  rounded-xl"
                                        />
                    </div>
                    <span className="flex flex-col "> 
                        <p> <strong className="text-lg">4to grado Física</strong></p>
                        <p className="font-poppins font-extralight">Marzo 14, 2025 - 13:00</p>
                        <p className="font-poppins font-extralight">Periodo de validación: <strong>12 Julio 2025</strong>  </p>
                    </span>
                    
                    <span className="ml-40 font-poppins font-semibold text-xl">S/. 599.99</span>

                </div>

                <div className="flex items-center gap-4 pl-10 mt-4">
                    <span className="flex gap-4"><FaCheckSquare className="w-6 h-6"/></span>
                    <div className="h-[120px] w-[120px] ">
                          <Image
                                          alt="crown"
                                          src="/img/ciencias1.jpeg"
                                          width={1000}
                                          height={1000}
                                          className="w-full h-full object-cover rounded-xl"
                                        />
                    </div>
                    <span className="flex flex-col "> 
                        <p> <strong className="text-lg">4to grado Física</strong></p>
                        <p className="font-poppins font-extralight">Marzo 14, 2025 - 13:00</p>
                        <p className="font-poppins font-extralight">Periodo de validación: <strong>12 Julio 2025</strong>  </p>
                    </span>
                    
                    <span className="ml-40 font-poppins font-semibold text-xl">S/. 599.99</span>
                </div>
                <div className="flex items-center gap-4 pl-10 mt-4">
                    <span className="flex gap-4"><FaCheckSquare className="w-6 h-6"/></span>
                    <div className="h-[120px] w-[120px] ">
                          <Image
                                          alt="crown"
                                          src="/img/ciencias1.jpeg"
                                          width={1000}
                                          height={1000}
                                          className="w-full h-full object-cover rounded-xl"
                                        />
                    </div>
                    <span className="flex flex-col "> 
                        <p> <strong className="text-lg">4to grado Física</strong></p>
                        <p className="font-poppins font-extralight">Marzo 14, 2025 - 13:00</p>
                        <p className="font-poppins font-extralight">Periodo de validación: <strong>12 Julio 2025</strong>  </p>
                    </span>
                    
                    <span className="ml-40 font-poppins font-semibold text-xl">S/. 599.99</span>
                </div>

                <div className="flex items-center gap-4 pl-10 mt-4">
                    <span className="flex gap-4"><FaCheckSquare className="w-6 h-6"/></span>
                    <div className="h-[120px] w-[120px] ">
                          <Image
                                          alt="crown"
                                          src="/img/ciencias1.jpeg"
                                          width={1000}
                                          height={1000}
                                          className="w-full h-full object-cover rounded-xl"
                                        />
                    </div>
                    <span className="flex flex-col "> 
                        <p> <strong className="text-lg">4to grado Física</strong></p>
                        <p className="font-poppins font-extralight">Marzo 14, 2025 - 13:00</p>
                        <p className="font-poppins font-extralight">Periodo de validación: <strong>12 Julio 2025</strong>  </p>
                    </span>
                    
                    <span className="ml-40 font-poppins font-semibold text-xl">S/. 599.99</span>
                </div>

                <div className="flex items-center gap-4 pl-10 mt-4">
                    <span className="flex gap-4"><FaCheckSquare className="w-6 h-6"/></span>
                    <div className="h-[120px] w-[120px] ">
                          <Image
                                          alt="crown"
                                          src="/img/ciencias1.jpeg"
                                          width={1000}
                                          height={1000}
                                          className="w-full h-full object-cover rounded-xl"
                                        />
                    </div>
                    <span className="flex flex-col "> 
                        <p> <strong className="text-lg">4to grado Física</strong></p>
                        <p className="font-poppins font-extralight">Marzo 14, 2025 - 13:00</p>
                        <p className="font-poppins font-extralight">Periodo de validación: <strong>12 Julio 2025</strong>  </p>
                    </span>
                    
                    <span className="ml-40 font-poppins font-semibold text-xl">S/. 599.99</span>
                </div>
       
            
            </div>

                </div>
                




            <div className="w-[34rem] h-[39rem] border-2 border-cyan-600 pt-8 px-16 rounded-[30px] bg-white/10 shadow-[0_30px_50px_42px_rgba(8,145,178,0.3)]">
            <h1 className="font-poppins font-semibold text-3xl drop-shadow-[0_0_10px_rgba(255,255,255,2)]">Subtotal</h1> 
           <div className="flex gap-[259px] mt-10">
            <span className="font-poppins font-extralight">Física</span>
            <span className="font-poppins font-semibold text-xl">S/. 599.99</span>

           </div>

           <div className="flex gap-[269px] mt-10">
            <span className="font-poppins font-extralight">Descuento</span>
            <span  className="font-poppins font-semibold text-xl">S/. 0</span>
              
           </div>
           <div className="w-full h-[3px] bg-white drop-shadow-[0_0_10px_rgba(255,255,255,2)] mt-10 "></div>

           <div className="flex gap-[269px] mt-10">
            <span className="font-poppins font-extralight drop-shadow-[0_0_10px_rgba(255,255,255,2)]"> Total</span>
            <span  className="font-poppins font-semibold text-xl">S/. 599.99</span>
              
           </div>

           <button className="bg-transparent border-2 border-white p-4 rounded-full w-full mt-14 drop-shadow-[0_0_30px_rgba(255,255,255,8)] uppercase
           text-2xl font-poppins font-black hover:text-cyan-600 hover:bg-white">Continuar</button>
                   
            
            </div>


            </div>
            
            

            </div>
            <BeneficiosPagos />
        </>
    );
}
