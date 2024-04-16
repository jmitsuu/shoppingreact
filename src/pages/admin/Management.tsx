import { Button } from "@/components/ui/button";
import {
 Table,
 TableBody,
 TableCaption,
 TableCell,
 TableHead,
 TableHeader,
 TableRow,
} from "@/components/ui/table";
import { arrItems } from "@/interfaces/ProductInterface";
import { FetchProducts } from "@/api/products/FetchProducts";
import { useEffect, useState } from "react";

//  {Number(item.price) * Number(item.amout)} R$
export function Management() {
 const [results, setResults] = useState([]);
 const { products, isLoading } = FetchProducts();
 function getMore(a: number, b: number) {
  a = 0;
  b = 10;
  return (a = b), (b = a * a);
 }
 const limitedProducts = products.slice(0, 10);

 // function userReachedBottom() {
 //   const scrollPosition = window.scrollY + window.innerHeight;
 //   const documentHeight = document.documentElement.offsetHeight;
 //   return scrollPosition >= documentHeight;
 // }
 // useEffect(()=>{
 //   setResults(products.slice(0,10))
 //   window.addEventListener('scroll', () => {
 //     if (userReachedBottom()) {
 //       console.log('Usuário chegou no fim da página');
 //       setResults(products.slice(0,10))
 //     }
 //   });
 // },[userReachedBottom])
 if (isLoading) {
  return <div>...</div>;
 }
 return (
  <div className="w-screen h-full container flex justify-center items-center">
   <Table className="  h-[200px] overflow-y-auto mb-5 ">
    {/* <TableCaption>Voce tem {cart.length} item(s) no carrinho.</TableCaption> */}
    <TableHeader>
     <TableRow>
      <TableHead className="t">#</TableHead>
      <TableHead className="text-center">Imagem</TableHead>
      <TableHead className="text-center">Preço</TableHead>
      <TableHead className="text-center">#</TableHead>
     </TableRow>
    </TableHeader>
    <TableBody>
     {limitedProducts.map((item: arrItems) => {
      return (
       <TableRow key={item._id} className="">
        <TableCell className="font-bold text-center">
         <img src={item.image_url} className="h-10" />
        </TableCell>
        <TableCell className="font-bold text-center">{item.title}</TableCell>
        <TableCell className="font-bold text-center">{item.price}</TableCell>
        <TableCell className="font-bold text-center ">
         <Button className="bg-gray-300 text-bold hover:text-white ">
          Editar
         </Button>
         <Button className="bg-red-300 text-bold ml-4 hover:text-white">
          Deletar
         </Button>
        </TableCell>
       </TableRow>
      );
     })}
    </TableBody>
   </Table>
  </div>
 );
}
