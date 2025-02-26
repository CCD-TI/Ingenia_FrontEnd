import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Providers} from "@/components/provider/provider"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ingenia College",
  description: "Ingenia tu futuro",
  // openGraph: {
  //   title: "Ingenia College",
  //   description:
  //     "Descubre programas de formación continua y capacitación profesional en Perú.",
  //   url: "https://ingeniafrontend.vercel.app/",
  //   siteName: "Ingenia College CCD",
  //   images: [
  //     {
  //       url:"https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Home/Logo.png", // Actualiza con la URL de tu imagen
  //       width: 1200,
  //       height: 630,
  //       alt: "Centro de Capacitación y Desarrollo",
  //     },
  //   ],
  //   locale: "es_PE", // Lenguaje y región (español para Perú)
  //   type: "website",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon básico */}
        <link
          rel="icon"
          type="image/png"
          href="https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Home/Logo-Sinletras.png"
        />

        {/* Favicon para diferentes dispositivos */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Home/Logo-Sinletras.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Home/Logo-Sinletras.png"
        />

        {/* Favicon para Apple Touch (iOS) */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Home/Logo-Sinletras.png"
        />

        {/* Favicon para Windows */}
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta name="msapplication-TileColor" content="#ffffff" />

        {/* Favicon por defecto (en caso de que la URL dinámica falle) */}
        <link
          rel="icon"
          type="image/png"
          href="https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Home/Logo-Sinletras.png"
        />
      </head>
      <body className={inter.className}>
        <Providers>

        {children}
        </Providers>
      </body>
    </html>
  );
}
