import { Link } from "react-router-dom";

export function Banner() {
  return (
    <div className=" flex   relative  xl:h-[700px] h-[500px] justify-center ">
      <div className=" xl:w-screen absolute   bg-center  flex items-center justify-center   bg-[#73D8DA]     h-full ">
        <div className=" container flex justify-between ">
          <div className=" flex  ">
            <div className=" space-y-8 w-full xl:mr-8 ">
              <h1 className="xl:text-7xl md:text-5xl sm:text-4xl text-4xl font-bold">
                A moda para todas as estações
              </h1>
              <h2 className="xl:text-4xl sm:text-3xl uppercase font-bold text-orange-500">
                Mude!
              </h2>
              <p className="text-slate-700 xl:text-xl pb-5">
                Encontre um estilo para todos os gostos e bolsos.
              </p>
              <Link to={"listacompleta"}>
                <button className="bg-orange-500 px-2 rounded py-2 text-sm  text-gray-100 uppercase font-semibold">
                  Quero Conhecer
                </button>
              </Link>
            </div>
            <img
              src="https://jairo3478.c35.integrator.host/images/imgBnr.jpg"
              className="xl:w-[800px] md:w-[500px] sm:w-[300px] w-[150px]  h-72 xl:h-96 rounded-full xl:ml-7 ml-4  object-cover float-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
