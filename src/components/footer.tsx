
import Image from 'next/image'
import React from 'react'
import { BsEnvelope } from 'react-icons/bs'
import { CiPhone } from 'react-icons/ci'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { MdKeyboardArrowRight, MdOutlinePlace } from 'react-icons/md'
import { PiBookOpenText } from 'react-icons/pi'
import { TbDeviceLandlinePhone } from 'react-icons/tb'

export default function footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#05ABDD] via-[#659A8F] to-[#F78018] text-white py-6">
    <div className="max-w-[100rem] w-full mx-auto px-6 flex flex-wrap gap-32 justify-center">
      
      {/* Información de contacto */}
      <div>
        <h2 className="text-lg font-bold text-white font-poppins" >Ingenia College</h2>
        <div className='flex flex-col gap-2'>
        <p className="mt-2 flex items-center"><CiPhone  className='text-white w-5 h-5' /> +51 908 8410 254</p>
        <p className='flex items-center'><TbDeviceLandlinePhone className='text-white w-5 h-5'/> 01 3083619</p>
        <p className='flex items-center'><BsEnvelope  className='text-white w-5 h-5' />info@ingenia.edu.pe</p>
        <p className='flex items-center'><MdOutlinePlace  className='text-white w-5 h-5'/>Av. Navarrete 762, San Isidro, Lima, Perú</p>
        </div>
      </div>

      {/* Programas */}
      <div className='flex flex-col gap-6'>
        <h2 className="text-lg font-bold text-white font-poppins">Niveles</h2>
        <ul className="mt-2 space-y-1">
          <li className='flex items-center'><MdKeyboardArrowRight className='text-[#F1B23E]'/> Primaria</li>
          <li className='flex items-center'><MdKeyboardArrowRight className='text-[#F1B23E]'/> Secundaria</li>
          <li className='flex items-center'><MdKeyboardArrowRight className='text-[#F1B23E]'/> Pre Universitaria</li>
        </ul>

        <div className=''>
            <h2 className='text-lg font-bold  pb-1 text-white font-poppins'>Empresas</h2>
            <ul className="mt-2 space-y-1">
          <li className='flex items-center'><CiPhone  className='text-white w-5 h-5' /> +51 995 377 509</li>
          <li className='flex items-center'><BsEnvelope  className='text-white w-5 h-5' /> info@ingenia.edu.pe</li>
      
        </ul>


        </div>
        
      </div>

      {/* Corporativo */}
     <div className='flex flex-col gap-6'>
     <div>
        <h2 className="text-lg font-bold  pb-2 text-white font-poppins">SOBRE INGENIA COLLEGE</h2>
        <p className='flex items-center mt-2'><MdKeyboardArrowRight className='text-[#F1B23E]'/> Especialistas en vivo</p>
        <p className='flex items-center'><MdKeyboardArrowRight className='text-[#F1B23E]' /> Especializaciones asíncronas</p>
        <p className='flex items-center'><MdKeyboardArrowRight className='text-[#F1B23E]' /> Cursos asincronos</p>
      </div>

      {/* Redes sociales y más */}
      <div>
        <h2 className="text-lg font-bold  pb-2 text-white font-poppins">Síguenos</h2>
        <ul className="mt-2 space-y-1">
          <li className='flex items-center'><MdKeyboardArrowRight className='text-[#F1B23E]'/> Facebook</li>
          <li className='flex items-center'><MdKeyboardArrowRight className='text-[#F1B23E]'/> TikTok</li>
          <li className='flex items-center'><MdKeyboardArrowRight className='text-[#F1B23E]'/> Instagram</li>
        </ul>
      </div>
     </div>

        <div>
        <h2 className="text-lg font-bold mt-4 text-white font-poppins">Conocer más</h2>
        <p className='flex items-center mt-2'><PiBookOpenText className='text-white w-[50px] h-[41px]' />Libro de  reclamaciones</p>
        
        </div>
    </div>
    <div className="text-center  mt-6  pt-4 font-normal font-poppins">
      <h2 className='text-start pl-60'>
      Copyright 2025 - Empresa: Ingenia College - RUC: 20587487152
      </h2>
      
    </div>
  </footer>
  )
}
