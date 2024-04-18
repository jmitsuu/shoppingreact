import {
 Sheet,
 SheetContent,
 SheetTrigger,
} from "@/components/ui/sheet";
import { arrItems } from "@/interfaces/ProductInterface";
import { useCart } from "@/store/CartStore";
import { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

export function ModalAside(props: any) {
 const [modal, setModal] = useState(false);

 const { cart, removeItem, total } = useCart();

 if (cart.length === 0) {
  return (
   <RiShoppingCart2Fill className="text-3xl cursor-pointer hover:text-slate-500" />
  );
 }
 function closeModal() {
  setModal(false);
 }

 return (
  <Sheet open={modal}>
   <div className="relative flex">
    <span className="absolute bottom-6 text-xs">{cart.length} </span>

    <SheetTrigger
     onClick={() => {
      setModal(true);
     }}
     className="text-3xl cursor-pointer hover:text-slate-500"
    >
     {props.icon}
    </SheetTrigger>
    <SheetContent
     side={"right"}
     className="bg-white flex flex-col items-center  w-full "
    >
     <span
      className="absolute right-4 top-2 px-2 border rounded-md hover:bg-slate-50 cursor-pointer"
      onClick={() => {
       setModal(false);
      }}
     >
      X
     </span>
    
     <h1 className="text-center text-3xl mt-5 mb-5">Carrinho</h1>
     <div className="h-full relative flex flex-col">
      <div className=" h-[300px] xl:h-[300px]   w-full  overflow-y-auto py-4 px-2 border rounded-md">
       <ul className="flex flex-col">
        {cart.map((el: arrItems, index: number) => {
         return (
          el.title && (
           <li
            className="gap-8 flex items-center m-auto z-50 mb-5 border p-1 rounded-md"
            key={index}
           >
            <div className="flex">
             <img src={el.image_url} className="h-16  rounded-sm" />
             <div className="col ml-2">
              <h1 className=" lowercase w-32 text-[0.7rem] ">{el.title}</h1>
              <p className=" lowercase w-32 text-[0.7rem] ">
               qtd: <span className="font-bold"> {el.amout}</span>
              </p>
              <p className=" lowercase w-32 text-[0.7rem] ">
               cor: <span className="font-bold"> {el.color}</span>
              </p>
              <p className=" lowercase w-32 text-[0.7rem] ">
               tamanho: <span className="font-bold">{el.size}</span>
              </p>
             </div>
            </div>

            <h2 className=" text-[0.8rem] w-20">{el.price} R$</h2>

            <FaTrashCan
             onClick={() => {
              removeItem(el);
             }}
             className="text-xl h-6 w-6 cursor-pointer"
            />
           </li>
          )
         );
        })}
       </ul>
      </div>
      <h1 className=" text-center mt-10">
       Total:{" "}
       <span className="font-semibold text-2xl text-gray-700 ">{total} R$</span>
      </h1>
      <div className="flex  justify-center mt-5   items-center  w-full">
       {/* {spinner && <Spinner />} */}
       <div onClick={closeModal}>
        <Link to={"check/cart"}>
         <button className="px-2 py-2 rounded-md  text-slate-100 hover:bg-green-700 bg-green-500 transition">
          Finalizar Compra
         </button>
        </Link>
       </div>
      </div>
     </div>
    </SheetContent>
   </div>
  </Sheet>
 );
}
