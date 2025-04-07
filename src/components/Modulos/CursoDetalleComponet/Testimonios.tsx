import CarruselComentarios from '@/components/Carrusels/CarruselComentarios'
import React from 'react'

const Comentarios = () => {
  return (
    <>
  <div className='bg-[url("/img/testimonios.jpg")] relative w-full h-[900px] bg-cover bg-center flex items-center justify-center'>
  <div className='bg-[url("/img/fondo_testimonios.png")] bg-center bg-no-repeat bg-contain w-[1100px] h-[900px] max-sm:w-96 px-10 lg:py-40 sm:py-9 '>
    <CarruselComentarios />
  </div>
</div>


   
    </>
  )
}

export default Comentarios
