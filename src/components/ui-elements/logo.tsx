
// import logo from "@/assets/logos/logo-dark.png";
import Image from "next/image";

export function Logo() {
  return (
    <div className="relative flex justify-center items-center h-25 aspect-w-1 aspect-h-1">
      <Image
        // src={"/img/logo/Isotipo_vrs color_Digital Collage_2025.jpg"}
        src={"/img/logo/Isotipo_vrs blanco_Digital Collage_2025.jpg"}
        fill
        className="dark:hidden object-contain"
        alt="NextAdmin logo"
        role="presentation"
        quality={100}
      />

      <Image
        // src={"/img/logo/Isotipo_vrs blanco_Digital Collage_2025.jpg"}
        src={"/img/logo/digital_college_blanco.png"}
        fill
        className="hidden dark:block object-contain"
        alt="NextAdmin logo"
        role="presentation"
        quality={100}
      />
    </div>
  );
}