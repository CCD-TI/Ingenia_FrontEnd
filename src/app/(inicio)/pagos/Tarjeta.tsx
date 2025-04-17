"use client";
import Image from "next/image";
export default function Tarjeta (){
    return (
        <>
        <div className="bg-[url('/img/vision.png')] relative bg-center bg-no-repeat bg-cover w-full h-full py-20">
        <div className="w-full h-40 bg-white/35">
            <h1 className="text-6xl">hello</h1>
        </div>

        <div className="flex gap-20 px-10 pt-20 justify-center">
            <div className=" w-[450px] h-[700px] bg-white rounded-3xl">
                
            </div>
            <div className="p-4 w-[550px] h-[650px] bg-white/10 rounded-3xl border-2 border-cyan-600 shadow-[0_30px_50px_32px_rgba(8,145,178,0.3)] text-white mt-10">
             <div className="flex flex-row   mt-7  items-center ml-7  " >
                              
                                
                                <div className="h-[120px] w-[120px] ">
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
                                <div className=" mt-10 pl-6">  
                                    <h1 className="font-poppins font-semibold text-3xl drop-shadow-[0_0_10px_rgba(255,255,255,2)]">Subtotal</h1> 
                                </div>

                                <div className="flex justify-between w-full mt-10 pl-6">
            <span className="font-poppins font-extralight ">Física</span>
            <span className="font-poppins font-semibold text-xl pr-6">S/. 599.99</span>

           </div>

           <div className="flex justify-between w-full max-sm:gap-[90px] mt-10 pl-6">
            <span className="font-poppins font-extralight">Descuento</span>
            <span  className="font-poppins font-semibold text-xl pr-6">S/. 0</span>
              
           </div>
           <div className="w-full h-[3px] bg-white drop-shadow-[0_0_10px_rgba(255,255,255,2)] mt-10 "></div>

           <div className="flex justify-between w-full max-sm:gap-[80px] mt-10">
            <span className="font-poppins font-extralight drop-shadow-[0_0_10px_rgba(255,255,255,2)] pl-6"> Total</span>
            <span  className="font-poppins font-semibold text-xl pr-6">S/. 599.99</span>
              
           </div>
           <button className="bg-transparent border-2 border-white p-4 rounded-full w-full  min-[1300px]:mt-14 max-sm:mt-5  drop-shadow-[0_0_30px_rgba(255,255,255,8)] uppercase
           text-2xl font-poppins font-black hover:text-cyan-600 hover:bg-white sm:mt-400">Continuar</button>
                   
                
                </div>

        </div>
        
        
        
        </div>
        
        </>
    )
}