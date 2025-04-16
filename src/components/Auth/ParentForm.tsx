'use client';
import { useState, useEffect } from 'react';
import forge from 'node-forge';

type Nivel = {
  id: number;
  nombre: string;
};

type Grado = {
  id: number;
  nombre: string;
  nivel_id: number;
};

type UserData = {
  nombres?: string;
  apellidos?: string;
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

type ParentData = {
  firstName: string;
  lastName: string;
  dni: string;
  relationship: string;
  email: string;
  telefono: string;
  apPaterno: string;
  apMaterno: string;
  genero: string;
  direccion: string;
  ubigeo: string;
  departamento: string;
  provincia: string;
  distrito: string;
  fechaNacimiento: string;
};

type ChildData = {
  firstName: string;
  lastName: string;
  dni: string;
  nivel?: string;
  grado?: string;
  apPaterno: string;
  apMaterno: string;
  genero: string;
  direccion: string;
  ubigeo: string;
  departamento: string;
  provincia: string;
  distrito: string;
  fechaNacimiento: string;
  correo: string;
  telefono: string;
};

type ParentFormProps = {
  dni: string;
  onBack: () => void;
  userData?: UserData;
};

export default function ParentForm({ dni, onBack, userData }: ParentFormProps) {
  const [niveles, setNiveles] = useState<Nivel[]>([]);
  const [grados, setGrados] = useState<Grado[]>([]);
  const [parentData, setParentData] = useState<ParentData>({
    firstName: userData?.nombres || '',
    lastName: userData?.apellidos || '',
    dni: dni,
    relationship: 'Padre',
    email: userData?.correo || '',
    telefono: '',
    apPaterno: userData?.apPaterno || '',
    apMaterno: userData?.apMaterno || '',
    genero: userData?.coGenero || 'M',
    direccion: userData?.deDireccion || '',
    ubigeo: userData?.coUbigeo || '',
    departamento: userData?.deUbigeoDep || '',
    provincia: userData?.deUbigeoPro || '',
    distrito: userData?.deUbigeoDis || '',
    fechaNacimiento: userData?.feNac || ''
  });

  const [children, setChildren] = useState<ChildData[]>([]);
  const [newChild, setNewChild] = useState<Omit<ChildData, 'correo' | 'telefono'>>({
    firstName: '',
    lastName: '',
    dni: '',
    nivel: '',
    grado: '',
    apPaterno: userData?.apPaterno || '',
    apMaterno: userData?.apMaterno || '',
    genero: userData?.coGenero || 'M',
    direccion: userData?.deDireccion || '',
    ubigeo: userData?.coUbigeo || '',
    departamento: userData?.deUbigeoDep || '',
    provincia: userData?.deUbigeoPro || '',
    distrito: userData?.deUbigeoDis || '',
    fechaNacimiento: userData?.feNac || ''
  });

  const [isValidatingDni, setIsValidatingDni] = useState(false);
  const [loadingNiveles, setLoadingNiveles] = useState(true);
  const [loadingGrados, setLoadingGrados] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [childData, setChildData] = useState<ChildData>({
    dni: '',
    firstName: '',
    lastName: '',
    apPaterno: '',
    apMaterno: '',
    nivel: '',
    grado: '',
    genero: '',
    direccion: '',
    ubigeo: '',
    departamento: '',
    provincia: '',
    distrito: '',
    fechaNacimiento: '',
    correo: '',
    telefono: ''
  });
  
  // Función para validar DNI del estudiante
  const validateStudentDni = async (dniValue: string) => {
    if (!dniValue || dniValue.length !== 8 || !/^\d+$/.test(dniValue)) return;

    setIsValidatingDni(true);
    try {
      const publicKeyPem = process.env.NEXT_PUBLIC_RSA_PUBLIC_KEY!.replace(/\\n/g, '\n');
      const publicKey = forge.pki.publicKeyFromPem(publicKeyPem);
      const payload = {
        numdni: dniValue,
        role: 'student',
        timestamp: Date.now()
      };
      
      const encrypted = publicKey.encrypt(
        JSON.stringify(payload), 
        'RSA-OAEP', 
        { md: forge.md.sha256.create() }
      );
      const base64Encrypted = forge.util.encode64(encrypted);
      
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/usuarios/validar-datos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ d4ta: base64Encrypted }),
      });
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Error al consultar el DNI');
      }
      
      const result = await res.json();
      
      setNewChild(prev => ({
        ...prev,
        firstName: result.nombres || '',
        lastName: result.apellidos || '',
        apPaterno: result.apPaterno || '',
        apMaterno: result.apMaterno || '',
        genero: result.coGenero || prev.genero,
        direccion: result.deDireccion || prev.direccion,
        ubigeo: result.coUbigeo || prev.ubigeo,
        departamento: result.deUbigeoDep || prev.departamento,
        provincia: result.deUbigeoPro || prev.provincia,
        distrito: result.deUbigeoDis || prev.distrito,
        fechaNacimiento: result.feNac || prev.fechaNacimiento
      }));
      
    } catch (error) {
      console.error('Error validando DNI:', error);
      alert(`Error al validar DNI: ${error instanceof Error ? error.message : 'Error desconocido'}`);
    } finally {
      setIsValidatingDni(false);
    }
  };

  // Cargar niveles desde la API
  const loadNiveles = async () => {
    setLoadingNiveles(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Nivel/obtenerNivel`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });

      if (!res.ok) throw new Error('Error al cargar niveles');

      const data = await res.json();
      
      const nivelesData = data.map((item: any) => ({
        id: item.id || item.IdNivel || item.ID_NIVEL,
        nombre: item.nombre || item.Nivel || item.NOMBRE
      }));
      
      setNiveles(nivelesData);
    } catch (error) {
      console.error('Error cargando niveles:', error);
      alert('Error al cargar los niveles. Por favor intente más tarde.');
    } finally {
      setLoadingNiveles(false);
    }
  };


  // Cargar grados por nivel desde la API
  const loadGrados = async (nivelId: number) => {
    if (!nivelId) {
      setGrados([]);
      return;
    }

    setLoadingGrados(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Grado/obtenerGradosPorNivel`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ NivelId: nivelId })
      });

      if (!res.ok) throw new Error('Error al cargar grados');

      const data = await res.json();
      
      const gradosData = data.map((item: any) => ({
        id: item.id || item.IdGrado || item.ID_GRADO,
        nombre: item.nombre || item.Nombre || item.NOMBRE,
        nivel_id: item.nivel_id || item.Nivel_id || item.ID_NIVEL
      }));
      
      setGrados(gradosData);
    } catch (error) {
      console.error('Error cargando grados:', error);
      alert('Error al cargar los grados. Por favor intente más tarde.');
    } finally {
      setLoadingGrados(false);
    }
  };

  useEffect(() => {
    loadNiveles();
  }, []);

  useEffect(() => {
    if (newChild.nivel) {
      loadGrados(parseInt(newChild.nivel));
    }
  }, [newChild.nivel]);

  const handleAddChild = () => {
    if (newChild.firstName && newChild.lastName && newChild.dni) {
      setChildren([...children, {
        ...newChild,
        nivel: newChild.nivel || undefined,
        grado: newChild.grado || undefined,
        correo: parentData.email,
        telefono: parentData.telefono
      }]);
      setNewChild({ 
        firstName: '', 
        lastName: '', 
        dni: '', 
        nivel: '', 
        grado: '',
        apPaterno: userData?.apPaterno || '',
        apMaterno: userData?.apMaterno || '',
        genero: userData?.coGenero || 'M',
        direccion: userData?.deDireccion || '',
        ubigeo: userData?.coUbigeo || '',
        departamento: userData?.deUbigeoDep || '',
        provincia: userData?.deUbigeoPro || '',
        distrito: userData?.deUbigeoDis || '',
        fechaNacimiento: userData?.feNac || ''
      });
    }
  };

  const handleSubmit = async (skipChildren: boolean) => {
    setIsSubmitting(true);
    setSubmitError('');
  
    try {
      // 1. Validar datos mínimos del padre
      if (!parentData.firstName || !parentData.lastName || !parentData.email || !parentData.telefono) {
        throw new Error('Complete todos los datos requeridos del padre');
      }
  
      // 2. Validar hijos si no se está omitiendo
      if (!skipChildren && children.length === 0 && !childData.dni) {
        const shouldContinue = confirm('¿Desea registrarse sin agregar estudiantes? Puede agregarlos luego.');
        if (!shouldContinue) {
          setIsSubmitting(false);
          return;
        }
      }
  
      // 3. Preparar lista final de hijos
      const hijosFinales = [...children];
  
      // Si hay datos en el formulario de hijo y aún no fue agregado, lo añadimos
      if (
        !skipChildren &&
        childData.dni &&
        !children.some(c => c.dni === childData.dni)
      ) {
        hijosFinales.push(childData);
      }
  
      // 4. Preparar payload
      const payload = {
        // Datos del padre
        nombres_padre: parentData.firstName,
        apellidos_padre: parentData.lastName,
        apellido_paterno_padre: parentData.apPaterno,
        apellido_materno_padre: parentData.apMaterno,
        correo: parentData.email,
        telefono: parentData.telefono,
        dni_padre: parentData.dni,
        genero: parentData.genero,
        direccion: parentData.direccion,
        ubigeo: parentData.ubigeo,
        departamento: parentData.departamento,
        provincia: parentData.provincia,
        distrito: parentData.distrito,
        fecha_nacimiento: parentData.fechaNacimiento,
        Rol_id: 2,
  
        // Datos de hijos (puede ser array vacío)
        hijos: skipChildren
          ? []
          : hijosFinales.map(child => ({
              dni_alumno: child.dni,
              nombres_alumno: child.firstName,
              apellidos_alumno: child.lastName,
              apellido_paterno_alumno: child.apPaterno,
              apellido_materno_alumno: child.apMaterno,
              Nivel_id: child.nivel ? parseInt(child.nivel) : null,
              Grado_id: child.grado ? parseInt(child.grado) : null,
              genero: child.genero,
              direccion: child.direccion,
              ubigeo: child.ubigeo,
              departamento: child.departamento,
              provincia: child.provincia,
              distrito: child.distrito,
              fecha_nacimiento: child.fechaNacimiento,
              correo: child.correo,
              telefono: child.telefono
            }))
      };
  
      console.log('Enviando datos:', payload);
  
      // 5. Enviar al backend
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/usuarios/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error en el registro');
      }
  
      const result = await response.json();
      console.log('Registro exitoso:', result);
  
      // 6. Mostrar feedback
      if (skipChildren || hijosFinales.length === 0) {
        alert('Registro como padre completado. Puede agregar estudiantes después.');
      } else {
        alert(`Registro completado con ${hijosFinales.length} estudiante(s) asociado(s)`);
      }
  
      // Redirección opcional
      // window.location.href = '/dashboard';
    } catch (error) {
      console.error('Error en el registro:', error);
      setSubmitError(error instanceof Error ? error.message : 'Ocurrió un error al registrar');
    } finally {
      setIsSubmitting(false);
    }
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Apellidos</label>
            <input
              type="text"
              value={parentData.lastName}
              onChange={(e) => setParentData({...parentData, lastName: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black"
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">DNI</label>
          <input
            type="text"
            value={parentData.dni}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-black"
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Parentesco</label>
          <input
            type="text"
            value={parentData.relationship}
            onChange={(e) => setParentData({...parentData, relationship: e.target.value})}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black"
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-1">Correo Electrónico</h3>
        <input
          type="email"
          value={parentData.email}
          onChange={(e) => setParentData({...parentData, email: e.target.value})}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">Número de Celular</label>
        <input
          type="tel"
          name="telefono"
          value={parentData.telefono}
          onChange={(e) => setParentData({ ...parentData, telefono: e.target.value })}
          placeholder="Ej: 987654321"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black"
        />
      </div>
      
      <div className="pt-6">
  <h3 className="text-lg font-medium text-gray-900 mb-4">Estudiantes</h3>

  {/* Lista de estudiantes */}
  <div className="space-y-4 mb-4">
    {children.map((child, index) => (
      <div key={index} className="border border-gray-200 rounded-md p-4">
        <div className="grid grid-cols-2 gap-4 mb-2">
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">DNI</label>
            <p className="text-sm text-black">{child.dni}</p>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">Nombres</label>
            <p className="text-sm text-black">{child.firstName}</p>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">Apellidos</label>
            <p className="text-sm text-black">{child.lastName}</p>
          </div>
          {child.nivel && (
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Nivel</label>
              <p className="text-sm text-black">
                {niveles.find(n => n.id.toString() === child.nivel)?.nombre || child.nivel}
              </p>
            </div>
          )}
          {child.grado && (
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Grado</label>
              <p className="text-sm text-black">
                {grados.find(g => g.id.toString() === child.grado)?.nombre || child.grado}
              </p>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>

  {/* Formulario para agregar estudiante */}
  <div className="border border-gray-200 rounded-md p-4 bg-gray-50">
    <h4 className="text-sm font-medium text-gray-900 mb-3">Agregar Estudiante</h4>

    {/* DNI */}
    <div className="mb-3">
      <label className="block text-xs font-medium text-gray-700 mb-1">DNI</label>
      <input
        type="text"
        value={newChild.dni}
        onChange={async (e) => {
          const dniValue = e.target.value.replace(/\D/g, '').slice(0, 8);
          setNewChild({ ...newChild, dni: dniValue });
          if (dniValue.length === 8) {
            await validateStudentDni(dniValue);
          }
        }}
        maxLength={8}
        className="w-full px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500 text-black"
        placeholder="Ingrese DNI (8 dígitos)"
        disabled={isValidatingDni}
      />
      {isValidatingDni && (
        <p className="text-xs text-gray-500 mt-1">Validando DNI...</p>
      )}
    </div>

    {/* Nombres y Apellidos */}
    <div className="grid grid-cols-2 gap-4 mb-3">
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">Nombres</label>
        <input
          type="text"
          value={newChild.firstName}
          onChange={(e) => setNewChild({ ...newChild, firstName: e.target.value })}
          className="w-full px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500 text-black"
          disabled={isValidatingDni}
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">Apellidos</label>
        <input
          type="text"
          value={newChild.lastName}
          onChange={(e) => setNewChild({ ...newChild, lastName: e.target.value })}
          className="w-full px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500 text-black"
          disabled={isValidatingDni}
        />
      </div>
    </div>

    {/* Nivel y Grado */}
    <div className="grid grid-cols-2 gap-4 mb-3">
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">Nivel</label>
        <select
          value={newChild.nivel}
          onChange={(e) => setNewChild({ ...newChild, nivel: e.target.value, grado: '' })}
          className="w-full px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500 text-black"
          disabled={isValidatingDni || loadingNiveles}
        >
          <option value="">{loadingNiveles ? "Cargando niveles..." : "Seleccionar nivel"}</option>
          {niveles.map(n => (
            <option key={n.id} value={n.id}>{n.nombre}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">Grado</label>
        <select
          value={newChild.grado}
          onChange={(e) => setNewChild({ ...newChild, grado: e.target.value })}
          disabled={!newChild.nivel || isValidatingDni || loadingGrados}
          className="w-full px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500 text-black"
        >
          <option value="">{loadingGrados ? "Cargando grados..." : "Seleccionar grado"}</option>
          {grados.map(g => (
            <option key={g.id} value={g.id}>{g.nombre}</option>
          ))}
        </select>
      </div>
    </div>

    {/* Botón agregar */}
    <button
      onClick={handleAddChild}
      disabled={!newChild.firstName || !newChild.lastName || !newChild.dni || isValidatingDni}
      className="text-sm text-blue-600 hover:text-blue-800 flex items-center disabled:text-gray-400 disabled:cursor-not-allowed"
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