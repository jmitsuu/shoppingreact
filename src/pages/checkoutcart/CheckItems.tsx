import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { useCart } from "@/store/CartStore";
import { Link } from "react-router-dom";

export function CheckItems() {
  const { cart, total } = useCart();

  return (
    <div className="xl:flex w-full  ">
      <Table className="md:w-[800px] w-full overflow-y-auto mb-5 ">
        <TableCaption>Voce tem {cart.length} item(s) no carrinho.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Produto</TableHead>
            <TableHead className="text-center">Preço</TableHead>
            <TableHead className="text-center">Quantidade</TableHead>
            <TableHead className="text-center">Preço Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cart.map((item: arrItems) => {
            return (
              <TableRow key={item._id} className="">
                <TableCell className="text-center">
                  <div className="xl:flex gap-3">
                    <img src={item.image_url} className="h-20 rounded-md" />
                    <div className="xl:text-[0.8rem] text-[0.5rem]">
                      <p className="text-slate-700 font-bold  mb-5">
                        {item.title}
                      </p>
                      <p className="text-slate-600 ">
                        Cor: <span className="font-bold">{item.color}</span>
                      </p>
                      <p className="text-slate-600 ">
                        Tamanho:<span className="font-bold">{item.size}</span>
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-slate-700 font-bold text-center">
                  {item.price} R$
                </TableCell>
                <TableCell className="text-slate-700 font-bold text-center ">
                  {item.amout}
                </TableCell>
                <TableCell className="text-orange-500/50 font-bold text-center">
                  {Number(item.price) * Number(item.amout)} R$
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <div className=" xl:w-96  border flex flex-col   px-4 py-2 rounded-md">
        <div className="flex gap-2 flex-col items-center border-b pb-4 w-full">
          <h1 className="text-slate-700 font-semibold text-xl mb-2">
            Calcular entrega
          </h1>
          <Input type="text" placeholder="informar um CEP" className="w-44" />
          <Button className=" w-full rounded-full text-slate-400 font-bold">
            Buscar
          </Button>
        </div>
        <div className="flex gap-2 flex-col items-center pb-4 mt-5 w-full">
          <h1 className="text-slate-700 font-semibold text-xl mb-2">Cupom</h1>
          <p className="text-xs text-slate-700 font-semibold">
            Lorem Ipsum is simply dummy text of the printing{" "}
          </p>
          <Input type="text" placeholder="Inserir Cupom" className="w-44" />
          <Button className=" w-full rounded-full text-slate-400 font-bold">
            Aplicar
          </Button>
        </div>
        <div className="flex  flex-col items-center  mt-5 w-full bg-orange-300/50 rounded-md p-4">
          <h1 className="text-slate-700 font-semibold text-xl mb-2">
            Total do carrinho
          </h1>
          <div>
            <ul className="w-full   ">
              <li className="text-[0.8rem] font-bold text-slate-700 flex gap-10 justify-between">
                <h3> Total a pagar:</h3>
                <h4> {total} R$</h4>
              </li>
              <li className="text-[0.8rem] font-bold text-slate-700 flex gap-10 w-full justify-between">
                <h3> Frete:</h3>
                <h4 className="float-right"> Gratis!</h4>
              </li>
              <li className="text-[0.8rem] font-bold text-slate-700 flex gap-10 w-full justify-between">
                <h3> Desconto:</h3>
                <h4 className="float-right"> 0,00 R$</h4>
              </li>
            </ul>
          </div>

          <Link to={"/check/payment"} className="w-full">
            <Button className=" w-full rounded-full text-black font-bold bg-white hover:bg-orange-400 mt-10">
              Pagamento
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
