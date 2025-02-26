import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Providers} from "@/components/provider/provider"
import { environment } from "@/environments/environment";

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
     
        <link
          rel="icon"
          href={`${environment.baseUrlStorage+"/Home/Logo-Sinletras.png"}`}
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
