import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { arrItems } from "@/interfaces/ProductInterface";
import { useCart } from "@/store/CartStore";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router-dom";

export function Payment() {
  const { cart, total } = useCart();

  return (
    <div className=" xl:w-full xl:min-h-[600px] rounded-xl    container bg-white ">
      <div className="xl:flex xl:justify-between items-center gap-6 justify-center w-full">
        <div className=" py-2 px-4 rounded-md xl:min-h-[500px] h-[300px] xl:w-72 flex flex-col   shadow-lg mb-10">
          <div className="h-full max-h-[500px] border p-2 mb-10 w-[250px] rounded-md overflow-y-auto">
            {cart.map((item: arrItems) => {
              return (
                <div
                  className="flex mb-4 border p-2 rounded-md shadow-lg"
                  key={item._id}
                >
                  <div>
                    <img
                      src={item.image_url}
                      className="xl:h-24 h-10 rounded"
                    />
                    <h3 className=" text-orange-600 font-bold m-2">
                      {item.price}R$
                    </h3>
                  </div>

                  <div className="ml-2">
                    <h1 className="text-[0.5rem] xl:text-[0.7rem] font-bold">
                      {item.title}
                    </h1>

                    <h2 className="text-[0.7rem] ">
                      Cor: <span className=" font-bold">{item.color}</span>
                    </h2>
                    <h2 className="text-[0.7rem] ">
                      tamanho: <span className=" font-bold">{item.size}</span>
                    </h2>
                    <h2 className="text-[0.7rem] ">
                      qtd: <span className=" font-bold">{item.amout}</span>
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
          <h1 className="text-slate-600 text-center flex items-center m-auto">
            Total a pagar:{" "}
            <span className="font-bold text-xl">{total} R$</span>
          </h1>
        </div>
        <div className=" flex  xl:gap-10 md:justify-between border p-4 rounded-md shadow-lg">
          <div>
            <Label className="text-slate-600 mb-2">Nome no cartão</Label>
            <Input type="text" />
            <Label className="text-slate-600">Numero do cartão</Label>
            <Input type="text" className="md:w-80 w-48 0 mb-2" />
            <Label className="text-slate-600">Validade</Label>
            <Input type="text" className="w-20 0 mb-2" placeholder="MM/AA" />
            <Label className="text-slate-600">CCV</Label>
            <Input type="text" className="w-20 0 mb-2" placeholder="codigo" />
            <div className="flex flex-col gap-10 w-44 mt-10">
              <Button className="hover:bg-orange-400 bg-orange-700 text-slate-200">
                Confirmar pagamento
              </Button>
              <Link to={"/"} className="w-full">
                <Button className=" w-full">Continuar comprando</Button>
              </Link>
            </div>
          </div>
          <div className=" p-4 rounded-2xl hidden sm:flex flex-col items-center  bg-black h-full">
            <p className="text-slate-200 text-xs xl:text-md">
              O CCV do seu cartão encontra-se na parte de tras.
            </p>
            <img
              src="https://jairo3478.c35.integrator.host/images/card.png"
              className="md:w-72 md:h-44"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
