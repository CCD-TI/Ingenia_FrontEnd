"use client";

import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";

interface DropdownProps {
  TextColor: string;
  BgColor: string;
}

export default function CursosDropdown({ TextColor,BgColor }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between gap-2 bg-white rounded-lg px-6 py-3 w-full md:w-auto"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Menu className={`${TextColor} h-7 w-7`} />
        <span className={`${TextColor} text-xl font-extrabold`}>CURSOS</span>
        <ChevronDown
          className={`${TextColor} h-7 w-7 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-full bg-white rounded-lg shadow-lg z-10 p-4 text-white">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className={`block ${BgColor} px-4 py-2 hover:bg-slate-400 rounded-md text-white`}
              >
                Curso 1
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block ${BgColor} px-4 py-2 hover:bg-slate-400  rounded-md text-white`}
              >
                Curso 2
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block ${BgColor} px-4 py-2 hover:bg-slate-400  rounded-md text-white`}
              >
                Curso 3
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block ${BgColor} px-4 py-2 hover:bg-slate-400  rounded-md`}
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
