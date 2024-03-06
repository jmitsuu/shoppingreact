import { useCart } from "../store/CartStore";

export function Products(props: any) {
  const { addToCart, cart } = useCart();

  return (
    <main className="   flex justify-center  items-center  ">
      <div className=" w-60 h-96 m-2 p-2 border-[0.1rem] border-gray-100/80 rounded-md flex flex-col items-center">
        <h1
          className={`m-auto text-center font-bold text-gray-700 ${props.cn}`}
        >
          {props.title}
        </h1>
        <img className="h-44 m-auto mt-4" src={props.image_url} />
        <h2 className=" text-gray-500 font-bold text-xl border-b-[0.1rem] border-red-700">
          {props.price} R$
        </h2>
        <button
          onClick={() => {
            addToCart(props.item);
          }}
          className="mt-4 text-yellow-500 font-semibold drop-shadow-sm hover:text-yellow-700 transition-all"
        >
          Buy Now
        </button>
      </div>
    </main>
  );
}

export default Products;
