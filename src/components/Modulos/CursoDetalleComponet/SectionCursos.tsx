import CursosCarrusel from '@/components/Carrusels/CursosCarrusel'
import React from 'react'

const SectionCursos = () => {
  return (
    <div className='py-10 mx-auto max-w-[100rem] '>
        <h1 className='font-bold text-5xl text-center text-cyan-400'>
            Continua Potenciando <br />
            <span className='text-5xl  font-extrabold text-cyan-400'> TU HABILIDAD</span>
        </h1>

        <CursosCarrusel />
    </div>
  )
}

export default SectionCursos
