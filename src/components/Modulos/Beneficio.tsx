import Image from "next/image";
import React from "react";

export default function Beneficio() {
  const cursos = [
    {
      name: "Aritmética",
      icon: "https://pub-9d2abfa175714e64aed33b90722a9fd5.r2.dev/Multimedia/Iconos/landing/icono-matematicas.svg",
      bgIcon: "bg-blue-500",
      bg: "bg-blue-800/30",
    },
    {
      name: "Trigometria",
      icon: "https://pub-9d2abfa175714e64aed33b90722a9fd5.r2.dev/Multimedia/Iconos/landing/icono-matematicas.svg",
      bgIcon: "bg-blue-500",
      bg: "bg-blue-800/30",
    },
    {
      name: "Geometria",
      icon: "https://pub-9d2abfa175714e64aed33b90722a9fd5.r2.dev/Multimedia/Iconos/landing/icono-matematicas.svg",
      bgIcon: "bg-blue-500",
      bg: "bg-blue-800/30",
    },
    {
      name: "Algebra",
      icon: "https://pub-9d2abfa175714e64aed33b90722a9fd5.r2.dev/Multimedia/Iconos/landing/icono-matematicas.svg",
      bgIcon: "bg-blue-500",
      bg: "bg-blue-800/30",
    },
    {
      name: "Razonamiento M.",
      icon: "https://pub-9d2abfa175714e64aed33b90722a9fd5.r2.dev/Multimedia/Iconos/landing/icono-matematicas.svg",
      bgIcon: "bg-blue-500",
      bg: "bg-blue-800/30",
    },
    {
      name: "Fisica",
      icon: "https://pub-9d2abfa175714e64aed33b90722a9fd5.r2.dev/Multimedia/Iconos/landing/icono-matematicas.svg",
      bgIcon: "bg-blue-500",
      bg: "bg-blue-800/30",
    },
    {
      name: "Quimica",
      icon: "https://pub-9d2abfa175714e64aed33b90722a9fd5.r2.dev/Multimedia/Iconos/landing/icono-matematicas.svg",
      bgIcon: "bg-blue-500",
      bg: "bg-blue-800/30",
    },
  ];

  return (
    <div className="bg-blue-600">
      <div className="max-w-[100rem] mx-auto flex flex-col justify-center items-center gap-10 py-24">
        <h1 className="text-6xl font-bold">
          Contamos con las principales Materias
        </h1>
        <div>
          <div className="flex flex-grow  gap-10 max-sm:gap-5">
            {cursos.map((curso, index) => (
              <div key={index} className={`${curso.bg} flex items-center gap-5`}>
                <div className={` ${curso.bg}`}>
                  <Image alt="" src={curso.icon} width={60} height={60} />
                </div>
                <h2>{curso.name}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
