"use client"
import React from 'react'
import CarruselHome from '../Carrusels/CarruselHome'

const Comentarios = () => {
  return (
    <div className='bg-gradient-to-r from-[#05ABDD] to-[#F9B233]  py-16 px-10 max-sm:px-2'>
        <div className='max-w-[100rem] mx-auto flex flex-col gap-10  '>
        <p className="text-center text-5xl max-lg:text-3xl font-extrabold text-white drop-shadow-[0_0_15px_rgba(255,255,255,1)]">
  ¿QUIÉNES SON NUESTROS ESTUDIANTES?
</p>

            <CarruselHome/>
        </div>
    </div>
  )
}

export default Comentarios
