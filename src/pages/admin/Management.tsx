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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/Modal";


export function Management() {
 const { products, isLoading } = FetchProducts();
 const [results, setResults] = useState<any>([]);
 const [inputValue, setInputValue] = useState("");

 const getMore = () => {
  setResults(() => products.slice(0, products.length * 10));

 };

 useEffect(() => {
  if (products) {
   setResults(products.slice(0, 10));
  }
  console.log(products)

 }, [products]);
 const filteredProducts =
  inputValue.length > 0
   ? products.filter((el: { title: string }) => el.title.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()))
   : [];
 if (isLoading) {
  return <div>...</div>;
 }

 return (
  <div className="w-screen  px-10   ">
   <h1 className="text-gray-500 text-2xl md:text-4xl mb-20 text-center">
    Painel Administrador
   </h1>
   <div className="flex items-center justify-start gap-10 mb-10">
    <Input
     value={inputValue}
     onChange={(e) => {
      setInputValue(e.target.value);
     }}
     className="w-96"
     placeholder="pesquisar item.."
    />

    <Modal
     cn={
      "bg-blue-500 hover:bg-blue-600 py-1 px-2 rounded-sm hover:text-white transition"
     }
     titleTrigger="Adicionar"
     titleModal="Adicionar novo produto"
    />
   </div>
   <div className="flex gap-10">
    <Table className="   xl:min-w-[800px] border-t overflow-y-auto mb-5 ">
     {/* <TableCaption>Voce tem {cart.length} item(s) no carrinho.</TableCaption> */}
     <TableHeader className="bg-gray-50 border">
      <TableRow>
       <TableHead className="text-center">Codigo</TableHead>
       <TableHead className="">Imagem</TableHead>
       <TableHead className="text-center">Titulo</TableHead>
       <TableHead className="text-center">Preço</TableHead>
       <TableHead className="text-center">#</TableHead>
      </TableRow>
     </TableHeader>

     {inputValue.length > 0 ? (
      <TableBody>
       {filteredProducts.map((item: arrItems) => {
        return (
         <TableRow key={item._id} className="">
          <TableCell className="font-bold text-center">{item._id}</TableCell>
          <TableCell className="font-bold text-center">
           <img src={item.image_url} className="h-10" />
          </TableCell>
          <TableCell className="font-bold text-center">{item.title}</TableCell>
          <TableCell className="font-bold text-center">{item.price}</TableCell>
          <TableCell className="font-bold text-center flex items-center justify-center gap-x-4 ">
           <FaPencilAlt className="text-blue-500 text-2xl" />
           <FaTrash className="text-red-500 text-2xl" />
          </TableCell>
         </TableRow>
        );
       })}
      </TableBody>
     ) : (
      <TableBody>
       {results.map((item: arrItems) => {
        return (
         <TableRow key={item._id} className="">
          <TableCell className="font-bold text-center">{item._id}</TableCell>
          <TableCell className="font-bold text-center">
           <img src={item.image_url} className="h-10" />
          </TableCell>
          <TableCell className="font-bold text-center">{item.title}</TableCell>
          <TableCell className="font-bold text-center">{item.price}</TableCell>
          <TableCell className="font-bold text-center flex items-center justify-center gap-x-4 ">
           <FaPencilAlt className="text-blue-500 text-2xl cursor-pointer" />
           <FaTrash className="text-red-500 text-2xl cursor-pointer" />
          </TableCell>
         </TableRow>
        );
       })}
      </TableBody>
     )}
    </Table>

    <div className="w-72 h-96">
     <div className="w-full h-44 p-5 border rounded-md flex flex-col text-center ">
      <h1 className="text-gray-400 font-bold text-xl ">Total</h1>
      <p className="text-gray-700 font-bold text-4xl mt-8">{products.length}</p>
     </div>
    </div>
   </div>
   <div className="w-full mt-10 flex ">
   
    <Button className="" onClick={getMore}>
     Carregar
    </Button>
   </div>
  </div>
 );
}
