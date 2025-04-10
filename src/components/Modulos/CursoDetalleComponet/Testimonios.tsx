import CarruselComentarios from '@/components/Carrusels/CarruselComentarios'
import React from 'react'

const Comentarios = () => {

  return (
    <>
<div className='bg-[url("/img/testimonios.jpg")] relative w-full h-[600px] bg-cover bg-center flex items-center justify-center sm:h-[600px] md:h-[800px] lg:h-[800px]'>
  <div className='bg-[url("/img/fondo_testimonios.png")] bg-center bg-no-repeat bg-contain w-full h-[350px] px-2 py-9
    mx-2
    sm:mx-0
    sm:w-[650px] sm:h-[350px]
    md:w-[900px] md:h-[600px] md:mx-2
    lg:w-[1100px] lg:h-[600px] lg:px-20 lg:mx-2'>
    <CarruselComentarios />
  </div>
</div>


    </>
  )
}

export default Comentarios
