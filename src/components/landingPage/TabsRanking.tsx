import React from "react";
import { Tabs, Tab, Card, CardBody, Switch } from "@heroui/react";
import Tabla from "./Tabla";
import Tablaa from "./Tablaa";

export default function App() {

    return (
        <div className="flex flex-col px-4  w-full">

            <div className="flex w-full flex-col ">
                <Tabs aria-label="Options"
                    isVertical={true}



                    classNames={{
                        base: "bg-slate-400 !h-fit !p-0 !m-0  !rounded-2xl ",
                        tab: "text-[22px] font-bold p-10 bg-slate-400  w-[40px] !h-fit !m-0 !rounded-md   ",
                        tabList: "! bg-transparent !m-0  !gap-0 !rounded-2xl !p-0 !w-full",
                        panel: "!w-[60rem] max-xl:w-full",
                        cursor: "!rounded-[0.4rem] ",
                        tabWrapper: "mx-auto",
                    

                    }}
                >
                    <Tab key="photos" title={<h1 className="-rotate-90 text-2xl text-white  ">GRADO</h1>} className="mb-8">
                        <Card className="">
                            <CardBody>
                               <Tabla/>
                               
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="music" title={<h1 className="-rotate-90 text-white text-2xl">NIVELES</h1>}>
                        <Card>
                            <CardBody className="">
                                
                            <Tablaa/>
                            </CardBody>
                        </Card>
                    </Tab>

                </Tabs>
            </div>
        </div>
    );
}

