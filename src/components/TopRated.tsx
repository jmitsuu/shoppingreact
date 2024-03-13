import { useEffect, useState } from "react";
import instance from "../http/instance";
import { arrItems } from "@/interfaces/ProductInterface";
import { Comments } from "./Comments";
import Products from "./Products";

export function TopRated() {
  const [results, setResults] = useState<undefined | any>([]);
  async function getProducts() {
    const { data } = await instance.get("/products");
    getTopRated(data);
  }
  async function getTopRated(prod: any) {
    const { data } = await instance.get("/comments");

    const topRated = data.filter((el: { voto: number }) => el.voto > 4);
    const newTopRated = topRated.map((item: arrItems) => {
      const produInfo = prod.find((el: arrItems) => el.title === item.title);
      return {
        _id: produInfo._id,
        title: produInfo.title,
        image_url: produInfo.image_url,
        comentario: item.comentario,
        price: produInfo.price,
        id_comentario: item.id_comentario,
        name: item.name,
        voto: item.voto,
      };
    });
    const limitedArr = newTopRated.slice(0, 5);
    console.log(limitedArr);
    setResults(limitedArr);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="w-screen mb-32  bg-white relative mt-5 ">
      <div className="w-full container mb-32    flex justify-center items-center">
        <div className="text-center flex flex-col  min-h-96  justify-center items-center ">
          <p className="text-gray-400">Nosso produtos</p>
          <h1 className="text-gray-500 uppercase font-bold xl:text-3xl">
            Destaques
          </h1>
          <div className="w-full xl:flex items-center  md:grid-cols-3  gap-5 p-5 ">
            {results.map((prod: arrItems) => {
              return (
                <Products
                  key={prod._id}
                  cn={"text-xs text-gray-400 font-bold "}
                  title={prod.title}
                  image_url={prod.image_url}
                  price={prod.price}
                  item={prod}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-screen   mb-32 flex-col items-center justify-center bg-slate-100 flex mt-10 ">
        <div className="text-center mt-10">
          <h1 className="text-gray-500 uppercase font-bold xl:text-3xl">
            Depoimentos
          </h1>
        </div>

        <div className=" w-full flex justify-center  container  gap-4 p-10 h-80 text-center  bg-slate-100 rounded-3xl">
          {results.map((comm: arrItems) => {
            return (
              <Comments
                key={comm.id_comentario}
                name={comm.name}
                comentario={comm.comentario}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
