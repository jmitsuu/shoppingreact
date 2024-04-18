import { Button } from "@/components/ui/button";
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

export function Management() {
 const { products, isLoading } = FetchProducts();
 const limitedProducts = products.slice(0, 10);
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
