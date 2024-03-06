export function Banner() {
  return (
    <div className="bg-hero-bnn xl:w-[2000px] md:w-[1500px] w-[700px] left-[-40px] bg-center bg-cover flex items-center justify-center -rotate-3 xl:left-[-30px] bg-[#73D8DA]  h-[700px]  mb-10  relative">
      <div className="w-screen">
        <div className="container flex justify-between  m-auto  rotate-3 ">
          <div className=" space-y-8 ">
            <h1 className="xl:text-6xl md:text-4xl text-2xl font-bold">
              A moda para todas as estações
            </h1>
            <h2 className="xl:text-4xl uppercase font-bold text-orange-500">
              Mude!
            </h2>
            <p className="text-slate-700 xl:text-xl">
              Encontre um estilo para todos os gostos e bolsos.
            </p>
            <button className="bg-orange-500 px-2 py-3 rounded-md text-gray-100 uppercase font-semibold">
              Quero Conhecer
            </button>
          </div>
          <img
            src="../src/assets/images/imgBnr.jpg"
            className="xl:w-full md:w-20 xl:h-96 rounded-full   object-cover float-right"
          />
        </div>
      </div>
    </div>
  );
}
