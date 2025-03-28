import React from "react";
import {Tabs, Tab, Card, CardBody, Switch} from "@heroui/react";

export default function App() {
  const [isVertical, setIsVertical] = React.useState(true);

  return (
    <div className="flex flex-col px-4">
      
      <div className="flex w-full flex-col">
        <Tabs aria-label="Options" isVertical={true}>
          <Tab key="photos" title="Niveles">
            <Card>
              <CardBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat alias totam rerum illo, repellat suscipit 
              
              </CardBody>
            </Card>
          </Tab>
          <Tab key="music" title="Grado">
            <Card>
              <CardBody className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque accusantium aperiam ea assumenda rem delectus
              
              </CardBody>
            </Card>
          </Tab>
         
        </Tabs>
      </div>
    </div>
  );
}

