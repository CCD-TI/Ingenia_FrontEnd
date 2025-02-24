import Beneficio from "@/components/Modulos/Beneficio";
import Inicio from "@/components/Modulos/inicio";
import NivelesEducacion from "@/components/Modulos/NivelEducacion";
import { Nosotros } from "@/components/Modulos/Nosotros";
// import NosotrosIC from "@/components/Modulos/NosotrosIC";
import React from "react";

export default function Home() {
  return (
    <>
      <Inicio />
      <Nosotros />
      <NivelesEducacion />
      <Beneficio />
    </>
  );
}
