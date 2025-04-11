'use client';
import { useEffect, useState } from 'react';

type StudentFormProps = {
  dni: string;
  onBack: () => void;
  userData?: {
    nombres?: string;
    apellidos?: string;
    correo?: string;
  };
};

export default function StudentForm({ dni, onBack, userData }: StudentFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dni: dni,
    correo: '',
    grado: '',
    seccion: ''
  });

  useEffect(() => {
    if (userData) {
      setFormData(prev => ({
        ...prev,
        firstName: userData.nombres || '',  // Autocompletar con el campo "nombres"
        lastName: userData.apellidos || '', // Autocompletar con el campo "apellidos"
        correo: userData.correo || '',
      }));
    }
  }, [userData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // Aquí puedes agregar validaciones antes de enviar el formulario
    if (!formData.firstName || !formData.lastName || !formData.correo || !formData.grado || !formData.seccion) {
      alert("Por favor, complete todos los campos");
      return;
    }
    console.log('Estudiante Registrado:', formData);
    // Aquí puedes hacer la lógica para enviar los datos al servidor
  };

  return (
    <div className="space-y-6 !text-black">
      <h2 className="text-2xl font-semibold text-gray-900">Registro de Estudiante</h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Nombres</label>
        <input
          type="text"
          value={formData.firstName}
          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Apellidos</label>
        <input
          type="text"
          value={formData.lastName}
          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">DNI</label>
        <input
          type="text"
          value={formData.dni}
          readOnly
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
        <input
          type="email"
          value={formData.correo}
          onChange={(e) => setFormData({...formData, correo: e.target.value})}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Grado</label>
          <input
            type="text"
            value={formData.grado}
            onChange={(e) => setFormData({...formData, grado: e.target.value})}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Sección</label>
          <input
            type="text"
            value={formData.seccion}
            onChange={(e) => setFormData({...formData, seccion: e.target.value})}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
      
      <div className="flex justify-between pt-6">
        <button
          onClick={onBack}
          className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm text-sm font-medium hover:bg-gray-50"
        >
          Atrás
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          Registrar
        </button>
      </div>
    </div>
  );
}