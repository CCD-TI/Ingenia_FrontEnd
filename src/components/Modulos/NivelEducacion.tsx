import React from "react";

const NivelesEducacion: React.FC = () => {
  return (
    <div className="w-full flex  justify-center items-center py-16   bg-yellowIngenia">
      <div className="max-w-[100rem] w-[90%] mx-auto flex flex-col justify-center  m-6 ">
        <div className="w-fit mx-auto flex flex-col justify-center items-center gap-10">
          <h2 className="text-white text-5xl font-semibold mb-8 text-left w-full">
            Niveles de Educación <br /> en Ingenia College
          </h2>
          <div className="flex justify-center gap-10">
            <div>
              <div className="border-dashed border-2 p-1.5 rounded-3xl">
                <div className="  h-[18rem] w-[15rem] border-gray-300 rounded-lg flex items-end overflow-hidden">
                  <div className="size-full rounded-3xl bg-blue-600"></div>
                </div>
              </div>
              <p className="mt-2 w-full text-center text-2xl font-bold  text-white">
                Primario
              </p>
            </div>
            <div>
              <div className="border-dashed border-2 p-1.5 rounded-3xl">
                <div className="  h-[18rem] w-[15rem] border-gray-300 rounded-lg flex items-end overflow-hidden">
                  <div className="size-full rounded-3xl bg-blue-600"></div>
                </div>
              </div>
              <p className="mt-2 w-full text-center text-2xl font-bold  text-white">
                Secundaria
              </p>
            </div>
            <div>
              <div className="border-dashed border-2 p-1.5 rounded-3xl">
                <div className="  h-[18rem] w-[15rem] border-gray-300 rounded-lg flex items-end overflow-hidden">
                  <div className="size-full rounded-3xl bg-blue-600"></div>
                </div>
              </div>
              <p className="mt-2 w-full text-center text-2xl font-bold  text-white">
                Pre Universitario
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NivelesEducacion;
