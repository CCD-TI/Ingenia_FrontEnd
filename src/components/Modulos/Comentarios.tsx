"use client"
import React from 'react'
import CarruselHome from '../Carrusels/CarruselHome'

const Comentarios = () => {
  return (
    <div className='bg-violet-500  py-16 px-10'>
        <div className='max-w-[100rem] mx-auto flex flex-col gap-10  '>
            <h1 className='text-center text-5xl font-extrabold text-white'>¿QUIENES SON NUESTROS<br />ESTUDIANTES?</h1>
            <CarruselHome/>
        </div>
    </div>
  )
}

export default Comentarios
