'use client';
import { useState } from 'react';
import DniStep from './DniStep';
import ParentForm from './ParentForm';
import StudentForm from './StudentForm';

type UserRole = 'parent' | 'student';

export default function RegisterFlow({ onBackToLogin }: { onBackToLogin: () => void }) {
  const [step, setStep] = useState<'dni' | 'form'>('dni');
  const [dni, setDni] = useState('');
  const [role, setRole] = useState<UserRole | null>(null);

  const handleDniSubmit = (submittedDni: string, selectedRole: UserRole) => {
    setDni(submittedDni);
    setRole(selectedRole);
    setStep('form');
  };

  if (step === 'dni') {
    return <DniStep onSubmit={handleDniSubmit} onBack={onBackToLogin} />;
  }

  if (role === 'parent') {
    return <ParentForm dni={dni} onBack={() => setStep('dni')} />;
  }

  return <StudentForm dni={dni} onBack={() => setStep('dni')} />;
}