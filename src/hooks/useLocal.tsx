
export function useLocal(){
  const cred = localStorage.getItem("credentials");
  if(!cred) return;
  const user:any = JSON.parse(cred) 

  return{user}

}