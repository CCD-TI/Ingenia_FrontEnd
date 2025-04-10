'use client';
import { useState } from 'react';

type DniStepProps = {
  onSubmit: (dni: string, role: 'parent' | 'student') => void;
  onBack: () => void;
};

export default function DniStep({ onSubmit, onBack }: DniStepProps) {
  const [dni, setDni] = useState('');
  const [role, setRole] = useState<'parent' | 'student' | null>(null);

  const handleSubmit = () => {
    if (dni && role) {
      onSubmit(dni, role);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Crear Cuenta</h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">DNI</label>
        <input
          type="text"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 text-black rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="Ingresa tu DNI"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Usuario</label>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              id="parent"
              name="role"
              type="radio"
              checked={role === 'parent'}
              onChange={() => setRole('parent')}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="parent" className="ml-2 block text-sm text-gray-700">
              Padre/Apoderado
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="student"
              name="role"
              type="radio"
              checked={role === 'student'}
              onChange={() => setRole('student')}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="student" className="ml-2 block text-sm text-gray-700">
              Estudiante
            </label>
          </div>
        </div>
      </div>
      
      <button
        onClick={handleSubmit}
        disabled={!dni || !role}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300"
      >
        Continuar
      </button>
      
      {/* <button
        onClick={onBack}
        className="w-full text-center text-sm text-blue-600 hover:text-blue-500"
      >
        ¿Ya tienes cuenta? Iniciar sesión
      </button> */}
    </div>
  );
}