import type { Config } from "tailwindcss";
import {heroui} from "@heroui/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      
      
      webkitTextStroke: {
        1: '1px', // Grosor del contorno: 1px
        2: '2px', // Grosor del contorno: 2px
        3: '3px', // Grosor del contorno: 3px
      },
      webkitTextStrokeColor: {
        white: 'white', // Color del contorno: blanco
        black: 'black', // Color del contorno: negro
        blue: 'blue',   // Color del contorno: azul
        // Agrega más colores según necesites
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        // PALETA OFICIAL CCD
        yellowIngenia: "#F9B233", // RGB(249, 178, 51)
        cyanIngenia: "#3185F7", // RGB(49, 133, 247)
      },
      animation: {
        'bounce-soft': 'bounceSoft 1.2s infinite',
        "spin-slow": "spinSlow 7s linear infinite",
        "pulse-slow": "pulseSlow 7s infinite",
        "jump": "jump 2s ease-in-out forwards",
        "pulse-custom": "pulseCustom 2s ease-in-out infinite",
              // Pulso más lento
      },
      keyframes: {
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(-20px)' },
          '50%': { transform: 'translateY(0px)' }
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        jump: {
          "0%, 100%": { transform: "translateY(0)" }, 
          "50%": { transform: "translateY(-1px)" }, // Ajusta la altura del salto
        },
        pulseCustom: {
          "0%, 100%": { opacity: "1" },  // Comienza y termina con opacidad completa
          "50%": { opacity: "0.5" },     // A la mitad del ciclo, reduce la opacidad
        }
        
        
      }
    },
  },
  plugins: [
    heroui(), 
    require("tailwindcss-animated") 
  ],
  
  
};
export default config;
