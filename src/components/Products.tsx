import { useCart } from "../store/CartStore";
import { Link } from "react-router-dom";

export function Products(props: any) {
  const { addToCart } = useCart();

  return (
    <main className="   flex justify-center   items-center  ">
      <div className=" w-72 h-96 m-2 p-2 border-[0.1rem] border-gray-100/80 rounded-xl flex flex-col items-center">
        <Link
          preventScrollReset={true}
          className="h-full w-full"
          to={props.title.replaceAll(" ", "-").toLowerCase()}
        >
          <img
            className="h-64 m-auto scale-100 hover:scale-105 transition duration-300 cursor-pointer rounded-md "
            src={props.image_url}
          />
        </Link>

        <div className="flex justify-between w-full">
          <div className=" text-left relative">
            <h1
              className={`m-auto text-left text-[0.6rem] h-10 font-bold text-gray-700 ${props.cn}`}
            >
              {props.title}
            </h1>
            <h2 className=" text-gray-500 font-bold text-[0.8em]  ">
              {props.price} R$
            </h2>
          </div>
          <button
            onClick={() => {
              addToCart(props.item);
            }}
            className="mt-4 text-yellow-500 font-semibold drop-shadow-sm hover:text-yellow-700 transition-all"
          >
            Comprar
          </button>
        </div>
      </div>
    </main>
  );
}

export default Products;
