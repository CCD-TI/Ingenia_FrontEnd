"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

import { ReactNode, useEffect, useState } from "react";

interface Propstext {
  Content: ReactNode;
  button: ReactNode;
  sizesModal: "md" | "full" | "xs" | "sm" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl"
}

export default function App({ Content, button,sizesModal }: Propstext) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [sizeRes, setSizeRes] = useState<
    "md" | "full" | "xs" | "sm" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl"
  >("5xl"); // Tipo explícito
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1280) {
        setSizeRes("full"); // Cambiar a "full" en pantallas pequeñas
      } else {
        setSizeRes(sizesModal); // Usar "md" en pantallas grandes
      }
    };

    // Ejecutar la función al montar el componente y al redimensionar
    handleResize();
    window.addEventListener("resize", handleResize);

    // Limpieza del evento al desmontar
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  


  return (
    <>
      <button
        className="!bg-transparent !size-fit !px-0 !rounded-none"
        onClick={onOpen}
      >
        {button}{" "}
      </button>
      <Modal
        isOpen={isOpen}
        size={sizeRes}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20 ",
          body: "!p-0 !h-full",
          closeButton: "text-black bg-white m-3",
        }}
      >
        <ModalContent
          style={
            sizeRes === "full" || sizeRes === "5xl"
              ? {}
              : {
                  width: "90%", // Ajusta el ancho del modal
                  maxWidth: "100%", // Tamaño máximo opcional
                  height: "80vh", // Ajusta la altura del modal
                  maxHeight: "90vh", // Tamaño máximo opcional
                }
          }
        >
          {(onClose) => (
            <>
              {/* <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader> */}
              <ModalBody className="overflow-y-auto h-full scrollbar-hide ">{Content}</ModalBody>
              {/* <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Action
                  </Button>
                </ModalFooter> */}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
