'use client';
import { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterFlow from './RegisterFlow';

export default function AuthContainer() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Digital<br />College
          </h1>
        </div>

        {isLogin ? (
          <>
            <LoginForm />
            <div className="mt-6 text-center">
              <button 
                onClick={() => setIsLogin(false)}
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                ¿No estás registrado? Crea tu cuenta
              </button>
            </div>
          </>
        ) : (
          <>
            <RegisterFlow onBackToLogin={() => setIsLogin(true)} />
            <div className="mt-6 text-center">
              <button 
                onClick={() => setIsLogin(true)}
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                ¿Ya tienes cuenta? Inicia sesión
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}