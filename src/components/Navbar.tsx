"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { IoIosArrowForward, IoMdCloseCircle } from "react-icons/io";

import { FaRegStar, FaUser } from "react-icons/fa6";

import { MdArrowBackIosNew, MdKeyboardArrowDown } from "react-icons/md";
import { BiSolidRightArrow } from "react-icons/bi";
import Vega from "@/components/Contador";


const storageUrl = process.env.NEXT_PUBLIC_STORAGE_URL || "";
const img = {
  logo: {
    ingenia: `${storageUrl}/Home/image-removebg-preview.png`,
  },
};
import { environment } from "../environments/environment";
import { FaStar } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
// import ModalFormJobCCD from "./ModalFormJobCCD";

interface Especializacion {
  Especializacion: string;
  IdEspecializacion: number;
  nombre: string;
}

const Navbar = () => {
  const storageUrl = process.env.NEXT_PUBLIC_STORAGE_URL;
  //   const contador: string = environment.contador;
  const images = {
    // logo: `${storageUrl}/Multimedia/Imagen/Ingenia-college/logos/logo_INCO.png`,
    gestion: `${storageUrl}/Multimedia/Imagen/Ccd/Iconos/icon-gestion-normal.svg`,
    ingenieria: `${storageUrl}/Multimedia/Imagen/Ccd/Iconos/icon-ingenieria-normal.svg`,
    mineria: `${storageUrl}/Multimedia/Imagen/Ccd/Iconos/icon-mineria-normal.svg`,
    rutas: `${storageUrl}/Multimedia/Imagen/Ccd/Iconos/icon-rutas-white.svg`,
  };

  const [showTopBar, setShowTopBar] = useState(true); // Controla la visibilidad del Top Bar
  const [lastScrollY, setLastScrollY] = useState(0); // Almacena la posición del último scroll
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(
    null
  );

  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false); // Controla el primer submenú
  const [secondMenuOpen, setSecondMenuOpen] = useState(false); // Controla el segundo submenú desde el menú principal
  const [innerSubMenuOpen, setInnerSubMenuOpen] = useState(false); // Controla el primer submenú dentro del primer submenú
  const [secondSubMenuOpen, setSecondSubMenuOpen] = useState(false); // Controla el segundo submenú dentro del primer submenú
  const [treeSubMenuOpen, setTreeSubMenuOpen] = useState(false); // Controla el segundo submenú dentro del primer submenú

  useState(false); // Controla otro submenú dentro de Additional Menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setSubMenuOpen(false); // Cerrar submenús al cerrar el menú principal
    setSecondMenuOpen(false);
    setInnerSubMenuOpen(false);
    setSecondSubMenuOpen(false);
    setTreeSubMenuOpen(false);

    // Evitar scroll en el fondo cuando el menú está abierto
    document.body.style.overflow = menuOpen ? "auto" : "hidden";
  };

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
    setInnerSubMenuOpen(false); // Cerrar los submenús internos
    setSecondSubMenuOpen(false);
    setTreeSubMenuOpen(false);
  };

  const toggleTreeSubMenu = () => {
    setTreeSubMenuOpen(!treeSubMenuOpen);
    setInnerSubMenuOpen(false);
    setSecondSubMenuOpen(false);
  };

  const toggleInnerSubMenu = () => {
    setInnerSubMenuOpen(!innerSubMenuOpen);
    setSecondSubMenuOpen(false);
    setTreeSubMenuOpen(false);
  };

  const toggleSecondSubMenu = () => {
    setSecondSubMenuOpen(!secondSubMenuOpen);
    setInnerSubMenuOpen(false);
    setTreeSubMenuOpen(false);
  };
  // const toggleTreeSubMenu = () => {
  //   setTreeSubMenuOpen(!treeSubMenuOpen); // Alternar el segundo submenú interno
  // };

  //   const { data: session } = useSession();

  const [especializaciones, setEspecializaciones] = useState<{
    [key: number]: Especializacion[];
  }>({});
  const [selectedSchool, setSelectedSchool] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const hoveredSchoolRef = useRef<Set<number>>(new Set());
  const hasFetched = useRef(false);

  const fetchEspecializaciones = async (schoolId: number) => {
    if (!schoolId) return;

    // Verificamos si ya se ha hecho la consulta para esta escuela
    if (hoveredSchoolRef.current.has(schoolId)) {
      console.log("Ya se ha cargado esta escuela, no repetimos la consulta.");
      return; // No hacemos la consulta si ya ha sido realizada
    }

    setLoading(true);
    try {
      const response = await fetch(
        `${environment.baseUrl}/inicio/obtenerEspe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ school: schoolId }), // Enviar la escuela seleccionada
        }
      );

      const data = await response.json();

      if (data.ok) {
        if (data.data && Array.isArray(data.data) && data.data.length > 0) {
          // Actualizamos las especializaciones para esta escuela
          setEspecializaciones((prevEspecializaciones) => ({
            ...prevEspecializaciones,
            [schoolId]: data.data[0], // Aquí añadimos las especializaciones para esta escuela
          }));
          // Marcamos esta escuela como cargada en el ref
          hoveredSchoolRef.current.add(schoolId);
        } else {
          setError("No se encontraron especializaciones.");
        }
      } else {
        setError(data.msg || "Error desconocido");
      }
    } catch (err) {
      setError(
        "Hubo un error al obtener la información: " +
        ((err as Error)?.message || err)
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };


  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // // Manejo del scroll para el comportamiento del Top Bar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Mostrar el Top Bar solo cuando el usuario hace scroll hacia la parte superior
      if (currentScrollY === 0) {
        setShowTopBar(true); // Mostrar el Top Bar
      }

      // Actualizar la posición del scroll
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

 

  const handleMouseEnter = (category: React.SetStateAction<string | null>) =>
    setActiveCategory(category);
  const handleMouseLeave = () => setActiveCategory(null);

  // Función para manejar el hover en las subcategorías y seleccionar la escuela
  const handleSubMouseEnter = (category: string, schoolId: number) => {
    setSelectedSchool(schoolId); // Actualiza la escuela seleccionada
    setActiveSubCategory(category); // Establece la subcategoría activa
  };

  // Función para manejar el hover al salir de la subcategoría
  const handleSubMouseLeave = () => setActiveSubCategory(null);
  const handleScroll = (e: any, targetId: any) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = 79; // Altura del navbar en píxeles
      const offset = targetElement.offsetTop - navbarHeight;
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  };
  useEffect(() => {
    if (selectedSchool && !hasFetched.current) {
      fetchEspecializaciones(selectedSchool);
    }
  }, [selectedSchool]);
  // Login User options Logout

  return (
    <>


      {/* Navbar */}

      <nav
        className={`${showTopBar
            ? ""
            : ""
          } w-full   text-black`}
      >
        {/* nav cuando baja */}
        <div
          className={` w-full mx-auto grid grid-cols-7 max-sm:grid-cols-3  gap-4 px-6 lg:px-14 py-5 fixed  z-50 transition-all duration-300 ${isScrolled ? "bg-gray-800 " : ""
            }`}
        >
          {/* Logo */}
          <div className="col-span-2 flex gap-4 items-center">
            <div className="lg:hidden">
              <button
                className="text-black focus:outline-none"
                onClick={toggleMenu}
              >
                {menuOpen ? (
                  <AiOutlineClose className="w-6 h-6 transition-transform duration-500 hidden text-[#05abdd]" />
                ) : (
                  <AiOutlineMenu className="w-8 h-8 transition-transform duration-500 text-[#05abdd]" />
                )}
              </button>
            </div>
            <Link href="/">
              <Image

                src="https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Home/logoIngeniacolores.png"
                alt="CCD Logo"
                width={160}
                height={160}
                className="cursor-pointer  "
              />
            </Link>
          </div>

          {/* Links de navegación */}
          <ul className="col-span-3 col-start-3 hidden lg:flex justify-end items-center space-x-6 text-white ">
            <li>
              <Link
                onClick={(e) => handleScroll(e, "inicio")}
                href="#inicio"
                className="relative group md:text-xs xl:text-base text-white transition-all duration-300 font-bold"
              >
                <span className="text-white font-poppins text-[20px]">Inicio</span>
                <span className="absolute left-0 bottom-[-4px] w-0 h-[3px] bg-gradient-to-r from-transparent via-yellow-500 to-yellow-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <div
                className="relative group"
                onMouseEnter={() => handleMouseEnter("escuelas")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="#niveles"
                  className="py-2 -mb-[1px] md:text-xs xl:text-base flex items-center gap-2 hover:text-cyanIngenia font-bold"
                  onClick={(e) => handleScroll(e, 'niveles')}
                >
                  <span className="text-[#05abdd] font-poppins text-[20px] drop-shadow-[0_0_20px_rgba(2,132,199,9)]">Niveles</span>
                  <MdKeyboardArrowDown className="text-2xl drop-shadow-[0_0_20px_rgba(2,132,199,9)] transition-transform duration-300 ease-in-out group-hover:rotate-180 text-[#05abdd]" />
                </Link>
                {activeCategory === "escuelas" && (
                  <div className="absolute top-full left-0 bg-colors-night-blue-ccd2 bg-opacity-60 rounded-2xl py-4 shadow-lg backdrop-blur-md">
                    {/* Subcategorías */}
                    <ul className="flex flex-col gap-2 ">
                      <li
                        className="relative group"
                        onMouseEnter={() => handleSubMouseEnter("gestion", 2)} // Cambia "2" por el ID real de la escuela
                        onMouseLeave={handleSubMouseLeave}
                      >
                        <div className="px-4">
                          <Link
                            href="/grados"
                            className="p-4 w-44 hover:border-colors-sky-ccd border-transparent border-[1px] rounded-xl flex items-center gap-3"
                          >
                            <div className="bg-gradient-to-t from-[rgba(40,58,137,1)] to-[rgba(0,0,0,1)] flex items-center justify-center w-10 h-10 rounded-full outline outline-[1.5px] outline-red-500">
                            
                            </div>
                            Primaria
                          </Link>
                        </div>
                        {activeSubCategory === "gestion" && (
                          <ul className="flex flex-col gap-3 absolute w-80 top-0 left-full bg-colors-night-blue-ccd2 bg-opacity-60 p-4 rounded-2xl shadow-lg backdrop-blur-md">
                            {especializaciones[2]?.map(
                              (
                                especializacion,
                                idx // Aquí usamos el schoolId 2 como ejemplo
                              ) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2"
                                >
                                  <BiSolidRightArrow className="text-colors-cyan-ccd w-5 h-5 flex-shrink-0" />
                                  <Link
                                    href={{
                                      pathname: "/gestion", // La ruta donde quieres que se apliquen los filtros
                                      query: {
                                        especializacion:
                                          especializacion.IdEspecializacion,
                                      }, // Pasar el nombre de la especialización como parámetro en la URL
                                    }}
                                    passHref
                                  >
                                    {especializacion.Especializacion}
                                  </Link>
                                </li>
                              )
                            )}
                          </ul>
                        )}
                      </li>

                      <li
                        className="relative group"
                        onMouseEnter={() =>
                          handleSubMouseEnter("ingenieria", 1)
                        }
                        onMouseLeave={handleSubMouseLeave}
                      >
                        <div className="px-4">
                          <Link
                            href="/ingenieria"
                            className="p-4 w-44 hover:border-colors-sky-ccd border-transparent border-[1px] rounded-xl flex items-center gap-3"
                          >
                            <div className="bg-gradient-to-t from-[rgba(40,58,137,1)] to-[rgba(0,0,0,1)] flex items-center justify-center w-10 h-10 rounded-full outline outline-[1.5px] outline-cyanIngenia">
                            
                            </div>
                            Secundaria
                          </Link>
                        </div>
                        {activeSubCategory === "ingenieria" && (
                          <ul className="flex flex-col gap-3 absolute w-80 top-0 left-full bg-colors-night-blue-ccd2 bg-opacity-60 p-4 rounded-2xl shadow-lg backdrop-blur-md">
                            {especializaciones[1]?.map(
                              (
                                especializacion,
                                idx // Aquí usamos el schoolId 2 como ejemplo
                              ) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2"
                                >
                                  <BiSolidRightArrow className="text-colors-cyan-ccd w-5 h-5 flex-shrink-0" />
                                  <Link
                                    href={{
                                      pathname: "/ingenieria", // La ruta donde quieres que se apliquen los filtros
                                      query: {
                                        especializacion:
                                          especializacion.IdEspecializacion,
                                      }, // Pasar el nombre de la especialización como parámetro en la URL
                                    }}
                                    passHref
                                  >
                                    {especializacion.Especializacion}
                                  </Link>
                                </li> // Mostrar cada especialización en una lista
                              )
                            )}
                          </ul>
                        )}
                      </li>

                  
                      {/* Linea Separadora */}
                      <hr className="border-t-2 border-cyanIngenia w-full p-0 m-0" />
                      {/* Rutas */}
                      <li
                        className="relative group"
                        // onMouseEnter={() => handleSubMouseEnter("rutas")}
                        onMouseLeave={handleSubMouseLeave}
                      >
                      
                      
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </li>
            <li>
              <Link
                href="#nosotros"
                onClick={(e) => handleScroll(e, "nosotros")}
                className="relative group md:text-xs xl:text-base text-white transition-all duration-300 font-bold"
              >
                <span className="text-white font-poppins text-[20px]">Embajadores</span>
                <span className="absolute left-0 bottom-[-4px] w-0 h-[3px] bg-gradient-to-r from-transparent via-yellow-500 to-yellow-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
           
            <li className="">
              <Link
                // href="https://campus.ccdcapacitacion.edu.pe/mod/customcert/verify_certificate.php"
                onClick={(e) => handleScroll(e, "ranking")}
                href="#ranking"
                className="relative group md:text-xs xl:text-base text-white  transition-all duration-300 font-bold"
              >
                <span className="text-white font-poppins text-[20px]">Ranking</span>
                <span className="absolute left-0 bottom-[-4px] w-0 h-[3px]
                 bg-gradient-to-r from-transparent via-yellow-500 to-yellow-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="">
              <Link
                // href="https://campus.ccdcapacitacion.edu.pe/mod/customcert/verify_certificate.php"
                onClick={(e) => handleScroll(e, "ranking")}
                href="#ranking"
                className="relative group md:text-xs xl:text-base text-white  transition-all duration-300 font-bold"
              >
                <span className="text-white font-poppins text-[20px]">Premios</span>
                <span className="absolute left-0 bottom-[-4px] w-0 h-[3px]
                 bg-gradient-to-r from-transparent via-yellow-500 to-yellow-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="">
              <Link
                // href="https://campus.ccdcapacitacion.edu.pe/mod/customcert/verify_certificate.php"
                onClick={(e) => handleScroll(e, "ranking")}
                href="#ranking"
                className="relative group md:text-xs xl:text-base text-white  transition-all duration-300 font-bold"
              >
               
                <span className="text-yellow-400 font-poppins text-[20px] flex gap-1 justify-center
                 drop-shadow-[0_0_20px_rgba(234,179,8,0.9)] ">Promociones<FaStar className="text-yellow-400 drop-shadow-[0_0_50px_rgba(234,179,8,0.9)] " /></span>
                <span className="absolute left-0 bottom-[-4px] w-0 h-[3px]
                 bg-gradient-to-r from-transparent via-yellow-500 to-yellow-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>{/* <ModalFormJobCCD /> */}</li>
          </ul>

          <div className="col-span-2 col-start-6 flex flex-row items-center space-x-7 text-white max-lg:mr-0 mr-72">
            {/* Botón AULA VIRTUAL */}
            <Link
              href="https://campus.ccdcapacitacion.edu.pe/login/index.php"
              target="_blank"
              className="relative text-lg border-[3px] border-white group py-3 px-7 bg-white/30 text-white font-bold  hover:border-black transition-all 
    duration-300 rounded-2xl flex items-center justify-center whitespace-nowrap max-sm:hidden"
            >
              Aula Virtual
            </Link>

            {/* Ícono de usuario */}
            <IoCart className="text-4xl text-white flex-shrink-0" />
            <FaUser className="text-3xl text-white flex-shrink-0" />
          
          </div>

        </div>


        {/* Menú desplegable para móvil */}
        <div className="inset-0 flex-1 relative ">
          {/* Capa de desenfoque detrás del contenido */}
          <div
            className={`fixed inset-0 bg-black/50 z-[99999999999]  ${menuOpen ? "block" : "hidden"
              }`}
          >
            <div className="absolute inset-0 bg-transparent filter blur-lg"></div>
          </div>

          {/* Botón de cierre fuera del menú, visible solo cuando el menú está abierto */}
          <button
            onClick={toggleMenu}
            className={`fixed top-4 left-[77%] text-black text-3xl focus:outline-none z-[99999999999] transition-transform duration-500 ease-in-out ${menuOpen ? "block" : "hidden"
              }
            `}
          >
            <AiOutlineClose className="bg-white rounded-full p-2 w-10 h-10" />
          </button>

          {/* Menú desplegable */}
          <div
            className={`w-[75%] fixed z-[99999999999]   inset-0 bg-white text-white flex flex-col justify-start p-8 items-start  h-screen transform ${menuOpen ? "translate-x-0" : "-translate-x-full"
              } transition-transform duration-500 ease-in-out`}
          >
            {/* Menú principal */}
            {!subMenuOpen && !secondMenuOpen ? (
              <ul className="flex flex-col space-y-6 text-xl w-full">
                <li className="w-full">
                  <Link
                    onClick={toggleMenu}
                    href="/"
                    className="relative group md:text-xs xl:text-base  transition-all duration-300 flex justify-between text-[#05abdd]"
                  >
                    INICIO <IoIosArrowForward />
                    <span className="absolute left-0 bottom-[-4px] w-0 h-[3px] bg-gradient-to-r from-transparent  via-yellow-500 to-yellow-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li className="w-full">
                  <Link
                    onClick={toggleMenu}
                    href="/"
                    className="relative group md:text-xs xl:text-base  transition-all duration-300 flex justify-between text-[#05abdd]"
                  >
                    NIVELES <IoIosArrowForward />
                    <span className="absolute left-0 bottom-[-4px] w-0 h-[3px] bg-gradient-to-r from-transparent  via-yellow-500 to-yellow-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>

                <li>
                  <div
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter("escuelas")}
                    onMouseLeave={handleMouseLeave}
                    onClick={toggleSubMenu}
                  >
                    <button className="    md:text-xs xl:text-base flex items-center gap-2 hover:text-cyanIngenia justify-between w-full text-[#05abdd]">
                      EMABAJADORES
                      <IoIosArrowForward />
                    </button>
                  </div>
                </li>
                <li>
                  <Link
                    onClick={toggleMenu}
                    href="/nosotros"
                    className="relative group md:text-xs xl:text-base text-[#05abdd] transition-all duration-300 flex justify-between"
                  >
                    RANKING <IoIosArrowForward />
                    <span className="absolute left-0 bottom-[-4px] w-0 h-[3px] bg-gradient-to-r from-transparent via-yellow-500 to-yellow-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={toggleMenu}
                    href="/corporativo"
                    className="relative group md:text-xs xl:text-base text-[#05abdd] transition-all duration-300 flex justify-between"
                  >
                    PREMIOS
                    <IoIosArrowForward />
                    <span className="absolute left-0 bottom-[-4px] w-0 h-[3px] bg-gradient-to-r from-transparent via-yellow-500 to-yellow-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={toggleMenu}
                    href="/promociones"
                    className="relative group md:text-xs xl:text-base text-amber-500 font-bold hover:text-colors-cyan-ccd transition-all duration-300 flex justify-between items-center"
                  >
                    PROMOCIONES
                    <IoIosArrowForward />
                    <span className="absolute left-0 bottom-[-4px] w-0 h-[3px] bg-gradient-to-r from-transparent via-yellow-500 to-yellow-600 transition-all duration-300 group-hover:w-full "></span>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={toggleMenu}
                    href="https://campus.ccdcapacitacion.edu.pe/login/index.php"
                    target="_blank"
                    className="relative group md:text-xs xl:text-base md:px-2 xl:px-4 py-3 bg-yellow-500 text-white font-bold hover:bg-blue-800 hover:text-white border-2 border-transparent hover:border-white transition-all duration-300 rounded-xl px-4"
                  >
                    AULA VIRTUAL
                  </Link>
                </li>


          
              </ul>
            ) : subMenuOpen &&
              !innerSubMenuOpen &&
              !secondSubMenuOpen &&
              !treeSubMenuOpen ? (
              // Primer submenú
              <div className="flex flex-col space-y-6 text-xl">
                <button
                  onClick={toggleSubMenu}
                  className="hover:text-gray-400 flex gap-4 items-center"
                >
                  <MdArrowBackIosNew className="text-3xl p" /> ATRAS
                </button>
                <ul className="flex flex-col space-y-6 pl-5">
                  <li>
                    <button
                      onClick={toggleInnerSubMenu}
                      className="hover:text-gray-400 flex items-center gap-4 text-xl"
                    >
                      <div className=" flex items-center justify-center w-10 h-10 rounded-full outline outline-[1.5px] outline-cyanIngenia">
                        <Image
                          width={800}
                          height={800}
                          src={images.ingenieria}
                          alt="Icono Gestión"
                          className="text-white text-[2px] p-[5px] -translate-y-[2.5px]"
                        />
                      </div>
                      Ingenieria
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={toggleSecondSubMenu}
                      className="hover:text-gray-400 flex items-center gap-4 text-xl"
                    >
                      <div className=" flex items-center justify-center w-10 h-10 rounded-full outline outline-[1.5px] outline-red-500">
                        <Image
                          width={800}
                          height={800}
                          src={images.gestion}
                          alt="Icono Gestión"
                          className="text-white text-[2px] p-[5px] -translate-y-[2.5px]"
                        />
                      </div>
                      Gestion publica
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={toggleTreeSubMenu}
                      className="hover:text-gray-400 flex items-center gap-4 text-xl"
                    >
                      <div className=" flex items-center justify-center w-10 h-10 rounded-full outline outline-[1.5px] outline-orange-500">
                        <Image
                          src={images.mineria}
                          alt="Icono Gestión"
                          className="text-white text-[2px] p-[5px] -translate-y-[2.5px]"
                          width={800}
                          height={800}
                        />
                      </div>
                      Mineria
                    </button>
                  </li>
                </ul>
              </div>
            ) : innerSubMenuOpen ? (
              // Segundo submenú (primer nivel interno)
              <div className="flex flex-col space-y-6 text-xl">
                <button
                  onClick={toggleInnerSubMenu}
                  className="hover:text-gray-400 flex gap-4 items-center"
                >
                  <MdArrowBackIosNew className="text-3xl p" /> ESCUELAS
                </button>
                <ul className="flex flex-col space-y-6">
                  <li className="flex items-center gap-2">
                    <BiSolidRightArrow className="text-colors-cyan-ccd w-5 h-5 flex-shrink-0" />
                    <Link
                      href="/ingenieria"
                      className="block hover:text-cyanIngenia"
                    >
                      Civil
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <BiSolidRightArrow className="text-colors-cyan-ccd w-5 h-5 flex-shrink-0" />
                    <Link
                      href="/ingenieria"
                      className="block hover:text-cyanIngenia"
                    >
                      Software y Ciberseguridad
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <BiSolidRightArrow className="text-colors-cyan-ccd w-5 h-5 flex-shrink-0" />
                    <Link
                      href="/ingenieria"
                      className="block hover:text-cyanIngenia"
                    >
                      Industrial y Procesos
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <BiSolidRightArrow className="text-colors-cyan-ccd w-5 h-5 flex-shrink-0" />
                    <Link
                      href="/ingenieria"
                      className="block hover:text-cyanIngenia"
                    >
                      Ambiental y Energias Renovables
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <BiSolidRightArrow className="text-colors-cyan-ccd w-5 h-5 flex-shrink-0" />
                    <Link
                      href="/ingenieria"
                      className="block hover:text-cyanIngenia"
                    >
                      Ingeniería Estructura y Geotécnica
                    </Link>
                  </li>
                </ul>
              </div>
            ) : secondSubMenuOpen ? (
              // Submenú para Minería
              <div className="flex flex-col space-y-6 text-xl">
                <button
                  onClick={toggleSecondSubMenu}
                  className="hover:text-gray-400 flex gap-4 items-center"
                >
                  <MdArrowBackIosNew className="text-3xl p" /> ESCUELAS
                </button>
                <ul className="flex flex-col gap-2">
                  <li className="flex items-start gap-2">
                    <BiSolidRightArrow className="text-colors-cyan-ccd w-5 h-5 flex-shrink-0" />
                    <Link
                      href="/gestion"
                      className="block hover:text-cyanIngenia"
                    >
                      Contrataciones y Compras Públicas
                    </Link>
                  </li>
                  <li className="flex items-start gap-2">
                    <BiSolidRightArrow className="text-colors-cyan-ccd w-5 h-5 flex-shrink-0" />
                    <Link
                      href="/gestion"
                      className="block hover:text-cyanIngenia"
                    >
                      Planeamiento Estratégico y Gestión de Desarrollo
                    </Link>
                  </li>
                  <li className="flex items-start gap-2">
                    <BiSolidRightArrow className="text-colors-cyan-ccd w-5 h-5 flex-shrink-0" />
                    <Link
                      href="/gestion"
                      className="block hover:text-cyanIngenia"
                    >
                      Gestión Financiera y Administrativa
                    </Link>
                  </li>
                  <li className="flex items-start gap-2">
                    <BiSolidRightArrow className="text-colors-cyan-ccd w-5 h-5 flex-shrink-0" />
                    <Link
                      href="/gestion"
                      className="block hover:text-cyanIngenia"
                    >
                      Administración Documentaría y Atención al Ciudadano
                    </Link>
                  </li>
                  <li className="flex items-start gap-2">
                    <BiSolidRightArrow className="text-colors-cyan-ccd w-5 h-5 flex-shrink-0" />
                    <Link
                      href="/gestion"
                      className="block hover:text-cyanIngenia"
                    >
                      Gestión de Recursos Humanos en el Sector Público
                    </Link>
                  </li>
                  <li className="flex items-start gap-2">
                    <BiSolidRightArrow className="text-colors-cyan-ccd w-5 h-5 flex-shrink-0" />
                    <Link
                      href="/gestion"
                      className="block hover:text-cyanIngenia"
                    >
                      Tecnología en el Sector Público
                    </Link>
                  </li>
                </ul>
              </div>
            ) : treeSubMenuOpen ? (
              // Submenú de Minería
              <div className="flex flex-col space-y-6 text-xl">
                <button
                  onClick={toggleTreeSubMenu}
                  className="hover:text-gray-400 flex gap-4 items-center"
                >
                  <MdArrowBackIosNew className="text-3xl p" /> ESCUELAS
                </button>
                <ul className="flex flex-col space-y-6">
                  <li className="flex items-start gap-2">
                    <BiSolidRightArrow className="text-colors-cyan-ccd w-5 h-5 flex-shrink-0" />
                    <Link
                      href="/mineria"
                      className="block hover:text-cyanIngenia"
                    >
                      Control de operaciones mineras
                    </Link>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </nav>
  
    </>
  );
};
export default Navbar;
