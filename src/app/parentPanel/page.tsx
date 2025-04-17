// src/app/parentPanel/page.tsx
import { Suspense } from "react";
import { OverviewCardsGroup } from "./_components/overview-cards";
import { OverviewCardsSkeleton } from "./_components/overview-cards/skeleton";
import ClientAuthWrapper from "@/app/validador/client-auth-wrapper";

export default function ParentPanelPage() {
  return (
    <>
    
   
      <Suspense fallback={<OverviewCardsSkeleton />}>
        <OverviewCardsGroup />
      </Suspense>
      
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        {/* Tu contenido adicional aquí */}
      </div>
  </>
  ); 
}