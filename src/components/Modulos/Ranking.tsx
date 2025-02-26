import Image from "next/image";

export default function StudentRanking() {
  return (
    <div className="bg-gradient-to-b from-purple-600 to-blue-500 p-4 md:p-8">
    <div className=" h-full max-w-[100rem] mx-auto flex flex-col items-center p-10">
      <h1 className="text-center text-white text-4xl font-bold mb-12">
        RANKING DE ESTUDIANTES
      </h1>
      <div className="flex justify-center gap-20 items-center max-lg:flex-col">
        <div className="flex justify-center items-end gap-4 max-sm:gap-1 mb-12 ">
          {/* Segundo lugar */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 max-sm:size-[4.5rem] rounded-full overflow-hidden mb-2">
              <Image
                src="https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Home/images.png"
                alt="Segundo lugar"
                className="w-full h-full object-cover"
                width={800}
                height={800}
              />
            </div>
            <div className="bg-white rounded-lg p-4 text-center max-sm:w-24 w-32 h-32 flex flex-col items-center justify-center">
              <div className="text-5xl font-bold text-yellow-400">2</div>
              <div className="text-sm text-yellow-400 font-semibold">
                Segundo Lugar
              </div>
            </div>
          </div>

          {/* Primer lugar */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 max-sm:size-[4.5rem] rounded-full overflow-hidden mb-2">
              <Image
                src="https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Home/images.png"
                alt="Primer lugar"
                className="w-full h-full object-cover"
                width={800}
                height={800}
              />
            </div>
            <div className="bg-white rounded-lg p-4 text-center max-sm:w-24 w-32 h-40 flex flex-col items-center justify-center">
              <div className="text-yellow-400 mb-2">
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <div className="text-5xl font-bold text-yellow-400">1</div>
              <div className="text-sm text-yellow-400 font-semibold">
                Primer Lugar
              </div>
            </div>
          </div>

          {/* Tercer lugar */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 max-sm:size-[4.5rem] rounded-full overflow-hidden mb-2">
              <Image
                src="https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Home/images.png"
                alt="Tercer lugar"
                className="w-full h-full object-cover"
                height={800}
                width={800}
              />
            </div>
            <div className="bg-white rounded-lg p-4 text-center max-sm:w-24 w-32 h-24 flex flex-col items-center justify-center">
              <div className="text-5xl font-bold text-yellow-400">3</div>
              <div className="text-sm text-yellow-400 font-semibold">
                Tercer <br /> Lugar
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white  rounded-xl p-6 max-sm:p-2 w-fit mx-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="py-2 px-4 max-sm:px-2 max-sm:hidden">Avatar</th>
                <th className="py-2 px-4 max-sm:px-2">Nombre</th>
                <th className="py-2 px-4 max-sm:px-2">Grado</th>
                <th className="py-2 px-4 max-sm:px-2">Nota</th>
                <th className="py-2 px-4 max-sm:px-2 max-sm:hidden">Tiempo</th>
                <th className="py-2 px-4 max-sm:px-2">Puntos</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 7 }).map((_, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2 px-4 max-sm:hidden">
                    <Image
                      src="https://pub-3d37c601c64a44ff8ec0a62bc03016eb.r2.dev/Home/images.png"
                      alt={`Estudiante ${index + 1}`}
                      className="w-10 h-10 rounded-full max-sm:hidden"
                      width={800}
                      height={800}
                    />
                  </td>
                  <td className="py-2 px-4 max-sm:px-2 text-blue-600 text-xs">Nombre y Apellido</td>
                  <td className="py-2 px-4 max-sm:px-2 text-xs">2° do</td>
                  <td className="py-2 px-4 max-sm:px-2 text-xs">20</td>
                  <td className="py-2 px-4 max-sm:px-2 text-xs max-sm:hidden">1 hr y 30 min</td>
                  <td className="py-2 px-4 max-sm:px-2 text-blue-600 font-semibold text-xs">100</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
}
