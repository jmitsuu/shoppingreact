import Products from "../components/Products";
import { arrItems } from "../interfaces/ProductInterface";
import { Banner } from "@/components/Banner";
import { TopRated } from "@/components/TopRated";
import { Link } from "react-router-dom";
import { FetchProducts } from "@/api/products/FetchProducts";
import { Spinner } from "@/components/Spinner";
import { useRequestFull } from "@/hooks/useRequestFull";
export function HomeProducts() {
 const {isLoading } = FetchProducts();
 const response = useRequestFull()
// console.log(response)
 if (isLoading || !response) {
  return (
   <div className="flex justify-center items-center ">
    <Spinner />
   </div>
  );
 }

 return (
  <>
   <section className="min-h-screen flex-col mb-32 ">
    <div className="overflow-hidden">
     <Banner />
     <TopRated items={response} />
    </div>

    <h1 className="text-gray-500 uppercase mb-10 text-center font-bold text-3xl ">
     Moda feita para voce
    </h1>
    <div className=" mb-32 gap-10 flex flex-wrap justify-center">
     {response.slice(0, 10).map((item: arrItems) => {
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
    <h1 className="text-center mt-10">
     <Link
      to={"/listacompleta"}
      className="py-3 px-4 bg-slate-200 rounded-xl text-slate-600 font-bold cursor-pointer"
     >
      Ver Mais
     </Link>
    </h1>
   </section>
  </>
 );
}
