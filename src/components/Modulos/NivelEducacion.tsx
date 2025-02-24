import React from 'react';

const NivelesEducacion: React.FC = () => {
  return (
    <div className="font-sans text-center p-5 bg-yellowIngenia">
      <h2 className="text-blue-600 text-2xl font-semibold mb-8">Niveles de Educación en Ingenia College</h2>

      <div className="flex justify-center space-x-5">
        {/* Nivel Primaria */}
        <div className="relative">
          <div className="border-2 border-dashed border-gray-300 rounded-lg w-36 h-36 flex items-end overflow-hidden">
            <div className="w-full h-[30%] bg-blue-600"></div>
          </div>
          <p className="mt-2">Primaria</p>
        </div>

        {/* Nivel Secundaria */}
        <div className="relative">
          <div className="border-2 border-dashed border-gray-300 rounded-lg w-36 h-36 flex items-end overflow-hidden">
            <div className="w-full h-[50%] bg-blue-600"></div>
          </div>
          <p className="mt-2">Secundaria</p>
        </div>

        {/* Nivel Pre Universitario */}
        <div className="relative">
          <div className="border-2 border-dashed border-gray-300 rounded-lg w-36 h-36 flex items-end overflow-hidden">
            <div className="w-full h-[20%] bg-blue-600"></div>
          </div>
          <p className="mt-2">Pre Universitario</p>
        </div>
      </div>
    </div>
  );
};

export default NivelesEducacion;