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
      <div className="relative lg:pt-0 md:pt-0 pt-9 lg:pr-20">

        <div className="relative z-10 max-w-[100rem] h-full mx-auto px-1">
          <div className="flex flex-col md:flex-row items-center sm:gap-5 md:gap-0 lg:gap-20">
  
            {/* Columna izquierda - Partners scrollable (solo visible en pantallas medianas y grandes) */}
            <div className="relative hidden md:block md:py-7 md:my-3 md:pt-10 md:w-[14rem] lg:w-[7rem] lg:py-0 h-[450px]">
              <div
                ref={scrollContainerRef}
                className="h-full overflow-y-auto scrollbar-hide"
              >
                <div className="flex flex-col items-center lg:w-[110px]">
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
                      <div onClick={scrollUp}>
                        <Image
                          src={partner.logo}
                          alt="user"
                          width={5000}
                          height={5000}
                          className="my-2 size-[5rem] object-cover border-2 border-yellowIngenia shadow-[0_0_30px_rgba(234,179,8,0.8)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
  
            {/* Columna central - Imagen grande */}
            <div className="hidden md:hidden lg:block flex-1">
              <div className="relative w-full h-[480px]">
                {partners.map((partner, index) => (
                  <Image
                    key={partner.id}
                    src={partner.logo}
                    alt="Featured"
                    width={800}
                    height={800}
                    className={cn(
                      "transition-all duration-300 transform absolute w-full h-full object-cover rounded-xl border-2 border-yellowIngenia shadow-[0_0_30px_rgba(234,179,8,0.8)]",
                      index === activePartner ? "opacity-100" : "opacity-0"
                    )}
                  />
                ))}
              </div>
            </div>
  
            {/* Columna derecha - Testimonio */}
            <div className="relative w-full h-[200px] md:h-[500px] lg:h-[500px] flex flex-col items-center md:items-start flex-1">
              {partners.map((partner, index) => (
                <div
                  key={partner.id}
                  className={cn(
                    "absolute inset-0 transition-all duration-500 flex flex-col md:justify-center",
                    index === activePartner ? "opacity-100" : "opacity-0"
                  )}
                >
                  <div className="w-full flex flex-col items-center md:items-start md:gap-8 lg:gap-7">
                    <div className="flex sm:flex-row sm:gap-2 md:flex-col lg:flex-col">
                    <h1 className="text-yellowIngenia font-poppins font-black text-[20px] md:text-6xl lg:text-6xl text-center md:text-left">
                      Testimonios
                    </h1>
                    <div>
                      <Image
                        alt="Apostrofe"
                        src="/img/Apostrofe.png"
                        width={1000}
                        height={1000}
                        className="w-4 h-4 sm:w-6 sm:h-6 md:w-9 md:h-9 lg:w-20 lg:h-20"
                      />
                    </div>
                    </div>
                    <h1 className="text-white font-poppins font-medium leading-[1.0] pb-0 lg:pb-2 text-[13px] sm:text-[13px] md:text-xl lg:text-md text-center md:text-left w-[250px] md:w-[400px] lg:w-[300px]">
                      {partner.description}
                    </h1>
                  </div>
                  
                  {/* Nombre y descripción */}
                  <div className="relative flex flex-col gap-1 items-center md:items-start md:mt-8 lg:mt-8 sm:mt-1">
                    <h1 className="text-yellowIngenia font-poppins font-black text-center md:text-left lg:text-2xl md:text-3xl lg:w-[250px]">
                      Angel Plasencia
                    </h1>
                    <h1 className="text-white font-extralight text-center md:text-left text-[14px] md:text-[18px]">
                      Padre de Adriano Passaro
                    </h1>
                  </div>

                  {/* Carrusel de logos en móviles */}
                  <div className="md:hidden px-4">
                    <div
                      ref={scrollContainerRef}
                      className="overflow-x-auto scrollbar-hide py-2"
                    >
                      <div className="flex flex-row items-center justify-center gap-1">
                        {partners.map((partner, index) => (
                          <div
                            key={partner.id}
                            className={cn(
                              "transition-all duration-300 transform",
                              index === activePartner
                                ? "opacity-100 scale-110 px-2 pt-2"
                                : "opacity-50"
                            )}
                          >
                            <div onClick={scrollUp} className="cursor-pointer">
                              <Image
                                src={partner.logo}
                                alt="user"
                                width={5000}
                                height={4000}
                                className=" size-[3rem] object-cover border-2 border-yellowIngenia shadow-[0_0_15px_rgba(234,179,8,0.8)]"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
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
