import { toast } from "@/components/ui/use-toast";
import instance from "@/http/instance";
import { useMutation } from "@tanstack/react-query";
import { createContext, useState, useContext, useEffect } from "react";

export const AuthContext = createContext<any>({});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
 const [user, setUser] = useState();

 useEffect(() => {
  const  localData:any = localStorage.getItem("credentials");
  const userLocal = JSON.parse(localData)
  if (!userLocal) return
  setUser(userLocal);
 }, []);
 const mutation = useMutation({
  mutationFn: (newTodo) => {
    return instance.post('/login', newTodo)
  },
})

if(mutation.isSuccess){
  const {data} = mutation
      localStorage.setItem("credentials",JSON.stringify({
      userName: data.data.userName,
      tokenLocal:data.data.token,
      id: data.data.id_user,
    }))
      toast({
      variant: "sucess",
      title: "Logado com sucesso!",
    
    });

}
if(mutation.isError){
  const {error} = mutation;
  const {response}:any = error
     toast({
    variant: "destructive",
    title: "Aviso!",
    description: response.data.message,
  });
}

 const signout = () =>{
 localStorage.removeItem("credentials");
 setTimeout(()=>{
  window.location.href = "/"
}, 2000)
 }

 return <AuthContext.Provider value={{user , signout, mutation}}>{children}</AuthContext.Provider>;
};
export const useAuth = () => useContext(AuthContext);