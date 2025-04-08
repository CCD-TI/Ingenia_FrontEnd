import CarruselComentarios from '@/components/Carrusels/CarruselComentarios'
import React from 'react'

const Comentarios = () => {
  return (
    <>
<div className="bg-[url('/img/testimonios.jpg')] relative w-full h-[900px] bg-cover bg-center flex items-center justify-center">
  <div className="bg-[url('/img/fondo_testimonios.png')] bg-center bg-no-repeat bg-contain w-full max-w-[1100px] max-h-[600px] px-10 sm:py-7 overflow-auto 
  ">
    <CarruselComentarios />
  </div>
</div>

    </>
  )
}

export default Comentarios
