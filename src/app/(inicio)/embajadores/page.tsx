import { ChevronDownIcon } from 'lucide-react';
import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { BsEnvelope } from "react-icons/bs";
import { MdOutlineWhatsapp } from 'react-icons/md';
import Image from "next/image";

function Page() {
    return (
        <>

            <div className="bg-[url('/img/estudio.jpg')] bg-cover bg-center w-full h-[1000px]  relative">           
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 w-full h-[1000px] "></div>


                <div className='  flex gap-96  z-50 absolute inset-0 px-6 max-sm:mt-40 max-sm:px-3 mt-40 max-sm:flex-col max-sm:gap-20 '>
                    <div className=' flex flex-col gap-1 text-white text-9xl font-poppins font-black max-sm:text-4xl pl-36 leading-[0.6] '>
                        <h1 className='drop-shadow-[0_0_15px_rgba(255,255,255,1)] '>AUMENTA EL</h1> 
                         <div className=' text-white text-9xl font-poppins font-black max-sm:text-4xl drop-shadow-[0_0_15px_rgba(255,255,255,1)]'>POTENCIAL</div> 
                    <div className='flex flex-col gap-1 text-yellowIngenia text-8xl font-poppins font-black max-sm:text-4xl  '>DE LA FUTURA 
                    <div className='text-yellowIngenia text-8xl font-poppins font-black   max-sm:text-4xl leading-[0.9]'>GENERACIÓN

                   
                    </div>
                       
                    </div>
                    
                    </div>




                    <div className=' bg-[#a3a3a3] bg-opacity-60 rounded-[50px] w-[800px] h-[450px] backdrop-blur-sm max-sm:w-96'>

                  
                  
                    <div className='  flex flex-col gap-4 max-[400px]:flex-col max-[400px]:gap-4 mt-[490px]'>
                        <h1 className='text-white text-4xl text-center'>¡Forma parte de nuestros embajadores!</h1>
<div className='flex  gap-48 justify-center max-sm:flex-col max-sm:gap-10'>


                        <button className=' text-2xl px-6 py-4 max-sm:mr-4  bg-white rounded-xl  font-poppins font-semibold flex items-center gap-1
                         text-gray-600'>
                            <BsEnvelope className='text-gray-600 w-10 h-10'/>Contáctanos</button>
                        <button className='text-gray-600 px-6 py-4 bg-white rounded-xl   font-poppins font-semibold flex items-center text-2xl 
                         gap-1'><MdOutlineWhatsapp className='text-gray-600 w-10 h-10'/> Whatsapp</button>
           </div>

                       
          

                    </div>
                       

                    </div>
                    </div>




                 
                </div>

               
               
            
            
      











            <div className="bg-black ">

                <div className='flex items-start gap-80  max-[900px]:flex-col max-[900px]:gap-2 sm:gap-3 lg:gap-75 max-w-[100rem] mx-auto w-[85%] '>
                    <h1 className=" text-7xl font-bold m-28 max-sm:mx-4 max-sm:mt-12 sm:mt-12 max-lg:m-4 md:m-20  max-md:m-20 lg:m-20  lg:mt-52 p-6 font-poppins text-cyan-700 
                     drop-shadow-[0_10px_8px_rgba(0,0,10,0.5)] 
                    max-sm:text-5xl ">¿Interesado en  <span className="max-sm:hidden max-md:hidden max-lg:hidden  "><br /></span> formar parte?</h1>
                    <div className='bg-white p-5  max-sm:mt-5 rounded-2xl drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] mb-5 lg:mt-28  '>
                        <h1 className="text-gray-600 text-xl font-bold">Completa tus datos</h1>
                        <h2 className="text-gray-600 text-sm pt-6 [word-spacing:0.1em]">Rellena el formulario con los siguientes datos</h2>
                        <div className='flex items-center gap-10 mt-5'>
                            <p className='border-1 border-gray-400 py-2 pl-4 w-full text-gray-500 font-light rounded-xl'>Nombre</p>
                            <p className='border-1 border-gray-400 py-2 pl-4 w-full  text-gray-500 font-light rounded-xl'>Apellido</p>

                        </div>
                        <div className='flex items-center gap-10 mt-5'>
                            <p className='border-1 border-gray-400 py-2 pl-4 w-full  text-gray-500 font-light rounded-xl'>Email</p>
                            <p className='border-1 border-gray-400 py-2 pl-4 w-full flex items-center gap-1 text-gray-500 font-light rounded-xl'>Puesto de Trabajo  <ChevronDownIcon className="w-6 h-6 text-gray-500" /></p>
                        </div>
                        <div className=''>
                            <p className='border-1 border-gray-400 py-2 pl-4 w-full   text-gray-400 font-light mt-5 rounded-xl' >Nombre de empresa</p>

                        </div>
                        <div className=''>
                            <p className='border-1 border-gray-400 py-2 px-4 w-fit flex items-center gap-1 text-gray-500 font-light mt-5 rounded-xl' >Cantidad de Estudiantes<ChevronDownIcon className="w-6 h-6 text-gray-500" /></p>

                        </div>
                        <div className='flex items-center gap-10 mt-5'>
                            <p className='border-1 border-gray-400 py-2 pl-4 w-full  text-gray-400 font-light flex items-center gap-1 rounded-xl'>Elige tu país <ChevronDownIcon className="w-6 h-6 text-gray-500" /></p>
                            <p className=' text-sm border-1 border-gray-400 py-2 pl-4 w-full  text-gray-500 font-light rounded-xl'>Número de teléfono</p>
                        </div>
                        <div className=' mt-5 text-center '>
                            <button className='p-3 bg-cyan-600 rounded-md w-full text-white font-poppins font-semibold [word-spacing:0.2em]'> Enviar Ahora</button>
                        </div>
                        <div className='flex gap-2 mt-7'>
                            <p><FaCheck className='w-4 h-4 bg-cyan-600 text-white rounded-sm p-1' /></p>
                            <p className='text-sm  text-gray-500'>Acepto los Términos y condiciones sobre el uso</p>
                        </div>
                        <hr className='mt-6' />

                        <div className='mt-8 '>
                            <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit sit amet.</p>
                            <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit sit amet.</p>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Page;
