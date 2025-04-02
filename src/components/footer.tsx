
import Image from 'next/image'
import React from 'react'
import { BsEnvelope } from 'react-icons/bs'
import { CiPhone } from 'react-icons/ci'
import { FaEnvelope, FaFacebookF, FaInstagram, FaPhoneAlt, FaYoutube } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa6'
import { IoLocationSharp } from 'react-icons/io5'
import { MdKeyboardArrowRight, MdOutlinePlace } from 'react-icons/md'
import { PiBookOpenText } from 'react-icons/pi'
import { TbDeviceLandlinePhone } from 'react-icons/tb'

export default function footer() {
  return (
    <footer className="w-full bg-gradient-to-t from-[#179EC1] to-black text-white py-14 px-4 sm:pl-12 md:pl-24 lg:pl-52">
  <div className="max-w-[100rem] w-full mx-auto px-5 flex flex-col md:flex-row gap-10 md:gap-20 lg:gap-60 items-start">
    {/* Información de contacto */}
    <div className='w-full md:w-auto'>
      <h2 className='text-lg font-bold pb-1 text-white font-poppins'>Ingenia College</h2>
      <ul className="mt-2 space-y-1">
        <li className="mt-2 flex items-center"><CiPhone className='text-white w-5 h-5' /> +51 908 8410 254</li>
        <li className='flex items-center'><TbDeviceLandlinePhone className='text-white w-5 h-5' /> 01 3083619</li>
        <li className='flex items-center'><MdOutlinePlace className='text-white w-5 h-5' />Av. Navarrete 762, San Isidro,</li>
        <li>Lima, Perú</li>
      </ul>

      {/* ICONOS */}
      <div className="flex items-center gap-2 text-white mt-4">
        <p className="text-2xl font-bold font-poppins">SÍGUENOS</p>
        <FaInstagram className="text-2xl hover:translate-y-[-5px] transition-transform duration-300" />
        <FaFacebookF className="text-2xl hover:translate-y-[-5px] transition-transform duration-300" />
        <FaTiktok className="text-2xl hover:translate-y-[-5px] transition-transform duration-300" />
        <FaYoutube className="text-2xl hover:translate-y-[-5px] transition-transform duration-300" />
      </div>
    </div>

    {/* Programas */}
    <div className='w-full md:w-auto'>
      <div className='mb-4'>
        <h2 className='text-lg font-bold pb-1 text-white font-poppins uppercase'>Niveles</h2>
        <ul className="mt-2 space-y-1">
          <li className='flex items-center'><MdKeyboardArrowRight className='text-[#F1B23E] h-8 w-8' /> Primaria</li>
          <li className='flex items-center'><MdKeyboardArrowRight className='text-[#F1B23E] h-8 w-8' /> Secundaria</li>
          <li className='flex items-center'><MdKeyboardArrowRight className='text-[#F1B23E] h-8 w-8' /> Pre Universitaria</li>
        </ul>
      </div>

      <div className=''>
        <h2 className='text-lg font-bold pb-1 text-white font-poppins uppercase'>Empresas</h2>
        <ul className="mt-2 space-y-1">
          <li className='flex items-center'><CiPhone className='text-white w-5 h-5' /> +51 995 377 509</li>
          <li className='flex items-center'><BsEnvelope className='text-white w-5 h-5' /> info@ingenia.edu.pe</li>
        </ul>
      </div>
    </div>
    
    {/* Corporativo */}
    <div className='w-full md:w-auto'>
      <div className='mb-4'>
        <h2 className="text-lg font-bold pb-2 text-white font-poppins">SOBRE INGENIA COLLEGE</h2>
        <ul>
          <li className='flex items-center mt-2'><MdKeyboardArrowRight className='text-[#F1B23E] h-8 w-8' /> Especialistas en vivo</li>
          <li className='flex items-center'><MdKeyboardArrowRight className='text-[#F1B23E] h-8 w-8' /> Especializaciones asíncronas</li>
          <li className='flex items-center'><MdKeyboardArrowRight className='text-[#F1B23E] h-8 w-8' /> Cursos asincronos</li>
        </ul>
      </div>

      <div className=''>
        <h2 className='text-lg font-bold pb-1 text-white font-poppins uppercase'>¿POR QUÉ ELEGIRNOS?</h2>
        <ul className="mt-2 space-y-1">
          <li className='flex items-center'><MdKeyboardArrowRight className='text-[#F1B23E] h-8 w-8'/> Conoce tus beneficios</li>
        </ul>
      </div>
    </div>

    <div className='w-full md:w-auto'>
      <h2 className="text-lg font-bold pb-2 text-white font-poppins uppercase">Conocer más</h2>
      <p className='flex items-center mt-2'><PiBookOpenText className='text-white w-[50px] h-[41px]' />Libro de reclamaciones</p>
    </div>
  </div>
  
  <div className="text-center mt-10 md:mt-20 pt-4 font-normal font-poppins">
    <h2 className='text-center md:text-start px-4 md:pl-60'>
      Copyright 2025 - Empresa: Ingenia College - RUC: 20587487152
    </h2>
  </div>
</footer>
   
  )
}
