import { arrItems } from "@/hooks/ProductInterface";

export function Comments(props: arrItems) {
  return (
    <div className="items-center flex w-full bg-white h-40 p-2 rounded-3xl ">
      <p className="text-slate-700 font-bold"> "{props.comentario} "</p>
      <h1 className="text-slate-500 text-xs font-bold"> - {props.name}</h1>
    </div>
  );
}
