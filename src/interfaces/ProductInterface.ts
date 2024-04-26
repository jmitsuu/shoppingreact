
export interface arrItems{
  sort(arg0: (a: { price: number; }, b: { price: number; }) => number): unknown;
  _id?: number;
  title?: string;
  price?: number;
  image_url?:string;
  description?:string,
  voto?:number | undefined,
  comentario?:string,
  id_comentario?:number,
  name?:string,
  item?:object,
  genere?:string,
  amout?:number,
  size?:string,
  color?:string
  
}