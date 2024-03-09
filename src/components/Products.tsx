import { useCart } from "../store/CartStore";

export function Products(props: any) {
  const { addToCart, cart } = useCart();

  return (
    <main className="   flex justify-center  items-center  ">
      <div className=" w-72 h-96 m-2 p-2 border-[0.1rem] border-gray-100/80 rounded-md flex flex-col items-center">
        <img
          className="h-44 m-auto scale-100 hover:scale-105 shadow-xl transition duration-300 hover:shadow-blue-600/10 cursor-pointer"
          src={props.image_url}
        />

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
