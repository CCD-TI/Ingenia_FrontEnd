"use client";
import { useState } from 'react';
import Image from "next/image";
import { FaCheckCircle, FaRegCheckCircle } from 'react-icons/fa';
import { MdKeyboardArrowLeft } from 'react-icons/md';



export default function Tarjeta (){
    const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
    type TarjetaProps = {
        onRegresar: () => void;
      };
    
 
    return (
        <>
        <div>
      {!mostrarConfirmacion ? (
        <>


         <div className='bg-[url("/img/vision.png")] relative bg-center bg-no-repeat bg-cover w-full h-full py-20'>

         <div className="w-full h-35 bg-white/35 flex gap-3 py-5">
             <button
                 onClick={() => setMostrarConfirmacion(false)}
              className=" ml-8 flex gap-2 items-center text-white"><MdKeyboardArrowLeft className="w-5 h-5 text-white" />Regresar</button>  
             <span className=" ml-8 flex flex-col gap-2 items-center text-white font-poppins font-black"><FaCheckCircle className="text-cyan-400 text-[65px] "/>Información de pago</span> 
             <span className=" ml-8 flex  items-center text-white h-2 w-26 rounded-full bg-cyan-400 justify-center my-auto"></span> 
             <span className=" ml-8 flex flex-col gap-2 items-center text-white font-poppins font-black"><FaRegCheckCircle className="text-cyan-400 text-[65px] "/>Datos</span> 
             <span className=" ml-8 flex  items-center text-white h-2 w-26 rounded-full bg-cyan-400/35 justify-center my-auto"></span> 
             <span className=" ml-8 flex flex-col gap-2 items-center text-white font-poppins font-black"><FaRegCheckCircle className="text-cyan-400 text-[65px]"/>Métodos de pago</span> 
                
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
                            <span className="font-poppins font-semibold text-xl pr-6">S/. 0</span>

                        </div>

                        <div className="w-full h-[3px] bg-white drop-shadow-[0_0_10px_rgba(255,255,255,2)] mt-10 "></div>

<div className="flex justify-between w-full max-sm:gap-[80px] mt-10">
    <span className="font-poppins font-extralight drop-shadow-[0_0_10px_rgba(255,255,255,2)] pl-6"> Total</span>
    <span className="font-poppins font-semibold text-xl pr-6">S/. 599.99</span>

</div>



      

       
          
          <button 
           className="bg-transparent border-2 border-white p-4 rounded-full w-full  min-[1300px]:mt-14 max-sm:mt-5  drop-shadow-[0_0_30px_rgba(255,255,255,8)] uppercase
           text-2xl font-poppins font-black hover:text-cyan-600 hover:bg-white sm:mt-400"
          onClick={() => setMostrarConfirmacion(true)}>Continuar</button>
          </div>
            </div>
            </div>


        </>
      ) : (
         <div className="bg-[url('/img/vision.png')] relative bg-center bg-no-repeat bg-cover w-full h-full pt-30 pb-20">
            <button 
            onClick={() => setMostrarConfirmacion(false)}
            className=" ml-8 flex gap-2 items-center text-white"><MdKeyboardArrowLeft className="w-5 h-5 text-white" />Regresar</button>  
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
      )}
    </div>
        </>
    )
}