"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronUp, ChevronDown } from "lucide-react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

interface Partner {
  id: number;
  name: string;
  logo: string;
  image: string;
  description: string;
}

export default function PartnersShowcase() {
  const [activePartner, setActivePartner] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const partners: Partner[] = [
    {
      id: 1,
      name: "Universidad Nacional Mayor de San Marcos",
      logo: "https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Ejemplos/CursoEjem.jpeg",
      image: "/Multimedia/Imagen/ccdcorp/FOTOS EMPRESAS/Group-LA-LIBERTAD.png",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi blanditiis, explicabo debitis cum qui praesentium rem, dignissimos est laboriosam reprehenderit minima, fuga eligendi eaque! Eveniet soluta sed odio pariatur rerum!",
    },
    {
      id: 2,
      name: "Universidad Nacional De Ingeniería",
      logo: "https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Ejemplos/CursoEjem.jpeg",
      image:
        "/Multimedia/Imagen/ccdcorp/FOTOS EMPRESAS/FOTOS-CAPACITACION-FORMATOS_2.png",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi blanditiis, explicabo debitis cum qui praesentium rem, dignissimos est laboriosam reprehenderit minima, fuga eligendi eaque! Eveniet soluta sed odio pariatur rerum!",
    },
    {
      id: 3,
      name: "Universidad Nacional Agraria la Molina",
      logo: "https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Ejemplos/CursoEjem.jpeg",
      image:
        "/Multimedia/Imagen/ccdcorp/FOTOS EMPRESAS/FOTOS-SILSA-FORMATOS.png",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi blanditiis, explicabo debitis cum qui praesentium rem, dignissimos est laboriosam reprehenderit minima, fuga eligendi eaque! Eveniet soluta sed odio pariatur rerum!",
    },
    {
      id: 4,
      name: "Universidad 4",
      logo: "https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Ejemplos/CursoEjem.jpeg",
      image: "/Multimedia/Imagen/ccdcorp/FOTOS EMPRESAS/FOTO UNI.png",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi blanditiis, explicabo debitis cum qui praesentium rem, dignissimos est laboriosam reprehenderit minima, fuga eligendi eaque! Eveniet soluta sed odio pariatur rerum!",
    },
    {
      id: 5,
      name: "Universidad 5",
      logo: "https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Ejemplos/CursoEjem.jpeg",
      image: "/Multimedia/Imagen/ccdcorp/FOTOS EMPRESAS/FOTOS-agraria.png",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi blanditiis, explicabo debitis cum qui praesentium rem, dignissimos est laboriosam reprehenderit minima, fuga eligendi eaque! Eveniet soluta sed odio pariatur rerum!",
    },
    {
      id: 6,
      name: "Universidad 6",
      logo: "https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Ejemplos/CursoEjem.jpeg",
      image:
        "/Multimedia/Imagen/ccdcorp/FOTOS EMPRESAS/FOTO Universidad Nacional de Educación Enrique Guzmás y Valle.png",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi blanditiis, explicabo debitis cum qui praesentium rem, dignissimos est laboriosam reprehenderit minima, fuga eligendi eaque! Eveniet soluta sed odio pariatur rerum!",
    },
    {
      id: 7,
      name: "Universidad 6",
      logo: "https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Ejemplos/CursoEjem.jpeg",
      image:
        "/Multimedia/Imagen/ccdcorp/FOTOS EMPRESAS/FOTOS-ministerio-de-economia-y-finanzas.png",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi blanditiis, explicabo debitis cum qui praesentium rem, dignissimos est laboriosam reprehenderit minima, fuga eligendi eaque! Eveniet soluta sed odio pariatur rerum!",
    },
    {
      id: 8,
      name: "Universidad 6",
      logo: "https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Ejemplos/CursoEjem.jpeg",
      image: "/Multimedia/Imagen/ccdcorp/FOTOS EMPRESAS/FOTOS-SAN-MARCOS.png",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi blanditiis, explicabo debitis cum qui praesentium rem, dignissimos est laboriosam reprehenderit minima, fuga eligendi eaque! Eveniet soluta sed odio pariatur rerum!",
    },
  ];

  const companies = [
    {
      id: 1,
      name: "Company 1",
      logo: "/Multimedia/Imagen/ccdcorp/LOGOS CUADRADOS/LOGOS Gobierno Regional La Libertad Red de Salud Trujillo.png",
    },
    {
      id: 2,
      name: "Company 1",
      logo: "/Multimedia/Imagen/ccdcorp/LOGOS CUADRADOS/LOGOS Municipalidad Distrital de Asia.png",
    },
    {
      id: 3,
      name: "Company 1",
      logo: "/Multimedia/Imagen/ccdcorp/LOGOS CUADRADOS/LOGOS SILSA Servicio Integrados de Limpieza S.A.png",
    },
    {
      id: 4,
      name: "Company 1",
      logo: "/Multimedia/Imagen/ccdcorp/LOGOS CUADRADOS/LOGOS UNI.png",
    },
    {
      id: 5,
      name: "Company 1",
      logo: "/Multimedia/Imagen/ccdcorp/LOGOS CUADRADOS/LOGOS Universidad Nacional Agraria la Molina.png",
    },
    {
      id: 6,
      name: "Company 1",
      logo: "/Multimedia/Imagen/ccdcorp/LOGOS CUADRADOS/LOGOS Universidad Nacional de Educación Enrique Guzmás y Valle.png",
    },
    {
      id: 7,
      name: "Company 1",
      logo: "/Multimedia/Imagen/ccdcorp/LOGOS CUADRADOS/LOGOS MINISTERIO DEL PERÚ Economia y Finanzas.png",
    },
    {
      id: 8,
      name: "Company 1",
      logo: "/Multimedia/Imagen/ccdcorp/LOGOS CUADRADOS/LOGOS San Marcos.png",
    },
  ];

  const scrollUp = () => {
    if (scrollContainerRef.current) {
      const newPosition = Math.max(0, scrollPosition - 100);
      scrollContainerRef.current.scrollTo({
        top: newPosition,
        behavior: "smooth",
      });
      setScrollPosition(newPosition);
      setActivePartner((prev) => (prev > 0 ? prev - 1 : partners.length - 1));
    }
  };

  const scrollDown = () => {
    if (scrollContainerRef.current) {
      const maxScroll =
        scrollContainerRef.current.scrollHeight -
        scrollContainerRef.current.clientHeight;
      const newPosition = Math.min(maxScroll, scrollPosition + 100);
      scrollContainerRef.current.scrollTo({
        top: newPosition,
        behavior: "smooth",
      });
      setScrollPosition(newPosition);
      setActivePartner((prev) => (prev < partners.length - 1 ? prev + 1 : 0));
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        setScrollPosition(scrollContainerRef.current.scrollTop);
      }
    };

    scrollContainerRef.current?.addEventListener("scroll", handleScroll);
    return () =>
      scrollContainerRef.current?.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const containerHeight = scrollContainerRef.current.clientHeight;
      const itemHeight = containerHeight / 3; // Asumiendo que queremos mostrar 3 items
      const scrollTo =
        itemHeight * activePartner - (containerHeight - itemHeight) / 2;
      scrollContainerRef.current.scrollTo({
        top: scrollTo,
        behavior: "smooth",
      });
    }
  }, [activePartner]);

  return (
    <div className="relative py-12">
      {/* <img
        src="/Multimedia/Imagen/ccdcorp/FONDO/Group 609.png"
        alt="Trabaja con nosotros"
        className="absolute right-0 top-0 w-full h-full object-cover opacity-80"
      /> */}

      <div className=" relative z-10 max-w-[100rem] h-full mx-auto px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative max-xl:w-[20rem] w-[30rem] h-[450px]">
            <button
              onClick={scrollUp}
              className="absolute -top-20 left-1/2 -translate-x-1/2 z-10  bg-opacity-75 p-2 rounded-full "
              aria-label="Scroll up and select previous partner"
            >
              <ChevronUp className="w-20 h-20 text-amber-400" />
            </button>
            <div
              ref={scrollContainerRef}
              className="h-full overflow-y-auto scrollbar-hide "
            >
              <div className="flex flex-col gap-6 p-4">
                {partners.map((partner, index) => (
                  <div
                    key={partner.id}
                    className={cn(
                      "transition-all duration-300 transform",
                      index === activePartner
                        ? "opacity-100 scale-110 pl-6"
                        : "opacity-50"
                    )}
                  >
                    <div className="bg-white shadow-2xl border-2 rounded-xl flex w-full items-center gap-4 p-4">
                      <Image
                        src={partner.logo}
                        alt="user"
                        width={5000}
                        height={5000}
                        className="my-2 size-[5rem] rounded-full object-cover border-2 border-white"
                      />

                      <div>
                        <h1 className="font-bold text-2xl">Bruno carranza</h1>
                        <h2>4to Grado de primaria </h2>
                      </div>
                    </div>
                    <span className="sr-only text-white">{partner.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={scrollDown}
              className="absolute  left-[51%] -translate-x-1/2 z-10  bg-opacity-75 p-2 rounded-full "
              aria-label="Scroll down and select next partner"
            >
              <ChevronDown className="w-20 h-20 text-amber-400 " />
            </button>
          </div>

          <div className="flex-1 relative w-full h-[500px] overflow-hidden">
            {partners.map((partner, index) => (
              <div
                key={partner.id}
                className={cn(
                  "absolute inset-0 transition-all duration-500 ",
                  index === activePartner
                    ? "opacity-100 left-0"
                    : "opacity-0 left-full"
                )}
              >
                <div className="w-full relative">  
                  <FaQuoteLeft className="text-cyan-300 text-5xl absolute left-0" />
                  <h1 className="text-5xl p-4 text-center text-black">{partner.description}</h1>
                  <FaQuoteRight className="text-cyan-300 text-5xl absolute right-0" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="mt-12 w-full  flex   justify-between px-12 max-xl:grid max-xl:grid-cols-4 max-xl:justify-items-center  max-xl:gap-y-8  max-md:grid-cols-3 max-sm:grid-cols-2 max-sm:p-0">
          {companies.map((company, index) => (
            <button
              key={company.id}
              onClick={() => setActivePartner(index)}
              className={cn(
                " max-xl:w-28 max-md:hidden  rounded-2xl shadow-md hover:scale-105 transform transition duration-300 bg-gradient-to-br from-[rgba(0,96,254,0.4)] hover:from-[rgba(0,96,254,0.7)] via-[rgba(22,46,84,0.5)] hover:via-[rgba(22,46,84,0.7)]  to-[rgba(0,96,254,0.4)] hover:to-[rgba(0,96,254,0.7)] border-2 border-[rgba(22,46,84,0.7)] p-6",
                index === activePartner
                  ? "opacity-100 scale-110"
                  : "opacity-50 hover:opacity-75"
              )}
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={60}
                height={60}
              />
            </button>
          ))}
        </div> */}
      </div>
    </div>
  );
}
