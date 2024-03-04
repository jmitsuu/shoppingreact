import { RiShoppingCart2Fill } from "react-icons/ri";
import { FaTrashCan } from "react-icons/fa6";
import { useCart } from "../store/CartStore";
import { arrItems } from "@/hooks/ProductInterface";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export function Cart() {
  const { cart } = useCart();
  const [dropCart, setDropCart] = useState<boolean>(false);

  if (cart.length === 0) {
    return (
      <RiShoppingCart2Fill className="text-3xl cursor-pointer hover:text-slate-500" />
    );
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="relative ">
        {" "}
        <span className="absolute bottom-6 text-xs">{cart.length} </span>
        <RiShoppingCart2Fill className="text-3xl cursor-pointer hover:text-slate-500" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="absolute right-0  xl:min-w-96 p-2">
        <DropdownMenuLabel>Carrinho</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {cart.map((el: arrItems) => {
          return (
            <DropdownMenuItem className="gap-8 flex items-center m-auto">
              <img src={el.image_url} className="h-10  rounded-sm" />
              <h1 className="text-[0.7rem] lowercase w-full">{el.title}</h1>
              <h2 className="w-full text-xs">{el.price} R$</h2>
              <FaTrashCan className="text-xl w-full" />
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
