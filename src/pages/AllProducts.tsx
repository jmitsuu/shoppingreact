import Products from "@/components/Products";
import { SelectC } from "@/components/SelectC";
import { Spinner } from "@/components/Spinner";
import instance from "@/http/instance";
import { arrItems } from "@/interfaces/ProductInterface";
import { useEffect, useState } from "react";

interface arrSelect {
  item: string;
}
const Selectitems = [
  {
    item: "Maior preço",
    title:"Maior preço"
  },
  {
    item: "Menor preço",
    title: "Menor preço"
  },
  {
    item: "Aleatorio",
    title: "Aleatorio"
    
  },
];
const comNewItems = (param: Array<arrSelect>) => {
  return param.map((el: arrSelect) => el.item);
};

export function AllProducts() {
  const [results, setResults] = useState([]);
  const [method, setMethod] = useState("");

  const lessOrMore = (param: any) => {
    if (!method || method === comNewItems(Selectitems)[2])
      return setResults(param);
    if (method === comNewItems(Selectitems)[1]) {
      return setResults(
        param.sort(
          (a: { price: number }, b: { price: number }) => a.price - b.price
        )
      );
    } else {
      setResults(
        param.sort(
          (a: { price: number }, b: { price: number }) => b.price - a.price
        )
      );
    }
  };
  const getProducts = async () => {
    try {
      const { data } = await instance.get("/products");
      lessOrMore(data);
    } catch (error) {
      console.log("ops!", error);
    }
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
              arrPropSelect={Selectitems}
              selectMethod={method}
              controlMethod={setMethod}
            />
          </div>
        </div>
        <div className=" grid xl:grid-cols-4 container md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-10">
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
