import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { FaRegUserCircle, FaUserAlt } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
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
        <ul className="flex justify-center mt-4 space-x-3">{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <button className="w-3 h-3 rounded-full border-2 border-transparent bg-white/10 hover:bg-white focus:outline-none  active:border-blue-500" />
    ),
    nextArrow: <CustomNextArrow  />,
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
          

   <motion.div
   whileHover={{ y: -20, scale: 1.02 }}
   transition={{ type: "spring", stiffness: 150, damping: 12 }}
   className=" border-cyan-500 rounded-2xl  bg-white">
   <div className="  rounded-2xl  flex flex-col items-center  w-[360px] shadow-[0_0_30px_0_#ffffff]">
      {/* Contenedor del ícono */}
      <Image

        alt="niña agarrando un laptop " 
        src="https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Ejemplos/gradoejmNi%C3%B1a.jpeg"
        width={400}
        height={400}
        className="size-[400px] object-cover rounded-t-2xl "

        />

      {/* Contenido del testimonio */}
      <div className=" p-4 w-full ">
        <div className="flex text-black text-base justify-between mb-4">
        <div className="flex gap-1 items-center">
        <FaUserAlt className="text-yellowIngenia"/>
        <h1 className="text-sm">500 Integrantes</h1>
        </div>
        <span className="text-yellowIngenia">|</span>
        <div className="flex gap-1 items-center">
        <AiFillLike className="text-yellowIngenia" />
        <h1 className="text-sm">50% (250)</h1>
        </div>
        <span className="text-yellowIngenia">|</span>
        <div className="flex gap-1 items-center">
        <MdOutlineAccessTimeFilled className="text-yellowIngenia" />
        <h1 className="text-sm leading-[1] ">5 horas <br /> Academicas</h1>
        </div>
        </div>
        <button  className="w-full p-4 rounded-2xl bg-yellowIngenia text-white hover:text-black hover:bg-white">MAS INFORMACIÓN</button>
      </div>
    </div>
   </motion.div>
 

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
      className="absolute top-1/2 -right-20 max-sm:right-[1rem] transform -translate-y-1/2  p-2 rounded-full z-10 focus:outline-none hidden max-xl:block"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-yellowIngenia"
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
    <div className="absolute top-[42.5%] right-[36px] transform -translate-y-1/2 h-[60%] w-[10%] rounded-lg block max-xl:hidden">
      <button
        className="relative top-1/2 left-[9rem] max-sm:left-[1rem] transform -translate-y-1/2  p-2 rounded-full z-10 focus:outline-none"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-yellowIngenia "
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
        className="h-10 w-10 text-yellowIngenia"
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
    <div className="absolute top-[42.5%] left-[26px] transform -translate-y-1/2 z-10  to-white/30 h-[60%] w-[10%] rounded-lg block max-xl:hidden">
      <button
        className="absolute top-1/2 -left-[3rem] transform -translate-y-1/2  p-2 rounded-full focus:outline-none"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-yellowIngenia"
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
