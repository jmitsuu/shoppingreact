
import {
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableHeader,
 TableRow,
} from "@/components/ui/table";
import { arrItems } from "@/interfaces/ProductInterface";
import { FetchProducts } from "@/api/products/FetchProducts";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

export function Management() {
 const { products, isLoading } = FetchProducts();
 const [page, setPage ] = useState<any>([])
 const limitedProducts = products.slice(0, 10);
 console.log(products.length / 10)
 useEffect(()=>{
  for(let i = 1; i < products.length / 10; i ++){
    setPage((state:any) => [...state, i])
   }
},[])
 if (isLoading) {
  return <div>...</div>;
 }

 return (
  <div className="w-screen h-full container  justify-center items-center">
   <h1 className="text-gray-500 text-2xl md:text-4xl mb-20 text-center">
    Painel Administrador
   </h1>
   <Table className="  h-[200px] overflow-y-auto mb-5 ">
    {/* <TableCaption>Voce tem {cart.length} item(s) no carrinho.</TableCaption> */}
    <TableHeader>
     <TableRow>
      <TableHead className="text-center">#</TableHead>
      <TableHead className="">Imagem</TableHead>
      <TableHead className="text-center">Titulo</TableHead>
      <TableHead className="text-center">Preço</TableHead>
      <TableHead className="text-center">#</TableHead>
     </TableRow>
    </TableHeader>
    <TableBody>
     {limitedProducts.map((item: arrItems) => {
      return (
       <TableRow key={item._id} className="">
         <TableCell className="font-bold text-center">{item._id}</TableCell>
        <TableCell className="font-bold text-center">
         <img src={item.image_url} className="h-10" />
        </TableCell>
        <TableCell className="font-bold text-center">{item.title}</TableCell>
        <TableCell className="font-bold text-center">{item.price}</TableCell>
        <TableCell className="font-bold text-center flex items-center justify-center gap-x-4 ">
        <FaPencilAlt  className="text-blue-500 text-2xl"/>
        <FaTrash  className="text-red-500 text-2xl"/>
        </TableCell>
       </TableRow>
      );
     })}
    </TableBody>
   </Table>
   {page}
  </div>
 );
}
