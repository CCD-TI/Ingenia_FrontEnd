import Footer from "@/components/footer";
import { RRSSLateral } from "@/components/Modulos/RRSSLateral";
import Navbar from "@/components/Navbar";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center  ">
      <Navbar />
      <div className="w-full min-h-screen flex flex-col">
        <div className="flex-grow">{children}</div>
        <RRSSLateral />
      </div>
      <Footer/>
    </div>
  );
}
