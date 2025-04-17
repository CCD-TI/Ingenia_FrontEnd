import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';

export interface DecodedToken {
  Rol_id: number;
  IdUsuario: number;
  nombres: string;
  apellidos: string;
  iat: number;  // Timestamp de emisión
  exp: number;  // Timestamp de expiración
}

let userData: DecodedToken | null = null;

const TOKEN_KEY = 'token';

// Función para guardar el token
export const saveToken = (token: string) => {
  // Guarda el token solo en las cookies
  Cookies.set(TOKEN_KEY, token, { expires: 7 }); // Expira en 7 días
};

// Función para obtener los datos del usuario desde el token
export const getUserData = (): DecodedToken | null => {
  // Intenta obtener el token desde las cookies
  const token = Cookies.get(TOKEN_KEY);

  if (!userData && token) {
    try {
      // Decodifica el token
      const decodedToken = jwtDecode<DecodedToken>(token);
      // Verifica si el token ha expirado
      const currentTime = Math.floor(Date.now() / 1000); // Tiempo actual en segundos
      if (decodedToken.exp < currentTime) {
        console.error('El token ha expirado');
        clearToken(); // Limpia el token si ha expirado
        return null;
      }
      // Si el token es válido, guarda los datos en la variable `userData`
      userData = decodedToken;
    } catch (error) {
      console.error('Error al decodificar el token:', error);
      clearToken();  // Si hay un error al decodificar, eliminamos el token
    }
  }

  return userData;
};

// Función para limpiar el token (cuando el usuario cierre sesión o el token caduque)
export const clearToken = () => {
  // Elimina el token solo de las cookies
  Cookies.remove(TOKEN_KEY);
};
