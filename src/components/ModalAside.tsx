import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { arrItems } from "@/interfaces/ProductInterface";
import { useCart } from "@/store/CartStore";
import { FaTrashCan } from "react-icons/fa6";
import { RiShoppingCart2Fill } from "react-icons/ri";

export function ModalAside(props: any) {
  const { cart } = useCart();
  if (cart.length === 0) {
    return (
      <RiShoppingCart2Fill className="text-3xl cursor-pointer hover:text-slate-500" />
    );
  }
  return (
    <Sheet>
      <div className="relative flex">
        <span className="absolute bottom-6 text-xs">{cart.length} </span>

        <SheetTrigger className="text-3xl cursor-pointer hover:text-slate-500">
          {props.icon}
        </SheetTrigger>
        <SheetContent
          side={"right"}
          className="bg-white flex flex-col items-center  w-full "
        >
          <h1 className="text-center text-3xl mt-5 mb-10">Carrinho</h1>
          <div className="h-full w-full relative">
            <div className="h-[600px] overflow-y-scroll p-8">
              <ul className="flex flex-col">
                {cart.map((el: arrItems) => {
                  return (
                    <li
                      className="gap-8 flex items-center m-auto z-50 mb-5 "
                      key={el._id}
                    >
                      <div className="">
                        <img src={el.image_url} className="h-16  rounded-sm" />
                        <h1 className=" lowercase w-20 text-[0.8rem]">
                          {el.title}
                        </h1>
                      </div>
                      <h2 className=" text-[0.8rem] w-20">{el.price} R$</h2>
                      <FaTrashCan className="text-xl h-6 w-6 " />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex absolute bottom-8 items-center w-full">
              <h1 className="">Total:</h1>
              <button className="px-2 py-2 rounded-md ml-10 absolute right-0  text-slate-100 hover:bg-green-700 bg-green-500 transition">
                Finalizar Compra
              </button>
            </div>
          </div>
        </SheetContent>
      </div>
    </Sheet>
  );
}
