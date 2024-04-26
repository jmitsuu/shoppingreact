import { arrItems } from "@/interfaces/ProductInterface";
import Products from "./Products";
import { FetchComments } from "@/api/comments/FetchComments";
export function TopRated({ items }: any) {
 const { comments } = FetchComments();
 if (!comments) return;
const response =  items.sort(
  (a: { price: number }, b: { price: number }) => b.price - a.price
)


 const limitedArr = response.slice(0, 4);

 return (
  <div className="w-screen mb-32  bg-white relative mt-10 ">
   <div className="w-full container mb-32    flex justify-center items-center">
    <div className="text-center  min-h-96  justify-center items-center ">
     <p className="text-gray-400 text-4xl">Nosso produtos</p>
     <h1 className="text-gray-500 uppercase font-bold xl:text-3xl mb-10">
      Destaques
     </h1>
     <div className=" xl:grid xl:grid-cols-4 md:grid-cols-3   ">
      {limitedArr.map((prod: arrItems) => {
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
  </div>
 );
}
