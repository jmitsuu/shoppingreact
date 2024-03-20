export function Banner() {
  return (
    <div className=" flex   relative  h-[800px]   justify-center">
      <div className=" xl:w-[120%] absolute md:w-[1500px] w-[700px]  bg-center  flex items-center justify-center -rotate-3  bg-[#73D8DA]   -top-36  h-full ">
        <div className=" container flex justify-between">
          <div className=" flex   rotate-3 ">
            <div className=" space-y-8 w-full mr-8 ">
              <h1 className="xl:text-7xl md:text-4xl text-2xl font-bold">
                A moda para todas as estações
              </h1>
              <h2 className="xl:text-4xl uppercase font-bold text-orange-500">
                Mude!
              </h2>
              <p className="text-slate-700 xl:text-xl">
                Encontre um estilo para todos os gostos e bolsos.
              </p>
              <button className="bg-orange-500 px-2 rounded py-3  text-gray-100 uppercase font-semibold">
                Quero Conhecer
              </button>
            </div>
            <img
              src="../src/assets/images/imgBnr.jpg"
              className="xl:w-full md:w-20 xl:h-96 rounded-full ml-7  object-cover float-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
