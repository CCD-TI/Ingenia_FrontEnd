"use client"

import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
  } from "@heroui/react";
  
import { ReactNode } from "react";
  
interface Propstext{
        text:string,
        button:ReactNode
}

  export default function App({text,button}:Propstext) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
    return (
      <>
        <button className="!bg-transparent !size-fit !px-0 !rounded-none" onClick={onOpen}>{button} </button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                {/* <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader> */}
                <ModalBody className="h-full">
                  {text}
                </ModalBody>
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
  