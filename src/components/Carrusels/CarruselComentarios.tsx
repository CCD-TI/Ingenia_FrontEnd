"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { div } from "framer-motion/client";

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
      logo: "/img/Niña_Testimonio.jpeg",
      image: "/Multimedia/Imagen/ccdcorp/FOTOS EMPRESAS/Group-LA-LIBERTAD.png",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisici, fuga eligendi eaque! Eveniet soluta sed odio pariatur rerum!",
    },
    {
      id: 2,
      name: "Universidad Nacional De Ingeniería",
      logo: "/img/Niña_Testimonio.jpeg",
      image:
        "/Multimedia/Imagen/ccdcorp/FOTOS EMPRESAS/FOTOS-CAPACITACION-FORMATOS_2.png",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing a, fuga eligendi eaque! Eveniet soluta sed odio pariatur rerum!",
    },
    {
      id: 3,
      name: "Universidad Nacional Agraria la Molina",
      logo: "/img/Niño_Testimonio.jpeg",
      image:
        "/Multimedia/Imagen/ccdcorp/FOTOS EMPRESAS/FOTOS-SILSA-FORMATOS.png",
      description:
        "Lorem, ipsum dolor sit amet consectetur adip laboriosam reprehenderit minima, fuga eligendi eaque! Eveniet soluta sed odio pariatur rerum!",
    },
   
    {
      id: 4,
      name: "Universidad 4",
      logo: "/img/Niño_Testimonio.jpeg",
      image: "/Multimedia/Imagen/ccdcorp/FOTOS EMPRESAS/FOTO UNI.png",
      description:
        "Lorem, ipsum dolor sit amet c. Excepturi blanditiis, explicabo debitiaboriosam r! Eveniet soluta sed odio pariatur rerum!",
    },
    {
      id: 5,
      name: "Universidad 5",
      logo: "/img/Madre_Testimonio.jpeg",
      image: "/Multimedia/Imagen/ccdcorp/FOTOS EMPRESAS/FOTOS-agraria.png",
      description:
        "Lorem, ipsum dolor s explicnissimos est laboriosam reprehenderit minima, fuga eligendi eaque! Eveniet soluta sed odio pariatur rerum!",
    },
    {
      id: 6,
      name: "Universidad 6",
      logo: "/img/Madre_Testimonio.jpeg",
      image:
        "/Multimedia/Imagen/ccdcorp/FOTOS EMPRESAS/FOTO Universidad Nacional de Educación Enrique Guzmás y Valle.png",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi blanditiis, expigendi eaque! Eveniet soluta sed odio pariatur rerum!",
    },
    {
      id: 7,
      name: "Universidad 6",
      logo: "/img/Madre_Testimonio.jpeg",
      image:
        "/Multimedia/Imagen/ccdcorp/FOTOS EMPRESAS/FOTOS-ministerio-de-economia-y-finanzas.png",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exceenderit minima, fuga eligendi eaque! Eveniet soluta sed odio pariatur rerum!",
    },
    {
      id: 8,
      name: "Universidad 6",
      logo: "/img/Madre_Testimonio.jpeg",
      image: "/Multimedia/Imagen/ccdcorp/FOTOS EMPRESAS/FOTOS-SAN-MARCOS.png",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exceppraema, fuga eligendi eaque! Eveniet soluta sed odio pariatur rerum!",
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

  useEffect(() => {
    const container = scrollContainerRef.current;

    if (!container) return;

    // Función para bloquear el scroll manual
    const preventScroll = (event: WheelEvent | TouchEvent) => {
      event.preventDefault();
    };

    // Agregar event listeners para bloquear el scroll manual
    container.addEventListener("wheel", preventScroll, { passive: false });
    container.addEventListener("touchmove", preventScroll, { passive: false });

    // Limpiar event listeners al desmontar el componente
    return () => {
      container.removeEventListener("wheel", preventScroll);
      container.removeEventListener("touchmove", preventScroll);
    };
  }, []);

  // Ejemplo de scroll programático
  const scrollToBottom = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

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
    <>
    
    <div className="relative py-12">
  <div className="relative z-10 max-w-[100rem] h-full mx-auto px-10">
    <div className="flex flex-col md:flex-row items-center gap-20">
      {/* Columna izquierda - Partners scrollable */}
      <div className="relative max-xl:w-[20rem]  h-[468px] ">
        <div 
          ref={scrollContainerRef}
          className="h-full overflow-y-auto scrollbar-hide "
        >
          <div className="flex">
            <div className="flex flex-col items-center max-sm:flex-row sm:flex-row lg:flex-col">
              {partners.map((partner, index) => (
                <div
                  key={partner.id}
                  className={cn(
                    "transition-all duration-300 transform",
                    index === activePartner
                      ? "opacity-100 scale-110 px-6 pt-2"
                      : "opacity-50"
                  )}
                >
                <div onClick={scrollUp}
                     className="  ">
                      <Image
                        src={partner.logo}
                        alt="user"
                        width={5000}
                        height={5000}
                        className="my-2 size-[5rem]  object-cover border-2 border-yellowIngenia shadow-[0_0_30px_rgba(234,179,8,0.8)]  "
                      />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Columna central - Imagen grande */}
      <div className="flex-1 flex max-sm:flex-col">
        <div className="relative w-full  h-[500px] ">
          {partners.map((partner, index) => (
            <Image
              key={partner.id}
              src={partner.logo}
              alt="Featured"
              width={800}
              height={800}
              className={cn(
                "absolute  w-full h-full object-cover rounded-xl border-2 border-yellowIngenia shadow-[0_0_30px_rgba(234,179,8,0.8)]",
                index === activePartner ? "opacity-100" : "opacity-0"
              )}
            />
          ))}
        </div>
      </div>

      {/* Columna derecha - Testimonio */}
      <div className="flex-1 relative w-full h-[500px]">
        {partners.map((partner, index) => (
          <div
            key={partner.id}
            className={cn(
              "absolute inset-0 transition-all duration-500 flex flex-col justify-center",
              index === activePartner
                ? "opacity-100"
                : "opacity-0"
            )}
          >
            <div className="w-full relative flex flex-col gap-7 items-start ">
              <h1 className="text-yellowIngenia font-poppins font-black text-6xl">Testimonios</h1>
              <div>
                <Image
                  alt="Apostrofe"
                  src="/img/Apostrofe.png"
                  width={1000}
                  height={1000}
                  className="w-20 h-20"
                />
              </div>
              <h1 className="text-xl text-justify text-white font-poppins font-medium leading-[1.5] pb-4">
                {partner.description}
              </h1>
            </div>
            <div className="relative flex flex-col gap-2 items-start mt-8">
              <h1 className="text-yellowIngenia font-poppins font-black text-3xl">Angel Plasencia</h1>
              <h1 className="text-[25px] text-white font-extralight">Padre de Adriano Passaro</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
    </>
  );
}
