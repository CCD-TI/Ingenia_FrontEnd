'use client';
import { FormEvent, useState } from 'react';
import forge from 'node-forge';
import Swal from 'sweetalert2'

export default function LoginForm() {
  const [dni, setDni] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(''); // Resetear el error al intentar nuevamente

    if (!/^\d{8}$/.test(dni)) {
      setError('El DNI debe tener exactamente 8 dígitos.');
      return;
    }

    try {
      const publicKeyPem = process.env.NEXT_PUBLIC_RSA_PUBLIC_KEY!;
      const publicKey = forge.pki.publicKeyFromPem(publicKeyPem);

      const payload = JSON.stringify({ username: dni, password });
      const encryptedData = window.btoa(publicKey.encrypt(payload, 'RSA-OAEP'));

      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/usuarios/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ d4ta: encryptedData }),
      });

      const data = await response.json();

      if (response.status === 401) {
        setError('Usuario o contraseña incorrectas');
        return;
      }

      if (!response.ok) {
        setError(data.error || 'Error al iniciar sesión');
        return;
      }

      console.log('Login exitoso:', data);
      Swal.fire({
          title: "INICIO DE SESIÓN EXITOSO",
          icon: "success",
          draggable: true
        });
      localStorage.setItem('token', data.token);
      
      // Redirección o manejo post-login aquí
    } catch (error) {
      console.error('Error:', error);
      setError('Error al conectar con el servidor.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Iniciar Sesión</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">DNI</label>
        <input
          type="text"
          value={dni}
          onChange={(e) => {
            setDni(e.target.value);
            setError(''); // Limpiar error al editar
          }}
          maxLength={8}
          pattern="\d{8}"
          inputMode="numeric"
          className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="Ingresa tu DNI (8 dígitos)"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError(''); // Limpiar error al editar
          }}
          className="w-full px-4 py-2 border border-gray-300 text-black rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="Ingresa tu contraseña"
          required
        />
        {error && (
          <p className="mt-1 text-sm text-red-600">{error}</p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
            Recordarme
          </label>
        </div>
        <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
          ¿Olvidaste tu contraseña?
        </a>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Ingresar
      </button>

      <div className="relative mt-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">o Inicia Sesión con:</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <button
          type="button"
          className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Continuar con Google
        </button>
        <button
          type="button"
          className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Continuar con Facebook
        </button>
      </div>
    </form>
  );
}