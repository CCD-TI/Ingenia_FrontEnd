// src/app/parentPanel/_components/client-auth-wrapper.tsx
'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Nota: usamos next/navigation, no next/router
import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie';

interface ClientAuthWrapperProps {
  children: React.ReactNode;
  allowedRoles: number[];
}

export default function ClientAuthWrapper({ children, allowedRoles }: ClientAuthWrapperProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    const verifyAccess = async () => {
      const token = Cookies.get('token');

      if (!token) {
        router.push('/');
        return;
      }

      try {
        const decodedToken = jwtDecode(token);
        const { Rol_id } = decodedToken as { Rol_id: number };

        if (allowedRoles.includes(Rol_id)) {
          setHasAccess(true);
        } else {
          router.push('/');
        }
      } catch (error) {
        console.error('Error al decodificar el token:', error);
        router.push('/');
      } finally {
        setLoading(false);
      }
    };

    verifyAccess();
  }, [router, allowedRoles]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!hasAccess) {
    return null;
  }

  return <>{children}</>;
}