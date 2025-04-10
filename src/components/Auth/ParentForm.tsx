'use client';
import { useState } from 'react';

type ParentData = {
  firstName: string;
  lastName: string;
  dni: string;
  relationship: string;
  email: string;
};

type ChildData = {
  firstName: string;
  lastName: string;
  dni: string;
};

export default function ParentForm({ dni, onBack }: { dni: string; onBack: () => void }) {
  const [parentData, setParentData] = useState<ParentData>({
    firstName: 'Juan Carlos',
    lastName: 'Mendoza López',
    dni: dni,
    relationship: 'Padre',
    email: 'jcmendoza4790@example.com'
  });
  
  const [children, setChildren] = useState<ChildData[]>([]);
  const [newChild, setNewChild] = useState<ChildData>({
    firstName: '',
    lastName: '',
    dni: ''
  });

  const handleAddChild = () => {
    if (newChild.firstName && newChild.lastName && newChild.dni) {
      setChildren([...children, newChild]);
      setNewChild({ firstName: '', lastName: '', dni: '' });
    }
  };

  const handleSubmit = (skipChildren: boolean) => {
    const data = {
      parent: parentData,
      children: skipChildren ? [] : children
    };
    console.log('Registering parent:', data);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Completar Registro</h2>
      
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Información Personal</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nombres</label>
            <input
              type="text"
              value={parentData.firstName}
              onChange={(e) => setParentData({...parentData, firstName: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Apellidos</label>
            <input
              type="text"
              value={parentData.lastName}
              onChange={(e) => setParentData({...parentData, lastName: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">DNI</label>
          <input
            type="text"
            value={parentData.dni}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Parentesco</label>
          <input
            type="text"
            value={parentData.relationship}
            onChange={(e) => setParentData({...parentData, relationship: e.target.value})}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-1">Correo Electrónico</h3>
        <input
          type="email"
          value={parentData.email}
          onChange={(e) => setParentData({...parentData, email: e.target.value})}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      
      <div className="pt-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Estudiantes</h3>
        
        <div className="space-y-4 mb-4">
          {children.map((child, index) => (
            <div key={index} className="border border-gray-200 rounded-md p-4">
              <div className="grid grid-cols-2 gap-4 mb-2">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Nombres</label>
                  <p className="text-sm">{child.firstName}</p>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Apellidos</label>
                  <p className="text-sm">{child.lastName}</p>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">DNI</label>
                <p className="text-sm">{child.dni}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="border border-gray-200 rounded-md p-4 bg-gray-50">
          <h4 className="text-sm font-medium text-gray-900 mb-3">Agregar Estudiante</h4>
          <div className="grid grid-cols-2 gap-4 mb-3">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Nombres</label>
              <input
                type="text"
                value={newChild.firstName}
                onChange={(e) => setNewChild({...newChild, firstName: e.target.value})}
                className="w-full px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Apellidos</label>
              <input
                type="text"
                value={newChild.lastName}
                onChange={(e) => setNewChild({...newChild, lastName: e.target.value})}
                className="w-full px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="block text-xs font-medium text-gray-700 mb-1">DNI</label>
            <input
              type="text"
              value={newChild.dni}
              onChange={(e) => setNewChild({...newChild, dni: e.target.value})}
              className="w-full px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="DNI del estudiante"
            />
          </div>
          <button
            onClick={handleAddChild}
            className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
          >
            <span className="text-xl mr-1">+</span> Agregar Estudiante
          </button>
        </div>
      </div>
      
      <div className="flex justify-between pt-6">
        <button
          onClick={onBack}
          className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm text-sm font-medium hover:bg-gray-50"
        >
          Atrás
        </button>
        <div className="space-x-3">
          <button
            onClick={() => handleSubmit(true)}
            className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm text-sm font-medium hover:bg-gray-50"
          >
            Omitir
          </button>
          <button
            onClick={() => handleSubmit(false)}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Registrar
          </button>
        </div>
      </div>
    </div>
  );
}