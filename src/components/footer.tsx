
import Image from 'next/image'
import React from 'react'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { PiBookOpenText } from 'react-icons/pi'

export default function footer() {
  return (
    <footer className="w-full bg-purple-700 text-white py-6">
    <div className="max-w-[100rem] w-full mx-auto px-6 flex flex-wrap gap-32 justify-center">
      
      {/* Información de contacto */}
      <div>
        <h2 className="text-lg font-bold text-[#F1B23E]" >Ingenia College</h2>
        <div className='flex flex-col gap-2'>
        <li className="mt-2 flex items-center"><FaPhoneAlt className='text-[#F1B23E]'/> +51 908 8410 254</li>
        <p>☎️ 01 3083619</p>
        <p className='flex items-center'><FaEnvelope className='text-[#F1B23E]'/>info@ingeniacollege.edu.pe</p>
        <p className='flex items-center'><IoLocationSharp className='text-[#F1B23E]'/>Av. Navarrete 762, San Isidro, Lima, Perú</p>
        </div>
      </div>

      {/* Programas */}
      <div className='flex flex-col gap-6'>
        <h2 className="text-lg font-bold text-[#F1B23E]">Programas</h2>
        <ul className="mt-2 space-y-1">
          <li className='flex items-center'><MdKeyboardArrowRight className='text-[#F1B23E]'/> Especializaciones en vivo</li>
          <li className='flex items-center'><MdKeyboardArrowRight className='text-[#F1B23E]'/> Especializaciones asincrónicas</li>
          <li className='flex items-center'><MdKeyboardArrowRight className='text-[#F1B23E]'/> Cursos asincrónicos</li>
        </ul>

        <div className=''>
            <h2 className='text-lg font-bold  pb-1 text-[#F1B23E]'>Sobre CCD</h2>
            <ul className="mt-2 space-y-1">
          <li className='flex items-center'><MdKeyboardArrowRight className='text-[#F1B23E]'  /> Nosotros</li>
          <li className='flex items-center'><MdKeyboardArrowRight className='text-[#F1B23E]' /> Terminos y  condiciones</li>
          <li className='flex items-center'><MdKeyboardArrowRight className='text-[#F1B23E]' /> cursos asincronos</li>
        </ul>


        </div>
        
      </div>

      {/* Corporativo */}
     <div className='flex flex-col gap-6'>
     <div>
        <h2 className="text-lg font-bold  pb-2 text-[#F1B23E]">Corporativo</h2>
        <p className='flex items-center mt-2'><MdKeyboardArrowRight className='text-[#F1B23E]'/> +51 995 377 509</p>
        <p className='flex items-center'><MdKeyboardArrowRight className='text-[#F1B23E]' /> corporativo@ccdcapacitación.com</p>
      </div>

      {/* Redes sociales y más */}
      <div>
        <h2 className="text-lg font-bold  pb-2 text-[#F1B23E]">Síguenos</h2>
        <ul className="mt-2 space-y-1">
          <li className='flex items-center'><MdKeyboardArrowRight className='text-[#F1B23E]'/> Facebook</li>
          <li className='flex items-center'><MdKeyboardArrowRight className='text-[#F1B23E]'/> TikTok</li>
          <li className='flex items-center'><MdKeyboardArrowRight className='text-[#F1B23E]'/> Instagram</li>
        </ul>
      </div>
     </div>

        <div>
        <h2 className="text-lg font-bold mt-4 text-[#F1B23E]">Más</h2>
        <p className='flex items-center mt-2'><PiBookOpenText className='text-[#F1B23E]' />Libro de reclamaciones</p>
        <div className="mt-2">
          <p>¡Escanea aquí!</p>
          <Image width={800} height={800} src="" alt="QR Code" className="w-24 mt-2"/>
        </div>
        </div>
    </div>
    <div className="text-center  mt-6  pt-4 font-semibold">
      Copyright 2025 - Empresa: Ingenia College - RUC: 20587487152
    </div>
  </footer>
  )
}
