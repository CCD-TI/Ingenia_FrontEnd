'use client';
import { useState } from 'react';
import DniStep from './DniStep';
import ParentForm from './ParentForm';
import StudentForm from './StudentForm';
import forge from 'node-forge';
type UserRole = 'parent' | 'student';

export default function RegisterFlow({ onBackToLogin }: { onBackToLogin: () => void }) {
  const [step, setStep] = useState<'dni' | 'form'>('dni');
  const [dni, setDni] = useState('');
  const [role, setRole] = useState<UserRole | null>(null);
  const [userData, setUserData] = useState<any>(null); // Guarda datos obtenidos por DNI

  const handleDniSubmit = async (submittedDni: string, selectedRole: UserRole) => {
      try {
          const publicKeyPem = process.env.NEXT_PUBLIC_RSA_PUBLIC_KEY!.replace(/\\n/g, '\n');
          const publicKey = forge.pki.publicKeyFromPem(publicKeyPem);
          const payload = {
              numdni: submittedDni,
              role: selectedRole,
              timestamp: Date.now()
          };
          
          const encrypted = publicKey.encrypt(
              JSON.stringify(payload), 
              'RSA-OAEP', 
              {
                  md: forge.md.sha256.create()
              }
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
          setDni(submittedDni);
          setRole(selectedRole);
          setUserData(result);
          setStep('form');
          
      } catch (error) {
          console.error('Error validando DNI:', error);
          alert(`Error: ${error}`);
      }
  };
  if (step === 'dni') {
    return <DniStep onSubmit={handleDniSubmit} onBack={onBackToLogin} />;
  }

  if (role === 'parent') {
    return <ParentForm dni={dni} userData={userData} onBack={() => setStep('dni')} />;
  }

  return <StudentForm dni={dni} userData={userData} onBack={() => setStep('dni')} />;
}