"use client";

import { useState } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

// Datos de testimonios
const testimonios = [
  {
    id: 1,
    nombre: "Angel Plasencia",
    rol: "Alumno",
    imagen:
      "https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Ejemplos/CursoEjem.jpeg",
    testimonio:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    nombre: "Angel Plasencia",
    rol: "Alumno",
    imagen:
      "https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Ejemplos/CursoEjem.jpeg",
    testimonio:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    nombre: "Angel Plasencia",
    rol: "Alumno",
    imagen:
      "https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Ejemplos/CursoEjem2.jpeg",
    testimonio:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    nombre: "Angel Plasencia",
    rol: "Alumno",
    imagen:
      "https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Ejemplos/CursoEjem.jpeg",
    testimonio:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
  },
  {
    id: 5,
    nombre: "Angel Plasencia",
    rol: "Alumno",
    imagen:
      "https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Ejemplos/CursoEjem.jpeg",
    testimonio:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
  },
  {
    id: 6,
    nombre: "Angel Plasencia",
    rol: "Alumno",
    imagen:
      "https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Ejemplos/CursoEjem.jpeg",
    testimonio:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
  },
  {
    id: 7,
    nombre: "María Rodríguez",
    rol: "Alumna",
    imagen:"https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Ejemplos/CursoEjem2.jpeg",
    testimonio:
      "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore.",
  },
  {
    id: 8,
    nombre: "Carlos Mendoza",
    rol: "Profesor",
    imagen:"https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Ejemplos/CursoEjem.jpeg",
    testimonio:
      "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.",
  },
];

export default function TestimoniosCarousel() {
  const [testimonioActivo, setTestimonioActivo] = useState(0);

  return (
    <div className="w-full max-w-[100rem] mx-auto h-full ">
      <div className="relative  rounded-xl p-6 md:p-10 ">
        <div className="flex max-xl:flex-col justify-center items-center gap-12 overflow-hidden w-full">
          {/* Columna de miniaturas */}
          <div className="flex flex-col max-xl:flex-row gap-3 justify-center  w-[350px] mx max-xl:w-full max-xl:h-auto h-[600px] overflow-auto scrollbar-hide ">
            {testimonios.map((testimonio, index) => (
              <div
                key={testimonio.id}
                className={`relative cursor-pointer transition-all duration-300 transform w-fit ${
                  testimonioActivo === index
                    ? "scale-105 z-10"
                    : "scale-100 opacity-80"
                }`}
                onClick={() => setTestimonioActivo(index)}
              >
                <div className="absolute inset-0 rounded-2xl border-2 shadow-lg w-full" />
                <div className="relative rounded-2xl overflow-hidden aspect-square w-fit h-[100px]  ">
                  <Image
                    src={testimonio.imagen || "/placeholder.svg"}
                    alt={testimonio.nombre}
                    width={1000}
                    height={1000}
                    className="object-cover  size-[9rem] "
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Contenido principal */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Imagen principal */}
            <div className="relative mx-auto md:mx-0">
              <div className="absolute inset-0 rounded-3xl border-2 size-fit  shadow-lg" />
              <div className="relative rounded-3xl overflow-hidden size-[500px] max-xl:size-[400px] ">
                <Image
                  src={
                    testimonios[testimonioActivo].imagen || "/placeholder.svg"
                  }
                  alt={testimonios[testimonioActivo].nombre}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="bg-IngeniaYellowDark p-2 rounded-md mr-4 size-fit mt-10 shadow-[0_0_25px_5px_rgba(168,123,4,0.7)]">
                  <BiSolidQuoteAltLeft  className="size-14 text-gray-900" />
                </div>       
            {/* Texto del testimonio */}
            <div className="flex flex-col justify-start space-y-6">
              <h2 className="text-amber-400 text-5xl font-bold flex items-center">
                Testimonios{" "}
                <span className="inline-block w-10 h-1 bg-amber-400 ml-2"></span>
              </h2>

              <div className="flex items-start">
               
                <p className="text-white text-base md:text-lg">
                  {testimonios[testimonioActivo].testimonio}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-amber-400 text-gray-900 px-4 py-2 rounded-full font-medium">
                  {testimonios[testimonioActivo].rol}
                </div>
                <span className="text-white text-xl font-semibold">
                  {testimonios[testimonioActivo].nombre}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
