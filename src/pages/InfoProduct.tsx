import { Button } from "@/components/ui/button";
import { useParams } from "react-router";
import { arrItems } from "@/interfaces/ProductInterface";
import { useCart } from "@/store/CartStore";
import { NewToogle } from "@/components/NewToogle";
import { useState } from "react";
import { useCount } from "@/hooks/useCount";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import { Spinner } from "@/components/Spinner";
import { useProducCharact } from "@/hooks/useProducCharact";
import { Error404 } from "./layouts/Error404";
import { useRequestFull } from "@/hooks/useRequestFull";
import { useStars } from "@/hooks/useStars";

export function InfoProduct() {
 const { addToCart } = useCart();
 const response = useRequestFull();
 const { colors, sizeProdu } = useProducCharact();
 const [inputColor, setInputColor] = useState("preto");
 const [inputSize, setInputSize] = useState("");
 const { more, less, count } = useCount();
 const { toast } = useToast();
 const { id: title } = useParams();

 if (!response) return;
 const findItem = response.find((el: any) => {
  if (el.title.replaceAll(" ", "-").toLowerCase() === title) {
   return el;
  }
 });

 const filterVotes = findItem.comments[0].map((el: any) => el.voto);
 const totalVote = filterVotes.reduce(
  (acc: number, curr: number) => acc + curr,
  0
 );
 console.log(totalVote / findItem.comments[0].length);
 function incrementCart() {
  if (!inputSize) {
   toast({
    variant: "alert",
    title: "Aviso!",
    description: "Voce precisa selecionar um tamanho.",
   });
  } else {
   if (!findItem) {
    return;
   } else {
    const newItems = {
     ...findItem,
     color: inputColor,
     size: inputSize,
     amout: count,
    };
    addToCart(newItems);
   }
  }
 }
 if (!response) {
  return (
   <div className="flex justify-center items-center">
    <Spinner />{" "}
   </div>
  );
 }
 if (!findItem) {
  return <Error404 />;
 }

 return (
  <div className="w-full justify-center container items-center  flex flex-col">
   <div className=" xl:min-h-[600px] xl:w-[900px] w-full border rounded-xl mb-24 mt-10">
    <div className="xl:flex p-8 justify-center items-center">
     <div className=" md:w-80  overflow-hidden md:m-auto ">
      <img src={findItem.image_url} className="xl:h-96  rounded-md  w-full  " />
      <div className="text-slate-700  md:block hidden mt-10 sm:mb-10">
       <h1 className="text-slate-600 font-semibold">Descrição:</h1>
       <p className="font-bold text-[12px] w-80">{findItem.description}</p>
      </div>
     </div>
     <div className=" space-y-4 md:w-96 mt-2 ">
      <h1 className="font-bold text-slate-600">{findItem.title}</h1>
      <h2 className="text-yellow-500 font-bold flex items-center ">
       {" "}
       <span className="text-gray-600 ">Nota:</span>{" "}
       {findItem.comments[0].length === 0 ? (
        <span className="text-gray-400">Não avaliado</span>
       ) : (
        <span className="flex pl-2">
         {" "}
      
         { useStars(Number(totalVote / findItem.comments[0].length).toFixed(1))} 
         
        </span>
       )}
      </h2>
      <p className="text-xs font-semibold text-slate-400">
       Codigo: {findItem._id}
      </p>
      <div className="w-full">
       <h3 className="text-slate-600">
        por:{" "}
        <span className="text-red-700 font-bold text-2xl">
         R$ {findItem.price}
        </span>
       </h3>
       <p className="text-xs text-slate-600">Ou</p>
       <h3 className="font-semibold text-slate-700">
        {" "}
        <span className="text-red-700"> {Number(findItem.price) / 8}</span>{" "}
        <span className="text-[14px]"> 8x no cartão sem juros</span>
       </h3>
       <div className="mb-10 mt-5">
        <h3 className="font-bold">Quantidade:</h3>
        <div className="flex gap-2">
         <div
          onClick={less}
          className="border w-4 text-center rounded cursor-pointer"
         >
          -
         </div>
         <span> {count}</span>{" "}
         <div
          onClick={more}
          className="border w-4 text-center rounded cursor-pointer"
         >
          +
         </div>
        </div>
       </div>

       <div className="mb-10 mt-5">
        <h3 className="font-bold">Cor:</h3>
        <div className="flex gap-3">
         <NewToogle
          toogleStyle="hidden"
          toogleValue={inputColor}
          toogleMethod={setInputColor}
          toogleItems={colors}
          toogleColor={colors}
         />
        </div>
       </div>
       <div className="mb-10 mt-5">
        <h3 className="font-bold">Tamanho:</h3>
        <div className="flex gap-3 text-center">
         <NewToogle
          toogleValue={inputSize}
          toogleMethod={setInputSize}
          toogleItems={sizeProdu}
         />
        </div>
       </div>

       <div className="xl:flex xl:flex-row  gap-5   w-full justify-center items-center flex-col flex">
        <div onClick={incrementCart}>
         <Button className="bg-green-500 hover:bg-green-900 rounded xl:mb-0 mb-5 text-slate-100 ">
          Adicionar ao carrinho{" "}
         </Button>
        </div>
        <Link to={"/"} className="">
         <Button className=" ">Continuar comprando</Button>
        </Link>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div>
    <h1 className=" p-2 mt-10 text-2xl font-semibold text-slate-700">
     Comentarios
    </h1>

    <div className="container mt-10 p-4   xl:w-[900px]  border-[1px] max-h-96 rounded overflow-y-auto  mb-24">
     {!findItem.comments[0].length && (
      <div className="text-center cursor-pointer text-gray-700 font-bold hover:text-gray-500">
       Seja o primeiro a comentar
      </div>
     )}
     {findItem.comments[0].map((el: arrItems) => {
      return (
       <div
        className=" border-[1px] shadow-md rounded m-2 p-3 flex flex-col"
        key={el.id_comentario}
       >
        <div className=" flex flex-col justify-center gap-2 ">
         <h1 className="text-[15px] font-bold ">{el.name}</h1>
         <div className="text-yellow-500 flex">{ useStars(el.voto)}</div>
      
        
         <p className="text-gray-600 text-[14px]">{el.comentario}</p>
        </div>
       </div>
      );
     })}
    </div>
   </div>
  </div>
 );
}
