import { ChevronDownIcon } from 'lucide-react';
import React from 'react';
import { FaCheck } from 'react-icons/fa';

function Page() {
  return (
    <> 
   
      <div className="bg-[url('/img/estudio.jpg')] bg-cover bg-center w-full h-screen rounded-b-[100px] relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-[#205375]/80 to-[#78C0E0]/60 rounded-b-[100px] w-full h-screen"></div>
      <div className='flex gap-56 items-center pl-72 py-50'>
        <h1 className='font-poppins font-extrabold text-[50px] z-20 text-white '> AUMENTA EL <br />POTENCIAL <br />
        <span className='text-[30px] font-poppins font-light'> DE LA FUTURA <br />GENERACION</span>
        </h1>
        <div className='flex flex-col gap-16'> 
        <div className='z-20 w-full pr-52 mb-3  '>
        <p className=' text-white font-poppins font-light text-lg'>Lorem ipsum dolor sit, amet consectetur   <br /> adipisicing elit. Aspernatur fugiat ad 
           <span> non  <br /> quia expedita magni similique reprehenderit   <br /> quaerat est? Perspiciatis consequuntur tempora   <br /> natus provident exercitationem dolores excepturi placeat 
            <br /> </span>
            </p>
        </div> 
        <div className='text-white z-30'>
            <h1>Forma parte de nuestro equipo de embajadores</h1>
        </div>
        <div className='flex items-center gap-12 z-40'>
            <button className='text-white bg'>Contactanos</button>
            <button className='text-white'>Whatssap</button>
        </div>

        </div>
       
       
      </div>
      
      
      </div>

      <div className="bg-[url('/img/black.jpg')] bg-cover bg-center w-full h-screen">

      <div className='flex items-start    gap-80'>
        <h1 className=" text-7xl font-bold mt-28 ml-28 p-6 font-poppins text-cyan-700  drop-shadow-[0_10px_8px_rgba(0,0,10,0.5)] ">¿Interesado en <br /> formar parte?</h1>
        <div className='bg-white p-5 mt-10 rounded-2xl drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] mb-5'>
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
            <p><FaCheck className='w-4 h-4 bg-cyan-600 text-white rounded-sm p-1'/></p>
            <p className='text-sm  text-gray-500'>Acepto los Términos y condiciones sobre el uso de</p>
        </div>
        <hr className='mt-6'/>

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
