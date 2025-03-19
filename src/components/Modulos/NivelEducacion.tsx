import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const NivelesEducacion: React.FC = () => {
  return (
    <div id="niveles" className="w-full flex  justify-center items-center pb-7 bg-black">
      <div className="max-w-[100rem] w-[90%] mx-auto flex flex-col justify-center  m-6 ">
        <div className="w-fit mx-auto flex flex-col justify-center items-center gap-10 ">
          <h2 className="text-5xl font-semibold mb-8 w-full text-center uppercase text-[#05abdd]">
            Niveles de Educación <br /><span className="text-yellowIngenia">en Ingenia College</span> 
          </h2>
          <div className="flex flex-wrap justify-center gap-10">
            <div className="">
              <div className="border-dashed border-2 p-1.5 rounded-3xl">
                <div className="  h-[18rem] w-[15rem] border-gray-300 rounded-lg flex items-end overflow-hidden">
                  <div className="size-full rounded-3xl bg-blue-600"></div>
                </div>
              </div>
              <p className="mt-2 w-full text-start pl-4 font-poppins font-black text-[#05abdd] uppercase">
                Nivel Primario
              </p>
              <p className="text-[#7f7f7f] text-start pl-4 flex items-center gap-[120px] font-poppins font-medium">
                Conocer más <FaArrowRightLong className="text-[#7f7f7f]" />
              </p>
            </div>
            <div className="">
              <div className="border-dashed border-2 p-1.5 rounded-3xl">
                <div className="  h-[18rem] w-[15rem] border-gray-300 rounded-lg flex items-end overflow-hidden">
                  <div className="size-full rounded-3xl bg-blue-600"></div>
                </div>
              </div>
              <p className="mt-2 w-full text-start pl-4 text-1xl font-poppins font-black text-yellowIngenia uppercase">
                nivel Secundario 
              </p>
              <p className="text-[#7f7f7f] text-start pl-4 flex items-center gap-[120px] font-poppins font-medium">
                Conocer más <FaArrowRightLong className="text-[#7f7f7f]" />
              </p>
            </div>
            <div className="">
              <div className="border-dashed border-2 p-1.5 rounded-3xl">
                <div className="  h-[18rem] w-[15rem] border-gray-300 rounded-lg flex items-end overflow-hidden">
                  <div className="size-full rounded-3xl bg-blue-600"></div>
                </div>
              </div>
              <p className="mt-2 w-full text-start pl-4 text-1xl font-poppins font-black text-[#05abdd] uppercase">
                Pre Universitario  <br /> 
              </p>
              <p className="text-[#7f7f7f] text-start pl-4 font-poppins font-medium">
                Conocer más
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NivelesEducacion;
