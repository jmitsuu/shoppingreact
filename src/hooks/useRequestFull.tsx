import { FetchComments } from "@/api/comments/FetchComments";
import { FetchProducts } from "@/api/products/FetchProducts";
import { arrItems } from "@/interfaces/ProductInterface";

export function useRequestFull (){
  const {products} = FetchProducts();
  const {comments} = FetchComments();
  if(!products || !comments) return

  const response = products.map((items:arrItems)=>{
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