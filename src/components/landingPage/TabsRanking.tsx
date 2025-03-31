import React from "react";
import { Tabs, Tab, Card, CardBody, Switch } from "@heroui/react";
import Tabla from "./Tabla";
import Tablaa from "./Tablaa";

export default function App() {
    const [isVertical, setIsVertical] = React.useState(true);

    return (
        <div className="flex flex-col px-4 ">

            <div className="flex w-full flex-col ">
                <Tabs aria-label="Options"
                    isVertical={true}



                    classNames={{
                        tab: "text-[22px] font-bold p-10 bg-slate-400  w-[50px] !h-fit  ",
                        tabList: "! bg-transparent gap-0 "

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

