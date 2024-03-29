import Products from "../components/Products";
import { arrItems } from "../interfaces/ProductInterface";
import { Banner } from "@/components/Banner";
import { TopRated } from "@/components/TopRated";
import { Link } from "react-router-dom";
import { FetchProducts } from "@/store/FetchProducts";
import { Spinner } from "@/components/Spinner";
export function HomeProducts() {
  const { products, isLoading } = FetchProducts();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <section className="min-h-screen flex-col mb-32">
        <div className="overflow-hidden">
          <Banner />
          <TopRated items={products} />
        </div>

        <h1 className="text-gray-500 uppercase mb-10 text-center font-bold text-3xl ">
          Moda feita para voce
        </h1>
        <div className=" mb-32 gap-10 grid xl:grid-cols-5 container md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {products.slice(0, 10).map((item: arrItems) => {
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
