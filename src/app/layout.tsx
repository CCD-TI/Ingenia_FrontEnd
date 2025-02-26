import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/provider/provider";
import { environment } from "@/environments/environment";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ingenia College",
  description:
    "Ingenia College - Ofrecemos Cursos de Primaria secundaria y Pre universidad.",
  // Palabras clave para mejorar el SEO
  keywords: [
    "Ingenia College",
    "Desarrollo profesional",
    "Cursos en Perú",
    "Formación continua",
    "Pre universidad",
    "Primaria",
    "Secundaria",
    "Universidad"
  ],
  // Configuración de Open Graph para redes sociales
  openGraph: {
    title: "Centro de Capacitación y Desarrollo CCD",
    description:
      "Descubre programas de formación continua y capacitación profesional en Perú.",
    url: "https://ingeniafrontend.vercel.app/",
    siteName: "Ingenia College",
    images: [
      {
        url: environment.baseUrlStorage + "/Home/Logo-Sinletras.png", // Actualiza con la URL de tu imagen
        width: 1200,
        height: 630,
        alt: "Ingenia",
      },
    ],
    locale: "es_PE", // Lenguaje y región (español para Perú)
    type: "website",
  },
  // Configuración para Twitter Cards
  twitter: {
    card: "summary_large_image",
    site: "@CCD", // Cambia a la cuenta de Twitter si tienes una
    title: "Ingenia College",
    description:
      "Ofrecemos Cursos de Primaria secundaria y Pre universidad en Perú.",
    images: environment.baseUrlStorage + "/Home/Logo-Sinletras.png", // Mismo enlace que Open Graph
  },
  // Robots para controlar la indexación y el seguimiento
  robots: {
    index: true, // Permite que los motores de búsqueda indexen la página
    follow: true, // Permite que sigan los enlaces en la página
  },
  // Definir el publicador
  publisher: "Ingenia College CCD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href={environment.baseUrlStorage + "/Home/Logo-Sinletras.png"}
        />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
