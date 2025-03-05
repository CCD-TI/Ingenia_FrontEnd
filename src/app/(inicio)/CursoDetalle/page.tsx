import Image from "next/image";
import React from "react";
import {
  FaCheckCircle,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function CursoDetalle() {
  return (
    <div className="w-full h-full pt-20  px-6 bg-blue-500 relative">
         <div
        className="bg-[url('https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Home/grado.jpg')]   bg-no-repeat bg-contain w-full h-full absolute -top-24 left-0"
        style={{ clipPath: "ellipse(55% 25% at 50% 0%)" }}
      >

       <div className="size-full flex gap-4 items-end justify-center h-[300px]">
            <div className="flex items-start justify-center">
              <p className="text-7xl text-white font-extrabold drop-shadow-[0_0_15px_rgba(255,255,255,1)]">4</p>
              <p className="text-3xl text-white font-extrabold drop-shadow-[0_0_15px_rgba(255,255,255,1)]">to</p>
            </div>
            <h1 className="text-7xl text-white font-extrabold drop-shadow-[0_0_15px_rgba(255,255,255,1)]">GRADO</h1>
       </div>

      </div>
      <div className="max-w-[95rem] mx-auto flex flex-col items-center">
        <div className="w-[80%] h-full  mx-auto mt-[18rem] flex  justify-center gap-[2rem] items-end px-10 py-4">
          <div className=" w-fit h-full flex flex-col items-start justify-centr gap-2  rounded-xl ">
            <div>
              <h1 className="text-6xl font-extrabold mb-4">Física</h1>
              <p className="w-[70%] mb-8 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio debitis voluptas voluptatem praesentium rerum
                doloremque accusamus, dignissimos at doloribus maxime quod
                ducimus maiores dicta iste fuga, amet cupiditate modi nostrum.
              </p>
            </div>
            <div className="size-fit">
              <div className="border-[1.5px] border-dashed bg-transparent  rounded-xl">
                <Image
                  alt=""
                  src="https://pub-9d2abfa175714e64aed33b90722a9fd5.r2.dev/Multimedia/Imagen/Ccd/Banners/BannerPrincipal-04.jpg"
                  width={700}
                  height={200}
                  className="rounded-xl w-full h-[450px] p-2 "
                />
              </div>
            </div>
          </div>
          <div className=" h-fit p-2 border-dashed border-[1.5px]  bg-transparent rounded-xl w-[600px]  ">
            <div className="size-full bg-white/30 p-6 rounded-xl flex flex-col items-center gap-4">
              <h1 className="p-4 bg-white w-fit text-cyan-600 font-bold text-2xl rounded-xl">
                INFORMACIÓN
              </h1>
              <p className="text-sm font-bold text-center mx-7 ">
                {" "}
                elit. Debitis minima inventore voluptatibus perferendis fuga
                porro et quia sapiente! Temporibus error fugit?
              </p>
              <div className="flex flex-col items-center gap-16 w-full">
                <h1 className="font-bold text-cyan-600 text-xl">TEMA:</h1>
                <hr className="w-[80%] mx-auto border-white" />
              </div>
              <div className="flex flex-col items-center gap-16 w-full">
                <h1 className="font-bold text-cyan-600 text-xl">GRADO:</h1>
                <hr className="w-[80%] mx-auto border-white" />
              </div>
              <div className="flex flex-col items-center gap-16 w-full">
                <h1 className="font-bold text-cyan-600 text-xl">PROFESOR:</h1>
                <hr className="w-[80%] mx-auto border-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[95rem] mx-auto flex flex-col items-center">
        <div className="w-[80%] h-full  mx-auto mt-[2rem] flex  justify-center gap-[2rem] items-start px-10 py-4">
          <div className=" w-fit h-full flex flex-col items-start justify-centr gap-2  rounded-xl ">
            <div>
              <h1 className="text-4xl font-extrabold mb-4">TEMARIO</h1>
              <p className="w-[70%] mb-8 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio debitis voluptas voluptatem praesentium rerum
                doloremque accusamus, dignissimos at doloribus maxime quod
                ducimus maiores dicta iste fuga, amet cupiditate modi nostrum.
              </p>
            </div>
            <div className="size-fit flex flex-col gap-3">
              <div className="flex flex-col  gap-4 rounded-xl">
                <div className="flex items-start gap-2">
                  <FaCheckCircle className="text-xl " />
                  <p className="text-xs w-[70%] ">
                    Lorem ipsum dolor sit amet, consectetur aonem vero nihil
                    voluptate pariatur dolorem enim, est impedit quos sint ipsa
                    nesciunt.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <FaCheckCircle className="text-xl " />
                  <p className="text-xs  w-[70%]">
                    Lorem ipsum dolor sit amet, consectetur aonem vero nihil
                    voluptate pariatur dolorem enim, est impedit quos sint ipsa
                    nesciunt.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <FaCheckCircle className="text-xl " />
                  <p className="text-xs  w-[70%]">
                    Lorem ipsum dolor sit amet, consectetur aonem vero nihil
                    voluptate pariatur dolorem enim, est impedit quos sint ipsa
                    nesciunt.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <FaCheckCircle className="text-xl " />
                  <p className="text-xs  w-[70%]">
                    Lorem ipsum dolor sit amet, consectetur aonem vero nihil
                    voluptate pariatur dolorem enim, est impedit quos sint ipsa
                    nesciunt.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="font-bold text-4xl">OTROS CURSOS</h1>
                <div className="flex gap-4">
                       <div className="size-[110px]  rounded-xl bg-white">
                        </div>  
                       <div className="size-[110px]  rounded-xl bg-white">
                        </div>  
                       <div className="size-[110px]  rounded-xl bg-white">
                        </div>  
                       <div className="size-[110px]  rounded-xl bg-white">
                        </div>  
                </div>
              </div>
            </div>
          </div>
          <div className=" h-fit p-2 border-dashed border-[1.5px]  bg-transparent rounded-xl w-[600px]  ">
            <div className="size-full bg-green-600/30 p-4 rounded-xl flex flex-col items-center gap-4">
              <div>
                <Image
                  alt=""
                  src="https://pub-9d2abfa175714e64aed33b90722a9fd5.r2.dev/Multimedia/Imagen/Ccd/Banners/BannerPrincipal-04.jpg"
                  width={700}
                  height={700}
                  className="rounded-full  size-[250px] p-2 "
                />
              </div>
              <h1>NOMBRE Y APELLIDO</h1>
              <h2 className="mt-4"> PROFESOR</h2>
              <p className="text-center text-xs px-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo delectus quia ad voluptatum voluptates nihil eligendi
                fugiat
              </p>
              <div className="flex justify-between items-center  gap-6">
                <div className="rounded-full p-2 bg-white text-green-600">
                  <FaFacebookF />
                </div>
                <div className="rounded-full p-2 bg-white text-green-600">
                  <FaInstagram />
                </div>
                <div className="rounded-full p-2 bg-white text-green-600">
                  <FaXTwitter />
                </div>
                <div className="rounded-full p-2 bg-white text-green-600">
                  <FaTiktok />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CursoDetalle;
