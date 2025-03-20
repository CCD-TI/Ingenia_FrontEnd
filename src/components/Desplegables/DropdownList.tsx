"use client";

import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";

interface DropdownProps {
  TextColor: string;
  BgColor: string;
}

export default function CursosDropdown({ TextColor, BgColor }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)} // Se abre cuando el mouse entra
      onMouseLeave={() => setIsOpen(false)} // Se cierra solo cuando el mouse deja todo el área
    >
      <button
        className={`flex items-center justify-between gap-2 bg-white/20 
        px-6 py-3 w-full md:w-auto shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] border-1 border-white  ${isOpen ? "rounded-t-lg" :"rounded-lg"} `}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Menu className={`${TextColor} text-white h-7 w-7`} />
        <span className={`${TextColor} text-2xl text-white font-extrabold `}>CURSOS</span>
        <ChevronDown
          className={`${TextColor} h-7 w-7 text-white transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute mt-0 w-full bg-white/50 shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] border-2  rounded-b-lg  z-10 p-4 text-white">

          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className={`block ${BgColor} px-4 py-2 hover:bg-slate-400 rounded-md border-2 border-white text-white font-poppins font-semibold text-2xl
               hover:border-none`}
              >
                Curso 1
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block ${BgColor} px-4 py-2 hover:bg-slate-400 rounded-md text-white font-poppins font-semibold text-2xl`}
              >
                Curso 2
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block ${BgColor} px-4 py-2 hover:bg-slate-400 rounded-md text-white font-poppins font-semibold text-2xl`}
              >
                Curso 3
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block ${BgColor} px-4 py-2 hover:bg-slate-400 rounded-md font-poppins font-semibold text-2xl`}
              >
                Curso 4
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
