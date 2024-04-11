import { useEffect, useState } from "react";
import { AiOutlineFileDone } from "react-icons/ai";
import { MdOutlineFactCheck, MdPayment } from "react-icons/md";
import { useLocation } from "react-router";
import { Progress } from "./ui/progress";

export function ProgressPayment() {
  const path = useLocation();

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    //em uma situação real, poderia ser usado a resposta da api, para cada estagio de validação do carrinho até a conclusão do pagamemto.
    if (path.pathname === "/check/payment") {
      setProgress(100);
    } else {
      setProgress(0);
    }
  }, [path]);
  return (
    <div className="flex items-center  mb-14  justify-center">
      <div className="relative">
        <h4 className="absolute top-10 text-slate-500 text-xs">Check</h4>
        <MdOutlineFactCheck className="h-10 w-10 text-orange-500" />
      </div>
      <Progress value={progress} className="xl:w-44 w-20 " />
      <div className="relative">
        <h4 className="absolute top-10  text-slate-500 text-xs">Pagamento</h4>
        <MdPayment
          className={`h-10 w-10 ${progress === 100 && "text-orange-500"}`}
        />
      </div>
      <Progress value={0} className="xl:w-44 w-20 " />
      <div className="relative">
        <h4 className="absolute top-10  text-slate-500 text-xs">Concluido</h4>
        <AiOutlineFileDone className={`h-10 w-10`} />
      </div>
    </div>
  );
}
