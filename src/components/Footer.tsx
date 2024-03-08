import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export const Footer = () => {
  return (
    <footer
      className="w-screen mt-10   h-80 border-t-[0.1rem] bg-gradient-to-tr from-[#303164]
    via-[#483584]
    to-[#303164]
    "
    >
      <div className="container w-full h-full  flex flex-col items-center">
        <div className="text-gray-400 mt-5">
          <h1 className="font-bold text-xl text-blue-400 ">
            Deseja receber novidades?
          </h1>
          <div className="flex items-center mt-5 gap-2 justify-center">
            <Input
              type="text"
              placeholder="Inscreva-se aqui.."
              className="w-96 h-10 rounded bg-white"
            />
            <Button className="float-right  bg-white rounded hover:bg-slate-200">
              Inscrever
            </Button>
          </div>
        </div>
        <div className="w-full border-t-[1px] relative mt-10 flex items-center h-full">
          <div className="w-32 text-3xl border-r-[1px] pr-40 ">
            <span className="text-slate-400">Shopping</span>{" "}
            <span className="font-bold text-slate-300">Oriaj.</span>
          </div>
          <div className="flex items justify-center w-full">
            <div className="  ml-20">
              <h1 className="text-blue-400 font-bold">Nossas Redes</h1>
              <ul>
                <li className="text-slate-300 text-sm">Face Book</li>
                <li className="text-slate-300 text-sm">Instagram</li>
                <li className="text-slate-300 text-sm">Linkedin</li>
              </ul>
            </div>
            <div className="  ml-20">
              <h1 className="text-blue-400 font-bold">Sobre Nós</h1>
              <ul>
                <li className="text-slate-300 text-sm">Porque Comprar?</li>
                <li className="text-slate-300 text-sm">
                  Incentivamos a sua melhor versão
                </li>
                <li className="text-slate-300 text-sm">Fazemos com prazer</li>
              </ul>
            </div>
            <div className="  ml-20">
              <h1 className="text-blue-400 font-bold">Suporte</h1>
              <ul>
                <li className="text-slate-300 text-sm">SAC - 0800-000-0000</li>
                <li className="text-slate-300 text-sm">
                  WHATSAPP - 48- 0000-0000
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
