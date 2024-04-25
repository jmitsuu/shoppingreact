import { FetchComments } from "@/api/comments/FetchComments";
import { FetchProducts } from "@/api/products/FetchProducts";

export function useRequestFull (){
  const {products} = FetchProducts();
  const {comments} = FetchComments();
  if(!products) return

  const response = products.map((items:any)=>{
    const filterComments = comments.filter((el:{title:string}) => el.title === items.title);
if(filterComments){
  return{
    _id:items._id,
    title:items.title,
    image_url:items.image_url,
    price:items.price,
    description:items.description,
    genenere:items.genere,
    comments:[filterComments]
  }
}
return items;
 
  })

  return response
}