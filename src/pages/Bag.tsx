import { useCart } from "@/store/CartStore";
import { Outlet } from "react-router";

export function Bag() {
  const { cart } = useCart();
  if (cart.length === 0) {
    return (
      <div className="text-center text-slate-700 font-bold text-4xl">
        Sem items no carrinho :(
      </div>
    );
  }
  return (
    <div className="xl:w-full xl:min-h-[600px]  border container rounded-xl py-10">
      <h1 className="text-slate-600 text-2xl font-bold mb-10">
        Informações de pagamento
      </h1>
      <div className=" xl:w-full xl:min-h-[600px]  flex  bg-white  ">
        <Outlet />
      </div>
    </div>
  );
}
