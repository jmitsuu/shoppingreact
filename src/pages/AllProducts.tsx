import Products from "@/components/Products";
import { SelectC } from "@/components/SelectC";
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
    item: "Todos",
  },
];
export function AllProducts() {
  const [results, setResults] = useState([]);
  const [method, setMethod] = useState("");
  const getProducts = async () => {
    return await instance
      .get("/products")
      .then((res) => {
        let limitedData = res.data;
        if (!method) {
          setResults(limitedData);
        }
        if (method == "Todos") {
          setResults(limitedData);
        }
        if (method == "Menor preço") {
          setResults([]);
          const newRes = res.data.sort((a: any, b: any) => a.price - b.price);
          setResults(newRes);
        }
        if (method == "Maior preço") {
          setResults([]);
          const newRes = res.data.sort((a: any, b: any) => b.price - a.price);
          setResults(newRes);
        }
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
  return (
    <div className="p-5 w-screen h-full">
      <div className="w-full container">
        <div className="flex justify-between">
          <h1 className="font-bold text-xl text-slate-700">
            Todos os produtos
          </h1>
          <div>
            <SelectC
              title="Todos"
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