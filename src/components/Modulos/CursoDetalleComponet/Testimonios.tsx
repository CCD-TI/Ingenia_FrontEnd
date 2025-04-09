import CarruselComentarios from '@/components/Carrusels/CarruselComentarios'
import React from 'react'

const Comentarios = () => {
  return (
    <>
  <div className='bg-[url("/img/testimonios.jpg")] relative w-full h-[900px] bg-cover bg-center flex items-center justify-center'>
  <div className='bg-[url("/img/fondo_testimonios.png")] bg-center bg-no-repeat bg-contain lg:w-[1100px] lg:h-[600px] max-sm:w-96 
  lg:px-20 py-9 md:w-[900px] lg:mx-2 sm:w-[600px] md:mx-2  sm:h-[350px] md:h-[600px]'>
    <CarruselComentarios />
  </div>
</div>


   
    </>
  )
}

export default Comentarios
