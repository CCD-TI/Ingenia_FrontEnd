 "use client";
import BeneficiosPagos from "@/components/Modulos/BeneficiosPagos";
import { FaCheckSquare } from "react-icons/fa";
import Image from "next/image";
import { MdKeyboardArrowLeft } from "react-icons/md";

export default function Pagos() {
    return (
        <>
            <div className='bg-[url("/img/testimonios.jpg")] relative w-full h-[999px] bg-cover bg-center flex flex-col items-start m-3 
            justify-center gap-1 '>
            <span className=" ml-16 flex gap-2 items-center"><MdKeyboardArrowLeft className="w-5 h-5" />Regresar</span>
            <div className="flex gap-10 items-start justify-center  mx-auto mt-4 max-sm:flex-col max-sm:gap-2  min-[1330px]:flex-row max-[1300px]:flex-col"> 
            <div className="w-[53rem] h-[39rem] border-2 border-cyan-600 max-sm:border-hidden py-2 sm:pl-2 pr-3 rounded-[30px] bg-white/10 shadow-[0_30px_50px_42px_rgba(8,145,178,0.3)]  ">
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
                <div className="flex items-start flex-col lg:flex-row md:flex-row lg:items-center md:items-center">
                  <div className="flex flex-row lg:gap-4 max-sm:gap-1 lg:pl-10  mt-4  lg:h-[120px] md:h-[120px] h-[180px] " >
                    <span className="flex gap-4 items-center"><FaCheckSquare className="w-6 h-6 max-sm:hidden sm:block md:block lg:block"/></span>
                    
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
                        <p> <strong className="text-3xl max-sm:text-2xl">4to grado - Física</strong></p>
                        <p className="font-poppins font-extralight text-2xl max-sm:text-xl">Marzo 14, 2025 - 13:00</p>
                        <p className="font-poppins font-extralight">Periodo de validación: <strong>12 Julio 2025</strong>  </p>
                    </span>
                    </div>
                    <div className="flex lg:mt-0 md:mt-0 mt-[-40px] my-3  ">
                      <span className="lg:ml-40 md:ml-28 ml-[260px] font-poppins font-semibold text-2xl max-sm:bg-white/20 max-sm:p-4 max-sm:rounded-xl max-sm:border-2 max-sm:border-white
                      max-sm:shadow-[0_0_15px_rgba(255,255,255,1)]">S/,. 599.99</span>
                    </div>


                </div>
                <div className="border-t-2 border-dashed border-yellow-500 shadow-[0_0_10px_3px_rgba(234,179,8,0.7)] w-[395px] hidden max-sm:block max-sm:text-[8px]
                mt-3 ml-2"></div>

<div className="flex items-start flex-col lg:flex-row md:flex-row lg:items-center md:items-center">
                  <div className="flex flex-row lg:gap-4 max-sm:gap-1 lg:pl-10  mt-4  lg:h-[120px] md:h-[120px] h-[180px] " >
                    <span className="flex gap-4 items-center"><FaCheckSquare className="w-6 h-6 max-sm:hidden sm:block md:block lg:block"/></span>
                    
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
                        <p> <strong className="text-3xl max-sm:text-2xl">4to grado - Física</strong></p>
                        <p className="font-poppins font-extralight text-2xl max-sm:text-xl">Marzo 14, 2025 - 13:00</p>
                        <p className="font-poppins font-extralight">Periodo de validación: <strong>12 Julio 2025</strong>  </p>
                    </span>
                    </div>
                    <div className="flex lg:mt-0 md:mt-0 mt-[-40px] my-3  ">
                      <span className="lg:ml-40 md:ml-36 ml-[260px] font-poppins font-semibold text-2xl max-sm:bg-white/20 max-sm:p-4 max-sm:rounded-xl max-sm:border-2 max-sm:border-white
                      max-sm:shadow-[0_0_15px_rgba(255,255,255,1)]">S/. 599.99</span>
                    </div>


                </div>
                <div className="border-t-2 border-dashed border-yellow-500 shadow-[0_0_10px_3px_rgba(234,179,8,0.7)] w-[395px] hidden max-sm:block max-sm:text-[8px]
                mt-3 ml-2"></div>

<div className="flex items-start flex-col lg:flex-row md:flex-row lg:items-center md:items-center">
                  <div className="flex flex-row lg:gap-4 max-sm:gap-1 lg:pl-10  mt-4  lg:h-[120px] md:h-[120px] h-[180px] " >
                    <span className="flex gap-4 items-center"><FaCheckSquare className="w-6 h-6 max-sm:hidden sm:block md:block lg:block"/></span>
                    
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
                        <p> <strong className="text-3xl max-sm:text-2xl">4to grado - Física</strong></p>
                        <p className="font-poppins font-extralight text-2xl max-sm:text-xl">Marzo 14, 2025 - 13:00</p>
                        <p className="font-poppins font-extralight">Periodo de validación: <strong>12 Julio 2025</strong>  </p>
                    </span>
                    </div>
                    <div className="flex lg:mt-0 md:mt-0 mt-[-40px] my-3  ">
                      <span className="lg:ml-40 md:ml-36 ml-[260px] font-poppins font-semibold text-2xl max-sm:bg-white/20 max-sm:p-4 max-sm:rounded-xl max-sm:border-2 max-sm:border-white
                      max-sm:shadow-[0_0_15px_rgba(255,255,255,1)]">S/. 599.99</span>
                    </div>


                </div>
                <div className="border-t-2 border-dashed border-yellow-500 shadow-[0_0_10px_3px_rgba(234,179,8,0.7)] w-[395px] hidden max-sm:block max-sm:text-[8px]
                mt-3 ml-2"></div>




<div className="flex items-start flex-col lg:flex-row md:flex-row lg:items-center md:items-center">
                  <div className="flex flex-row lg:gap-4 max-sm:gap-1 lg:pl-10  mt-4  lg:h-[120px] md:h-[120px] h-[180px] " >
                    <span className="flex gap-4 items-center"><FaCheckSquare className="w-6 h-6 max-sm:hidden sm:block md:block lg:block"/></span>
                    
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
                        <p> <strong className="text-3xl max-sm:text-2xl">4to grado - Física</strong></p>
                        <p className="font-poppins font-extralight text-2xl max-sm:text-xl">Marzo 14, 2025 - 13:00</p>
                        <p className="font-poppins font-extralight">Periodo de validación: <strong>12 Julio 2025</strong>  </p>
                    </span>
                    </div>
                    <div className="flex lg:mt-0 md:mt-0 mt-[-40px] my-3  ">
                      <span className="lg:ml-40 md:ml-36 ml-[260px] font-poppins font-semibold text-2xl max-sm:bg-white/20 max-sm:p-4 max-sm:rounded-xl max-sm:border-2 max-sm:border-white
                      max-sm:shadow-[0_0_15px_rgba(255,255,255,1)]">S/. 599.99</span>
                    </div>


                </div>
                <div className="border-t-2 border-dashed border-yellow-500 shadow-[0_0_10px_3px_rgba(234,179,8,0.7)] w-[395px] hidden max-sm:block max-sm:text-[8px]
                mt-3 ml-2"></div>






<div className="flex items-start flex-col lg:flex-row md:flex-row lg:items-center md:items-center">
                  <div className="flex flex-row lg:gap-4 max-sm:gap-1 lg:pl-10  mt-4  lg:h-[120px] md:h-[120px] h-[180px] " >
                    <span className="flex gap-4 items-center"><FaCheckSquare className="w-6 h-6 max-sm:hidden sm:block md:block lg:block"/></span>
                    
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
                        <p> <strong className="text-3xl max-sm:text-2xl">4to grado - Física</strong></p>
                        <p className="font-poppins font-extralight text-2xl max-sm:text-xl">Marzo 14, 2025 - 13:00</p>
                        <p className="font-poppins font-extralight">Periodo de validación: <strong>12 Julio 2025</strong>  </p>
                    </span>
                    </div>
                    <div className="flex lg:mt-0 md:mt-0 mt-[-40px] my-3  ">
                      <span className="lg:ml-40 md:ml-36 ml-[260px] font-poppins font-semibold text-2xl max-sm:bg-white/20 max-sm:p-4 max-sm:rounded-xl max-sm:border-2 max-sm:border-white
                      max-sm:shadow-[0_0_15px_rgba(255,255,255,1)]">S/. 599.99</span>
                    </div>


                </div>
                <div className="border-t-2 border-dashed border-yellow-500 shadow-[0_0_10px_3px_rgba(234,179,8,0.7)] w-[395px] hidden max-sm:block max-sm:text-[8px]
                mt-3 ml-2"></div>




<div className="flex items-start flex-col lg:flex-row md:flex-row lg:items-center md:items-center">
                  <div className="flex flex-row lg:gap-4 max-sm:gap-1 lg:pl-10  mt-4  lg:h-[120px] md:h-[120px] h-[180px] " >
                    <span className="flex gap-4 items-center"><FaCheckSquare className="w-6 h-6 max-sm:hidden sm:block md:block lg:block"/></span>
                    
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
                        <p> <strong className="text-3xl max-sm:text-2xl">4to grado - Física</strong></p>
                        <p className="font-poppins font-extralight text-2xl max-sm:text-xl">Marzo 14, 2025 - 13:00</p>
                        <p className="font-poppins font-extralight">Periodo de validación: <strong>12 Julio 2025</strong>  </p>
                    </span>
                    </div>
                    
                    <div className="flex lg:mt-0 md:mt-0 mt-[-40px] my-3  ">
                      <span className="lg:ml-40 md:ml-36 ml-[260px] font-poppins font-semibold text-2xl max-sm:bg-white/20 max-sm:p-4 max-sm:rounded-xl max-sm:border-2 max-sm:border-white
                      max-sm:shadow-[0_0_15px_rgba(255,255,255,1)]">S/. 599.99</span>
                    </div>

                </div>
   
            
            </div>

                </div>
                





        <div className="w-[34rem] min-[1330px]:h-[39rem]  max-sm:h-[27rem] sm:h-[27rem] border-2 border-cyan-600 pt-8 px-16 rounded-[30px] sm:mx-auto
         bg-white/10 shadow-[0_30px_50px_42px_rgba(8,145,178,0.3)]">
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

           <button className="bg-transparent border-2 border-white p-4 rounded-full w-full  min-[1330px]:mt-14 max-sm:my-3 sm:my-3 drop-shadow-[0_0_30px_rgba(255,255,255,8)] uppercase
           text-2xl font-poppins font-black hover:text-cyan-600 hover:bg-white">Continuar</button>
                   
            
            </div>


            </div>
            
            

            </div>
            <BeneficiosPagos />
        </>
    );
}
