import Image from "next/image";
import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineStarPurple500 } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const imageItems = [
  "https://pub-9d2abfa175714e64aed33b90722a9fd5.r2.dev/Multimedia/Imagen/Cursos/PortadaFinal/100_COM.jpg",
  "https://pub-9d2abfa175714e64aed33b90722a9fd5.r2.dev/Multimedia/Imagen/Cursos/PortadaFinal/100_COM.jpg",
  "https://pub-9d2abfa175714e64aed33b90722a9fd5.r2.dev/Multimedia/Imagen/Cursos/PortadaFinal/100_COM.jpg",
  "https://pub-9d2abfa175714e64aed33b90722a9fd5.r2.dev/Multimedia/Imagen/Cursos/PortadaFinal/100_COM.jpg",
];

const CarouselComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    beforeChange: (oldIndex: any, newIndex: React.SetStateAction<number>) => {
      setCurrentSlide(newIndex);
    },
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="flex justify-center mt-4 space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <button className="w-3 h-3 rounded-full border-2 border-transparent bg-white/10 hover:bg-white focus:outline-none  active:border-blue-500" />
    ),
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div
      className="flex flex-col carousel-container mx-auto py-8 w-[90%]  max-[1440px]:w-[70%]  max-xl:w-[80%] max-sm:w-full px-[6rem] max-sm:px-0 min-[500px]:px-0 lg:px-0"
      data-aos="zoom-out-right"
      data-aos-delay="200"
    >
      <Slider {...settings}>
        {imageItems.map((imageUrl, index) => {
          // Determinamos el índice de la imagen central
          const isMiddleImage =
            index === (currentSlide + 1) % imageItems.length; // El índice medio es el actual + 1 en un carrusel de 3
          return (
            <div key={index} className="p-6 max-sm:p-0 ">
              <div
                className={`flex justify-center items-center rounded-lg ${
                  isMiddleImage
                    ? "scale-100 max-[1440px]:scale-90  mx-auto  "
                    : " scale-80 max-[1440px]:scale-90 mx-auto"
                }`}
              >


          
<div className="bg-gradient-to-b from-[#1E293B]  to-[#1E293B] p-6 rounded-[45px]">
<div className="bg-gradient-to-t  from-[#179EC1] to-[#0369a1]  p-6 rounded-[45px] shadow-lg flex flex-col gap-2 h-[600px] w-[400px]
border-2 border-white drop-shadow-[0_0_4px_rgba(255,255,255,2)]">
      {/* Contenedor del ícono */}
       <Image
                  alt="crown"
                  src="/img/corona.png"
                  width={1000}
                  height={1000}
                  className=" w-30 h-30 object-cover mx-auto  mt-2 "
                />
      

      {/* Contenido del testimonio */}
      <div>
        <h3 className="text-white font-bold font-poppins text-4xl text-center drop-shadow-[0_0_10px_rgba(255,255,255,2)]">Pedro Castillo</h3>
        <h3 className="text-center text-white font-light text-2xl">Padre de familia</h3>
        <div className="flex text-yellow-400 text-lg justify-center ">
        <MdOutlineStarPurple500 className="w-6 h-6"/>
        <MdOutlineStarPurple500 className="w-6 h-6"/>
        <MdOutlineStarPurple500 className="w-6 h-6"/>
        <MdOutlineStarPurple500 className="w-6 h-6"/>
        <MdOutlineStarPurple500 className="w-6 h-6"/>
        </div>
        <p className="text-white text-lg mt-2 text-center">
        “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati blanditiis laborum alias excepturi 
         e voluptas reprehenderit“.
        </p>
      </div>
    </div>

</div>
   
 

              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

// Componentes de flecha personalizados
const CustomNextArrow = ({
  onClick,
}: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => (
  <>
    <button
      className="absolute top-1/2 -right-16 max-sm:right-[1rem] transform -translate-y-1/2  p-2 rounded-full z-10 focus:outline-none hidden max-xl:block"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
    <div className="absolute top-[42.5%] right-[21px] transform -translate-y-1/2 h-[60%] w-[10%] rounded-lg block max-xl:hidden">
      <button
        className="relative top-1/2 left-[9rem] max-sm:left-[1rem] transform -translate-y-1/2  p-2 rounded-full z-10 focus:outline-none"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  </>
);

const CustomPrevArrow = ({
  onClick,
}: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => (
  <>
    <button
      className="absolute top-1/2 -left-16 max-sm:left-4 transform -translate-y-1/2  p-2 rounded-full z-10 focus:outline-none hidden max-xl:block"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
    <div className="absolute top-[42.5%] left-6 transform -translate-y-1/2 z-10  to-white/30 h-[60%] w-[10%] rounded-lg block max-xl:hidden">
      <button
        className="absolute top-1/2 -left-[3rem] transform -translate-y-1/2  p-2 rounded-full focus:outline-none"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    </div>
  </>
);

export default CarouselComponent;
