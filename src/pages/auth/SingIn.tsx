import { ProfileForm } from "@/components/ProfileForm";
import { Button } from "@/components/ui/button";
import { PiLinkedinLogo } from "react-icons/pi";
import { LiaInstagram } from "react-icons/lia";


export function SingIn(){
  return(
    <div className="w-full h-full flex mt-10 flex-col justify-center items-center">
      <h1 className="text-gray-500 text-5xl  border-b-2 pb-3">Bem vindo!</h1>
     <div className="xl:flex shadow-2xl rounded-md shadow-muted-foreground  mt-10 min-h-[400px] min-w-96   justify-center">
      <div >
     <div className="flex w-full justify-between px-5 py-2">
     <h1 className="text-xl text-gray-600 border-b ">Logar</h1>
     <div className="flex  items-center">
     <a href="https://www.linkedin.com/in/jairo-miguel-703121146/" target="_blank">
      <PiLinkedinLogo className="text-2xl cursor-pointer" />
      </a>
      <a href="https://www.instagram.com/jairomiiguel/" target="_blank">
      <LiaInstagram className="text-3xl cursor-pointer" />
      </a>
     </div>
     </div>
    <form className=" xl:w-96 p-4">
    <ProfileForm  formLabel="E-mail" formType="email" formPlace="digite seu e-mail"/>
    <ProfileForm  formLabel="Senha" formType="password" formPlace="digite sua senha"/>
    <Button className="w-full mt-5 h-12 bg-[#483584] hover:bg-[#5842a1]">Entrar</Button>
    <div className="text-xs text-center w-full mt-10">
    <span className="hover:text-gray-800 text-gray-600 cursor-pointer" >Esqueceu sua senha?</span>
    </div>

    </form>
      </div>
    <div className="xl:w-96 xl:min-h-full xl:rounded-r-md flex flex-col items-center justify-center bg-gradient-to-tr from-[#303164]
    via-[#483584]
    to-[#303164]">
      <h1 className="text-gray-300 font-bold text-3xl">Bem vindo a Oriaj</h1>
      <h2 className="text-gray-300 mt-3  " >Não tem uma conta?</h2>
      <Button className="mt-4 rounded-xl bg-transparent hover:bg-white hover:text-black border">Registrar</Button>
    </div>

     </div>

    </div>
  )
}