import { arrItems } from "@/interfaces/ProductInterface";

export function Comments(props: arrItems) {
  return (
    <div className="items-center flex w-full  justify-between  bg-white h-40 gap-1 p-8 rounded-3xl ">
      <p className="text-slate-700 font-bold"> "{props.comentario} "</p> -
      <h1 className="text-slate-500 text-xs font-bold"> {props.name}</h1>
    </div>
  );
}
