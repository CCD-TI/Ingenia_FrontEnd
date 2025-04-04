import { ChevronDownIcon } from 'lucide-react';
import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { BsEnvelope } from "react-icons/bs";
import { MdKeyboardDoubleArrowDown, MdOutlineWhatsapp } from 'react-icons/md';
import Image from "next/image";

function Page() {
    return (
        <>
            <div className="bg-[url('/img/estudio.jpg')] bg-cover bg-center w-full  flex items-center justify-center  relative h-[850px]  max-xl:h-full   ">


                <div className='  flex max-xl:flex-col  lg:gap-20  px-6  max-sm:px-3 lg:mt-44  sm:mt-36 max-sm:flex-col max-sm:gap-20 py-10  w-f'>

                    <div className='flex flex-col gap-1 text-white text-9xl font-poppins font-black pl-16 lg:pl-36  max-sm:mt-24 leading-[0.6] lg:leading-[0.8]
                            max-lg:text-7xl  md:text-8xl max-sm:text-6xl sm:text-7xl  lg:text-8xl max-sm:justify-center sm:justify-center 
                            '>

                        <h1 className='drop-shadow-[0_0_15px_rgba(255,255,255,1)]'>AUMENTA EL</h1>

                        <div className='drop-shadow-[0_0_15px_rgba(255,255,255,1)]'>POTENCIAL</div>

                        <div className='flex flex-col gap-1 text-yellowIngenia text-8xl font-black max-lg:text-6xl max-md:text-5xl max-sm:text-5xl sm:text-7xl md:text-7xl'>
                            DE LA FUTURA
                            <div className='leading-[0.9]'>
                                GENERACIÓN
                            </div>
                        </div>

                        <button className="text-[30px] font-semibold flex  gap-1 mt-28 max-lg:text-2xl max-md:text-xl max-sm:text-xl 
                         max-lg:mt-20 max-md:mt-16 max-sm:mt-12  sm:mb-12 
                         transition-transform duration-300 hover:-translate-y-3">
                            <a href="#interesado-formar-parte" className='flex gap-1 items-center' >
                                Conócenos más<MdKeyboardDoubleArrowDown className='w-14 h-14 max-lg:w-12 max-lg:h-12 max-md:w-10 max-md:h-10 max-sm:w-8 max-sm:h-8' /></a>

                        </button>

                    </div>


                        <div className=''>

                    <div className=' bg-[#918585a1] bg-opacity-60 rounded-[50px] w-[770px] h-[400px] backdrop-blur-sm  max-sm:rounded-3xl 
                    max-sm:py-5 shadow-[0_0_55px_#06b6d4] max-sm:mt-12 max-sm:w-[100px]'>

                       
                    </div>
                    <div className='  flex flex-col gap-7 max-[400px]:flex-col max-[400px]:gap-4'>
                            <h1 className='text-white text-3xl text-center'>¡Forma parte de nuestros embajadores!</h1>
                            <div className='flex  gap-16 justify-center max-sm:flex-col max-sm:gap-4'>

                                <button className="text-2xl max-sm:text-xl px-6 py-3 bg-white rounded-xl font-poppins font-bold flex items-center justify-center gap-1
                          text-black hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] transition-transform duration-300 hover:-translate-y-1">
                                    <BsEnvelope className="text-black w-10 h-10 max-sm:w-8 max-sm:h-8" />
                                    Contáctanos
                                </button>


                                <button className="text-2xl max-sm:text-xl px-6 py-3 bg-white rounded-xl font-poppins font-bold flex items-center justify-center gap-1
                          text-black hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] transition-transform duration-300 hover:-translate-y-1">
                                    <MdOutlineWhatsapp className="text-black w-10 h-10 max-sm:w-8 max-sm:h-8" />
                                    Whatsapp
                                </button>
                            </div>

                    </div>
                        </div>
                </div>
            </div>





            <div id="interesado-formar-parte" className="bg-[url('/img/fondo_embajadores.jpg')] h-screen">

                <div className='flex flex-wrap items-start gap-80 [1050px]:gap-2 max-[900px]:gap-2 sm:gap-3  max-w-[100rem]  mx-auto  w-[80%] h-full '>

                    <h1 className=" text-7xl font-bold mt-28 md:mb-6 mr-28 max-sm:mx-4   lg:mt-52 pb-6 font-poppins text-white md:ml-14
                     drop-shadow-[0_10px_8px_rgba(0,0,10,0.5)] 
                    max-sm:text-4xl ">¿Interesado en  <span className="max-sm:hidden max-md:hidden max-lg:hidden  "><br /></span> formar parte?</h1>
                    <div className='bg-white p-6 rounded-2xl  mb-8 lg:mt-28  drop-shadow-[0_0_30px_rgba(255,255,255,2)]  md:ml-14'>
                        <h1 className="text-gray-800 text-2xl font-semibold">Completa tus datos</h1>
                        <h2 className="text-gray-600 text-sm pt-4 tracking-wide">Rellena el formulario con los siguientes datos</h2>

                        <div className='flex items-center gap-8 mt-6'>
                            <p className='border border-gray-300 py-2 pl-4 w-full text-gray-600 font-light rounded-lg hover:border-cyan-500 focus:ring-2 focus:ring-cyan-500'>Nombre</p>
                            <p className='border border-gray-300 py-2 pl-4 w-full text-gray-600 font-light rounded-lg hover:border-cyan-500 focus:ring-2 focus:ring-cyan-500'>Apellido</p>
                        </div>

                        <div className='flex items-center gap-8 mt-6'>
                            <p className='border border-gray-300 py-2 pl-4 w-full text-gray-600 font-light rounded-lg hover:border-cyan-500 focus:ring-2 focus:ring-cyan-500'>Email</p>
                            <p className='border border-gray-300 py-2 pl-4 w-full flex items-center gap-2 text-gray-600 font-light rounded-lg hover:border-cyan-500 focus:ring-2 focus:ring-cyan-500'>
                                Puesto de Trabajo <ChevronDownIcon className="w-6 h-6 text-gray-500" />
                            </p>
                        </div>

                        <div className='mt-6'>
                            <p className='border border-gray-300 py-2 pl-4 w-full text-gray-600 font-light rounded-lg hover:border-cyan-500 focus:ring-2 focus:ring-cyan-500'>Nombre de empresa</p>
                        </div>

                        <div className='mt-6'>
                            <p className='border border-gray-300 py-2 pl-4 w-fit flex items-center gap-2 text-gray-600 font-light rounded-lg hover:border-cyan-500 focus:ring-2 focus:ring-cyan-500'>
                                Cantidad de Estudiantes <ChevronDownIcon className="w-6 h-6 text-gray-500" />
                            </p>
                        </div>

                        <div className='flex items-center gap-8 mt-6'>
                            <p className='border border-gray-300 py-2 pl-4 w-full text-gray-600 font-light flex items-center gap-2 rounded-lg hover:border-cyan-500 focus:ring-2 focus:ring-cyan-500'>
                                Elige tu país <ChevronDownIcon className="w-6 h-6 text-gray-500" />
                            </p>
                            <p className='text-sm border border-gray-300 py-2 pl-4 w-full text-gray-600 font-light rounded-lg hover:border-cyan-500 focus:ring-2 focus:ring-cyan-500'>
                                Número de teléfono
                            </p>
                        </div>

                        <div className='mt-6 text-center'>
                            <button className='py-2 bg-cyan-600 rounded-md w-full text-white font-poppins font-semibold tracking-wider'>Enviar Ahora</button>
                        </div>

                        <div className='flex gap-2 mt-6'>
                            <p><FaCheck className='w-4 h-4 bg-cyan-600 text-white rounded-sm p-1' /></p>
                            <p className='text-sm text-gray-500'>Acepto los Términos y condiciones sobre el uso</p>
                        </div>

                        <hr className='mt-6' />

                        <div className='mt-8'>
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
