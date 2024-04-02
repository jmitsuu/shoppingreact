import { useCart } from "@/store/CartStore";
import { Outlet, useLocation } from "react-router";
import { MdOutlineFactCheck, MdPayment } from "react-icons/md";
import { AiOutlineFileDone } from "react-icons/ai";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

export function Bag() {
  const path = useLocation();
  const { cart } = useCart();
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (path.pathname === "/check/payment") {
      setProgress(100);
    } else {
      setProgress(0);
    }
  }, [path]);
  if (cart.length === 0) {
    return (
      <div className="text-center text-slate-700 font-bold text-4xl">
        Sem items no carrinho :(
      </div>
    );
  }
  return (
    <div className="xl:w-full xl:min-h-[600px] flex flex-col justify-center items-center  border container rounded-xl py-10">
      <h1 className="text-slate-600 text-2xl font-bold mb-10">
        Informações de pagamento
      </h1>
      <div className="flex items-center  mb-14  justify-center">
        <div className="relative">
          <h4 className="absolute top-10 text-slate-500 text-xs">Check</h4>
          <MdOutlineFactCheck className="h-10 w-10 text-orange-500" />
        </div>
        <Progress value={progress} className="xl:w-44 w-20 " />
        <div className="relative">
          <h4 className="absolute top-10  text-slate-500 text-xs">Pagamento</h4>
          <MdPayment
            className={`h-10 w-10 ${progress === 100 && "text-orange-500"}`}
          />
        </div>
        <Progress value={0} className="xl:w-44 w-20 " />
        <div className="relative">
          <h4 className="absolute top-10  text-slate-500 text-xs">Concluido</h4>
          <AiOutlineFileDone className={`h-10 w-10`} />
        </div>
      </div>
      <div className=" xl:w-full xl:min-h-[600px]  flex  bg-white  ">
        <Outlet />
      </div>
    </div>
  );
}
