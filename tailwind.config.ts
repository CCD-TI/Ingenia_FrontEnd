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
    },
  },
  plugins: [heroui()]
};
export default config;
