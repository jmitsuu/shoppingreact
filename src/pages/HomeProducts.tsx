import { useEffect, useState } from "react";
import instance from "../http/instance";
import Products from "../components/Products";
import { arrItems } from "../hooks/ProductInterface";

export function HomeProducts() {
  const [results, setResults] = useState([]);

  const getProducts = async () => {
    return await instance
      .get("/products")
      .then((res) => setResults(res.data))
      .catch((err) => console.log("ops!", err));
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (results.length === 0) {
    return (
      <div className="flex justify-center items-center">
        <h1 className="m-auto text-gray-500 text-2xl">Carregando...</h1>
      </div>
    );
  }

  return (
    <div className=" grid xl:grid-cols-6 container md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
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
  );
}
