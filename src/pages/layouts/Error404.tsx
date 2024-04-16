import { TfiFaceSad } from "react-icons/tfi";
export function Error404() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl fontbold text-slate-600 mb-10">Offline</h1>
     

        <TfiFaceSad className="text-8xl text-slate-600" />
        <p className=" text-slate-600 mt-10">Aguarde um momento..</p>
      </div>
    </div>
  );
}
