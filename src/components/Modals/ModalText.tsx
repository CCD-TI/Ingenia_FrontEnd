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
import { body, img } from "framer-motion/client";
  
import { ReactNode } from "react";
  
interface Propstext{
   
        button:ReactNode
        modal:ReactNode
       
       
}

  export default function App({button,modal}:Propstext) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
    return (
      <>
        <button className="!bg-transparent !size-fit !px-0 !rounded-none " onClick={onOpen}>{button} </button>
        <Modal  
        size="2xl"
          isOpen={isOpen} onOpenChange={onOpenChange}
          classNames={

                {body:"!p-0"}
                
          } 
          
          >

          <ModalContent className="!p-0">
            {(onClose) => (
              <>
                {/* <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader> */}
                <ModalBody className="h-full ">
                {modal}
                </ModalBody>
               
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    );
  }
  