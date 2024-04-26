import { FaStar } from "react-icons/fa";

export function useStars(qtdVotes:any){
const stars = [];
for(let i = 0; i < qtdVotes; i++){
  stars.push(<FaStar key={i} />)
}
return stars
}