import CursosCarrusel from '@/components/Carrusels/CursosCarrusel'
import React from 'react'

const SectionCursos = () => {
  return (
    <div className='py-10 px-1 mx-auto w-full bg-gradient-to-t from-[#179EC1] to-black'>
        <h1 className='font-bold text-5xl text-center  text-white '>
            Continua Potenciando <br />
            <span className='text-5xl  font-extrabold text-white mt-3 inline-block drop-shadow-[0_0_10px_rgba(255,255,255,2)]'> TU HABILIDAD</span>
        </h1>

        <CursosCarrusel />
    </div>
  )
}

export default SectionCursos
