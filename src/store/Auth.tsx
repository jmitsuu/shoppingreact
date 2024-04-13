import { toast } from "@/components/ui/use-toast";
import instance from "@/http/instance";
import { createContext, useState, useContext, useEffect } from "react";

export const AuthContext = createContext<any>({});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
 const [user, setUser] = useState();

 useEffect(() => {
  const  data:any = localStorage.getItem("credentials");
  const userLocal = JSON.parse(data)
  if (!userLocal) return
  setUser(userLocal);
 }, []);

 const singin = async (userEmail: string, userPass: string) => {
  const user = {
   email: userEmail,
   password: userPass,
  };
  try {
   const { data } = await instance.post("/login", user, {
    headers: {
     "Content-Type": "application/json",
    },
   });

   if(!data) return;
   if (data) {
    localStorage.setItem("credentials",   JSON.stringify({
      userName: data.userName,
      tokenLocal:data.token,
      id: data.id_user,
    }))
    toast({
      variant: "sucess",
      title: "Logado com sucesso!",
    
    });
    setTimeout(()=>{
      window.location.href = "/"
    }, 2000)
     
   }
  } catch (error) {
    const {response}:any = error
  
   toast({
    variant: "destructive",
    title: "Aviso!",
    description: response.data.message,
  });
   
  }
 };
 const signout = () =>{
 localStorage.removeItem("credentials");
 setTimeout(()=>{
  window.location.href = "/"
}, 2000)
 }

 return <AuthContext.Provider value={{user , signed: !!user,  singin , signout}}>{children}</AuthContext.Provider>;
};
export const useAuth = () => useContext(AuthContext);