
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
<footer className="w-full bg-gradient-to-t from-[#179EC1] to-black text-white py-14 px-4 sm:pl-12 md:pl-24 lg:pl-52 max-sm:pl-12">
  <div className="max-w-[100rem] w-full mx-auto px-5 flex flex-col">
    {/* Primera fila - Siempre visible */}
    <div className="flex flex-col lg:flex-row gap-10 md:gap-20 lg:gap-60 items-start">
      {/* Información de contacto */}
      <div className='w-full md:w-auto'>
        <h2 className='text-lg font-bold pb-1 text-white font-poppins'>Ingenia College</h2>
        <ul className="mt-2 space-y-1">
          <li className="mt-2 flex items-center"><CiPhone className='text-white w-8 h-8 mr-2' /> +51 908 8410 254</li>
          <li className='flex items-center'><TbDeviceLandlinePhone className='text-white w-8 h-8 mr-2' /> 01 3083619</li>
          <li className='flex items-center'><MdOutlinePlace className='text-white w-10 h-10 mr-2' /> Av. Navarrete 762, San Isidro, Lima, Perú</li>
        </ul>

        {/* ICONOS - Corregido el error de <p> anidado */}
        <div className="flex items-center gap-2 text-white mt-4">
          <span className="text-2xl font-bold font-poppins">SÍGUENOS</span>
          <FaInstagram className="text-2xl hover:translate-y-[-5px] transition-transform duration-300" />
          <FaFacebookF className="text-2xl hover:translate-y-[-5px] transition-transform duration-300" />
          <FaTiktok className="text-2xl hover:translate-y-[-5px] transition-transform duration-300" />
          <FaYoutube className="text-2xl hover:translate-y-[-5px] transition-transform duration-300" />
        </div>
      </div>

      {/* Niveles y Empresas */}
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
            <li className='flex items-center'><CiPhone className='text-white w-8 h-8 mr-2' /> +51 995 377 509</li>
            <li className='flex items-center'><BsEnvelope className='text-white w-8 h-8 mr-2' /> info@ingenia.edu.pe</li>
          </ul>
        </div>
      </div>

      {/* Secciones que se mueven - Visibles en línea solo en lg+ */}
      <div className='hidden lg:flex flex-col w-full md:w-auto'>
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

      <div className='hidden lg:block w-full md:w-auto'>
        <h2 className="text-lg font-bold pb-2 text-white font-poppins uppercase">Conocer más</h2>
        <div className='flex items-center mt-2'><PiBookOpenText className='text-white w-[50px] h-[41px] mr-2' />Libro de reclamaciones</div>
      </div>
    </div>

    {/* Segunda fila - Solo visible en pantallas menores a lg (1000px) */}
    <div className="lg:hidden flex flex-col md:flex-row gap-10 md:gap-20 items-start mt-10">
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
        <div className='flex items-center mt-2'><PiBookOpenText className='text-white w-[50px] h-[41px] mr-2' />Libro de reclamaciones</div>
      </div>
    </div>
  </div>
  
  <div className="mt-10 md:mt-20 pt-4 font-normal font-poppins">
    <h2 className='px-4 md:pl-60'>
      Copyright 2025 - Empresa: Ingenia College - RUC: 20587487152
    </h2>
  </div>
</footer>
   
  )
}
