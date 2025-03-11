
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
    <footer className="w-full bg-[#00A9E0] text-white py-6">
      <div className="max-w-[100rem] w-full  px-5 flex flex-wrap gap-28 justify-center max-sm:gap-10 max-sm:mx-auto">

        {/* Información de contacto */}
        <div className=''>
          <h2 className='text-lg font-bold  pb-1 text-white font-poppins '>Ingenia College</h2>
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
        <div className='flex flex-col gap-10'>
          <div className=''>
            <h2 className='text-lg font-bold  pb-1 text-white font-poppins uppercase'>Niveles</h2>
            <ul className="mt-2 space-y-1">
              <li className='flex items-center'><MdKeyboardArrowRight className='text-[#F1B23E]' /> Primaria</li>
              <li className='flex items-center'><MdKeyboardArrowRight className='text-[#F1B23E]' /> Secundaria</li>
              <li className='flex items-center'><MdKeyboardArrowRight className='text-[#F1B23E]' /> Pre Universitaria</li>

            </ul>


          </div>


          <div className=''>
            <h2 className='text-lg font-bold  pb-1 text-white font-poppins uppercase'>Empresas</h2>
            <ul className="mt-2 space-y-1">
              <li className='flex items-center'><CiPhone className='text-white w-5 h-5' /> +51 995 377 509</li>
              <li className='flex items-center'><BsEnvelope className='text-white w-5 h-5' /> info@ingenia.edu.pe</li>

            </ul>

          </div>
        </div>




        {/* Corporativo */}

        <div>
          <h2 className="text-lg font-bold  pb-2 text-white font-poppins">SOBRE INGENIA COLLEGE</h2>
          <ul>
            <li className='flex items-center mt-2'><MdKeyboardArrowRight className='text-[#F1B23E]' /> Especialistas en vivo</li>
            <li className='flex items-center'><MdKeyboardArrowRight className='text-[#F1B23E]' /> Especializaciones asíncronas</li>
            <li className='flex items-center'><MdKeyboardArrowRight className='text-[#F1B23E]' /> Cursos asincronos</li>

          </ul>

        </div>


        <div>
          <h2 className="text-lg font-bold  pb-2 text-white font-poppins uppercase">Conocer más</h2>
          <p className='flex items-center mt-2'><PiBookOpenText className='text-white w-[50px] h-[41px]' />Libro de  reclamaciones</p>

        </div>
      </div>
      <div className="text-center  mt-20  pt-4 font-normal font-poppins ">
        <h2 className='text-start pl-60 max-sm:pl-4'>
          Copyright 2025 - Empresa: Ingenia College - RUC: 20587487152
        </h2>

      </div>
    </footer>
  )
}
