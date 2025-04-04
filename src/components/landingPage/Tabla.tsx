"use client";
import { Space_Mono } from "next/font/google";
import Image from "next/image";
import { MdOutlineStarPurple500 } from "react-icons/md";

export default function StudentRanking() {
  const datos = [
    {
      avatar: "/img/corona.png",
      nombre: "carlos",
      grado: "2do",
      nota: "20",
      TiempoE: "1 hora",
      bgg: "",
      puntos: "100",
      bg: "bg-gradient-to-b from-amber-400 via-amber-500 to-amber-700",
      animación: "top",
      textColor: "text-white",
      shadow: "drop-shadow-[0_0_12px_rgba(255,215,0,0.9)]",
    },
    {
      avatar: "/img/martillo.png",
      nombre: "Enrique",
      grado: "2do",
      nota: "20",
      TiempoE: "1 hora",
      puntos: "100",
      bg: "bg-gradient-to-b from-gray-400 via-gray-500 to-gray-900",
      animación: "top",
      textColor: "text-white",
      shadow: "drop-shadow-[0_0_5px_rgba(255,255,255,1)]",
    },
    {
      avatar: "/img/chaleco.png",
      nombre: "chamo",
      grado: "2do",
      nota: "20",
      TiempoE: "1 hora",
      puntos: "100",
      bg: "bg-gradient-to-t from-cyan-900 via-cyan-600 to-cyan-400",
      animación: "top",
      textColor: "text-white",
      shadow: "drop-shadow-[0_0_12px_rgba(0,180,255,1)]",
    },
    {
      avatar: "/img/audifonos.png",
      nombre: "chamo",
      grado: "2do",
      nota: "20",
      TiempoE: "1 hora",
      textColor: "text-black",
      puntos: "100",
      bg: "bg-white",
    },
    {
      avatar: "/img/casco.png",
      nombre: "chamo",
      grado: "2do",
      textColor: "text-black",
      nota: "20",
      TiempoE: "1 hora",
      puntos: "100",
      bg: "bg-white",
    },
    {
      avatar: "/img/casco.png",
      nombre: "chamo",
      grado: "2do",
      textColor: "text-black",
      nota: "20",
      TiempoE: "1 hora",
      puntos: "100",
      bg: "bg-white",
    },
    {
      avatar: "/img/casco.png",
      nombre: "Santi",
      grado: "2do",
      nota: "20",
      textColor: "text-black",
      TiempoE: "1 hora",
      puntos: "100",
      bg: "bg-white",
    },
  ];
  return (
    <div id="ranking" className="bg-red-600 ">
      <div className=" h-full max-w-[100rem] mx-auto flex flex-col items-center w-full  ">
        <div className="bg-white w-full  rounded-xl py-6 max-sm:p-2  border-[3px] border-[#05abdd] ">
          <table className="w-full">
            <thead className="">
              <tr className="text-left border-b-2 border-[#05abdd] w-full">
                <th className="py-2 text-center px-4 max-sm:px-2 max-sm:hidden text-[#05abdd]">
                  Avatar
                </th>
                <th className="py-2 text-center px-4 max-sm:px-2 text-[#05abdd]">Nombre</th>
                <th className="py-2 text-center px-4 max-sm:px-2 text-[#05abdd] ">Grado</th>
                <th className="py-2 text-center px-4 max-sm:px-2 text-[#05abdd] ">Nota</th>
                <th className="py-2 text-center px-4 max-sm:px-2 max-sm:hidden text-[#05abdd]">
                  Tiempo Exámen
                </th>
                <th className="py-2 text-center px-4 max-sm:px-2 text-[#05abdd] ">
                  Puntos
                </th>
              </tr>
            </thead>
            <tbody>
              {datos.map((data, index) => (
                <tr key={index} className="">
                  <td className={`py-2 px-4 max-sm:hidden ${data.bg} `}>
                    <div className=" border-2 w-fit mx-auto rounded-full p-2">
                      <Image
                        src={data.avatar}
                        alt={`Estudiante ${index + 1}`}
                        className="w-10 h-10  max-sm:hidden "
                        width={800}
                        height={800}
                      />
                    </div>
                  </td>
                  <td
                    className={`py-2 px-4 max-sm:px-2 text-center ${data.textColor} font-poppins font-semibold text-xs ${data.bg}`}
                  >
                    {data.nombre}{" "}
                  </td>
                  <td
                    className={`py-2 px-4 max-sm:px-2 text-center ${data.textColor} text-xs font-poppins font-semibold  ${data.bg}`}
                  >
                    2° do
                  </td>
                  <td
                    className={`py-2 px-4 max-sm:px-2 text-center text-xs font-poppins ${data.textColor} font-semibold  ${data.bg}`}
                  >
                    20{" "}
                  </td>
                  <td
                    className={`py-2 px-4 max-sm:px-2 text-center text-xs font-poppins font-semibold ${data.textColor} ${data.bg} max-sm:hidden text-[#167F99] border-collapse border-0 `}
                  >
                    1 hr y 30 min
                  </td>
                  <td
                    className={`py-2 px-4 max-sm:px-2 text-center text-xs  ${data.textColor}font-poppins font-semibold   ${data.bg}`}
                  >
                    {" "}
                    100{" "}
                  </td>
                  <td className={`${data.bg}`}>
                    <div
                      className={`py-[6px]  px-[20px] mt-3 max-sm:px-2 ${data.textColor} font-semibold text-xs  
                      text-white ${data.textColor} flex gap-1 rounded-l-xl ${data.shadow} ${data.bg}`}
                    >
                      {data.animación}
                      <MdOutlineStarPurple500 className="text-white" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
