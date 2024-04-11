import Products from "@/components/Products";
import { SelectC } from "@/components/SelectC";
import { Spinner } from "@/components/Spinner";
import instance from "@/http/instance";
import { arrItems } from "@/interfaces/ProductInterface";
import { useEffect, useState } from "react";

const Selectitems = [
  {
    item: "Maior preço",
  },
  {
    item: "Menor preço",
  },
  {
    item: "Aleatorio",
  },
];
export function AllProducts() {
  const [results, setResults] = useState([]);
  const [method, setMethod] = useState("");

  const lessOrMore = (param: any) => {
    if (!method || method === "Aleatorio" ) return setResults(param);
    if (method === "Menor preço") {
      return setResults(
        param.sort(
          (a: { price: number }, b: { price: number }) => a.price - b.price
        )
      );
    } else {
      return setResults(
        param.sort(
          (a: { price: number }, b: { price: number }) => b.price - a.price
        )
      );
    }
   
  };
  const getProducts = async () => {
    return await instance
      .get("/products")
      .then((res) => {
        lessOrMore(res.data);
      })
      .catch((err) => console.log("ops!", err));
  };

  useEffect(() => {
    if (method) {
      getProducts();
    } else {
      getProducts();
    }
  }, [method]);
  if (results.length === 0) {
    return (
      <div className="flex justify-center items-center">
        <Spinner />
      </div>
    );
  }
  return (
    <div className="p-5 w-screen h-full">
      <div className="w-full container">
        <div className="xl:flex justify-between container">
          <h1 className="font-bold  xl:mb-0 mb-5  text-xl text-slate-700">
            Todos os produtos
          </h1>
          <div>
            <SelectC
              title="Ordenar"
              arrItems={Selectitems}
              selectMethod={method}
              controlMethod={setMethod}
            />
          </div>
        </div>
        <div className=" grid xl:grid-cols-5 container md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-10">
          {results.map((item: arrItems) => {
            return (
              <Products
                key={item._id}
                title={item.title}
                price={item.price}
                image_url={item.image_url}
                item={item}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
