"use client"
import React from 'react'
import CarruselHome from '../Carrusels/CarruselHome'

const Comentarios = () => {
  return (
    <div className='bg-black py-16 px-10 max-sm:px-2'>
       <div className="relative flex items-center justify-center w-full max-w-[1300px] px-4 mx-auto ">
        {/* Línea */}
        <div className="w-full h-[2px] bg-[#ffffff] "></div>

        {/* Círculos en los extremos */}
        <div className="absolute left-0 w-3 h-3 bg-[#ffffff] rounded-full"></div>
        <div className="absolute right-0 w-3 h-3 bg-[#ffffff] rounded-full"></div>
      </div>

        <div className='max-w-[100rem] mx-auto flex flex-col gap-10 mt-24 '>
        <p className="text-center text-7xl max-lg:text-3xl font-extrabold text-white drop-shadow-[0_0_15px_rgba(255,255,255,1)]">
  ¿QUIÉNES SON NUESTROS ESTUDIANTES?
</p>

            <CarruselHome/>
        </div>
    </div>
  )
}

export default Comentarios
