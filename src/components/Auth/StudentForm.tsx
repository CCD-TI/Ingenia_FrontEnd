'use client';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'

type Nivel = { IdNivel: number; Nivel: string };
type Grado = { IdGrado: number; Nombre: string; NivelId: number };

type UserData = {
  nombres?: string;
  apPaterno?: string;
  apMaterno?: string;
  correo?: string;
  deDireccion?: string;
  coGenero?: string;
  feNac?: string;
  coUbigeo?: string;
  deUbigeoDep?: string;
  deUbigeoPro?: string;
  deUbigeoDis?: string;
};

type StudentFormProps = {
  dni: string;
  onBack: () => void;
  userData?: UserData;
};

export default function StudentForm({ dni, onBack, userData }: StudentFormProps) {
  const [niveles, setNiveles] = useState<Nivel[]>([]);
  const [grados, setGrados] = useState<Grado[]>([]);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dni: dni,
    correo: '',
    telefono: '',
    nivel: '',
    grado: '',
    apPaterno: '',
    apMaterno: '',
    genero: '',
    ubigeo: '',
    departamento: '',
    provincia: '',
    distrito: '',
    fechaNacimiento: '',
    deDireccion: ''
  });

  useEffect(() => {
    if (userData) {
      setFormData(prev => ({
        ...prev,
        firstName: userData.nombres || '',
        apPaterno: userData.apPaterno || '',
        apMaterno: userData.apMaterno || '',
        lastName: `${userData.apPaterno ?? ''} ${userData.apMaterno ?? ''}`.trim(),
        correo: userData.correo || '',
        genero: userData.coGenero || '',
        fechaNacimiento: userData.feNac || '',
        ubigeo: userData.coUbigeo || '',
        departamento: userData.deUbigeoDep || '',
        provincia: userData.deUbigeoPro || '',
        distrito: userData.deUbigeoDis || '',
        deDireccion: userData.deDireccion || '',
      }));
    }
  }, [userData]);

  useEffect(() => {
    const obtenerNiveles = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Nivel/obtenerNivel`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' }
        });
        if (!res.ok) throw new Error('Error al cargar niveles');
        const data = await res.json();
        setNiveles(data);
      } catch (error) {
        console.error(error);
      }
    };

    obtenerNiveles();
  }, []);

  useEffect(() => {
    const obtenerGrados = async () => {
      if (!formData.nivel) {
        setGrados([]);
        return;
      }

      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Grado/obtenerGradosPorNivel`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ NivelId: parseInt(formData.nivel) })
        });

        if (!res.ok) throw new Error('Error al cargar grados');
        const data = await res.json();
        setGrados(data);
      } catch (error) {
        console.error(error);
      }
    };

    obtenerGrados();
  }, [formData.nivel]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const {
      firstName, lastName, correo, telefono, dni, grado, nivel,
      apPaterno, apMaterno, genero, ubigeo, departamento,
      provincia, distrito, fechaNacimiento, deDireccion
    } = formData;

    if (!firstName || !lastName || !correo || !grado || !nivel) {
      alert("Por favor, complete todos los campos obligatorios");
      return;
    }

    const payload = {
      nombres_alumno: firstName,
      apellidos_alumno: lastName,
      apellido_paterno_alumno: apPaterno,
      apellido_materno_alumno: apMaterno,
      correo,
      telefono,
      dni_alumno: dni,
      genero,
      direccion: deDireccion,
      ubigeo,
      departamento,
      provincia,
      distrito,
      fecha_nacimiento: fechaNacimiento,
      Rol_id: 1,
      Grado_id: parseInt(grado),
      Nivel_id: parseInt(nivel)
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/usuarios/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error('Error al registrar al estudiante');

      const responseData = await res.json();
      console.log('Registro exitoso:', responseData);
      Swal.fire({
        title: "REGISTRADO EXITOSAMENTE\nSU CONTRASEÑA ES SU DNI",
        icon: "success",
        draggable: true
      });
    } catch (error) {
      console.error('Error al registrar:', error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "NO SE PUDO REGISTRAR SU USUARIO",
      });
    }
  };

  return (
    <div className="space-y-6 !text-black">
      <h2 className="text-2xl font-semibold text-gray-900">Registro de Estudiante</h2>

      {/* Nombres */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Nombres</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Apellidos */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Apellidos</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* DNI */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">DNI</label>
        <input
          type="text"
          value={formData.dni}
          readOnly
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
        />
      </div>

      {/* Correo */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
        <input
          type="email"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Numero cel */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Número Telefónico</label>
        <input
          type="tel"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          placeholder="Ej: 987654321"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Nivel */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Nivel</label>
        <select
          name="nivel"
          value={formData.nivel}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Seleccione un nivel</option>
          {niveles.map(nivel => (
            <option key={nivel.IdNivel} value={nivel.IdNivel}>
              {nivel.Nivel}
            </option>
          ))}
        </select>
      </div>

      {/* Grado */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Grado</label>
        <select
          name="grado"
          value={formData.grado}
          onChange={handleChange}
          disabled={!formData.nivel}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Seleccione un grado</option>
          {grados.map(grado => (
            <option key={grado.IdGrado} value={grado.IdGrado}>
              {grado.Nombre}
            </option>
          ))}
        </select>
      </div>

      {/* Botones */}
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