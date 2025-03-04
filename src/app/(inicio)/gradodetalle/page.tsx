import DropdownList from "@/components/Desplegables/DropdownList";
import { Dropdown } from "@heroui/react";
import React from "react";

const Grado = () => {
  return (
    <div className="flex w-full h-full pt-20  px-6">
      <div className="max-w-[100] mx-auto flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-[5rem] items-center w-full mt-[18rem] ">
          <div className="flex flex-col items-center justify-center bg-yellow-500  rounded-xl p-4  ">
            <div className=" w-[330px] h-[250px] bg-white rounded-xl "></div>
            <div className=" flex flex-col gap-3 items-center justify-center rounded-xl mt-6  ">
              <div className="flex flex-col items-center justify-center gap-4 rounded-xl border-dashed border-3 p-4 w-[330px] ">
                <h1 className="text-5xl font-bold text-white">Ciencias</h1>
                <DropdownList TextColor="text-[#F5AB2C]" BgColor="bg-[#F5AB2C]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-sky-500  rounded-xl p-4  ">
            <div className=" w-[330px] h-[250px] bg-white rounded-xl "></div>
            <div className=" flex flex-col gap-3 items-center justify-center rounded-xl mt-6  ">
              <div className="flex flex-col items-center justify-center gap-4 rounded-xl border-dashed border-3 p-4 w-[330px] ">
                <h1 className="text-5xl font-bold text-white">Matemáticas</h1>
                <DropdownList TextColor="text-sky-500" BgColor="bg-sky-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mx-auto flex justify-center gap-[5rem]  mt-16 py-10">
          <div className="w-[50%] h-full flex flex-col items-start gap-4">
            <h1 className="text-4xl font-bold text-sky-500">Clases Online</h1>
            <p className="text-sm text-wrap ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
              Asperiores, omnis iure reprehenderit ex suscipit debitis, facilis<br />
              laudantium odit accusantium eius, ipsa voluptatibus veniam error quaerat <br />
               repellendus commodi at ipsum harum?
              Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit. Vero  aliquid voluptate id repellat 
              quae magni <br /> aliquam fugit  dolorem atque sequi at molestias eius hic nesciunt, cupiditate <br /> exercitationem illum autem possimus?
            </p>

            <div className="flex justify-between gap-4 h-full ">
              <span className="border-4 border-neutral-300 bg-sky-500 p-4 size-[130px] rounded-full text-white font-bold flex flex-col items-center justify-center text-xl">
                <p className="flex items-center">
                  10 <span>+</span>
                </p>
                <p>Cursos</p>
              </span>
              <span className="border-4 border-neutral-300 bg-sky-400 p-4 size-[130px] rounded-full text-white font-bold flex flex-col items-center justify-center text-xl">
                <p className="flex items-center">
                  2k <span>+</span>
                </p>
                <p>Alumnos</p>
              </span>
              <span className="border-4 border-neutral-300 bg-yellow-400 p-4 size-[130px] rounded-full text-white font-bold flex flex-col items-center justify-center text-xl">
                <p className="flex items-center">
                  7k <span>+</span>
                </p>
                <p>Videos</p>
              </span>
            </div>
          </div>
          <div className="w-[40%] flex flex-col  gap-4">
            <div className="w-[400px] h-[450px] bg-yellow-400 rounded-xl "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grado;
