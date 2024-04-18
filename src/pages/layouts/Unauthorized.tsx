import { FetchUserAdm } from "@/api/userAuth/FetchUserAdm";
import { Spinner } from "@/components/Spinner";
import { TfiFaceSad } from "react-icons/tfi";
import { Link } from "react-router-dom";
export function Unauthorized() {
  const { isLoading } = FetchUserAdm();
if(isLoading){
  return <div className="w-full flex items-center justify-center"><Spinner /></div>
}
 return (
  <div className="flex items-center justify-center h-screen">
   <div className="flex flex-col items-center">
    <h1 className="text-4xl fontbold text-slate-600 mb-10">Não Autorizado</h1>

    <TfiFaceSad className="text-8xl text-slate-600" />
    <Link to={"/"} className=" text-slate-600 mt-10">
     Retornar
    </Link>
   </div>
  </div>
 );
}
