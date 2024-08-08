import {
 Dialog,
 DialogContent,
 DialogDescription,
 DialogHeader,
 DialogTitle,
 DialogTrigger,
} from "@/components/ui/dialog";
import { SelectC } from "./SelectC";
import { useState } from "react";
import { ProfileForm } from "./ProfileForm";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import instance from "@/http/instance";
import { toast } from "./ui/use-toast";
import { useLocal } from "@/hooks/useLocal";
import { Cross2Icon } from "@radix-ui/react-icons";
import { FetchProducts } from "@/api/products/FetchProducts";
const Selectitems = [
 {
  item: "male",
  title: "Masculino",
 },
 {
  item: "female",
  title: "Feminino",
 },
];
const category = [
 {
  item: "clothing",
  title: "Roupas",
 },
 {
  item: "jewlery",
  title: "Acessórios",
 },
];
interface typeInput {
 inputTitle?: string | "";
 inputUrl?: string | "";
 inputPrice?: number;
 inputDescription?: string;
 category?: string;
 genere?: string;
 title?: string;
 image_url?: string;
 description?: string;
 price?: number;
}
export function Modal(props: any) {
 const [method, setMethod] = useState("");
 const [smethod, setsMethod] = useState("");
 const [modal, setModal] = useState(false);
 const { refetch } = FetchProducts();
 const { user }: any = useLocal();
 const mutation = useMutation({
  mutationFn: (newTodo: typeInput) => {
   return instance.post("/products", newTodo, {
    headers: {
     authorization: `${user.tokenLocal}`,
    },
   });
  },
  onSuccess: () => {
   setModal(false);
   refetch();
   toast({
    variant: "sucess",
    title: "adicionado com sucesso!",
   });
  },
  onError(error) {
   const { response }: any = error;
   toast({
    variant: "destructive",
    title: "Aviso!",
    description: response?.data.message,
   });
  },
 });
 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm();

 function pushNewItem({
  inputTitle,
  inputUrl,
  inputDescription,
  inputPrice,
 }: typeInput) {
  mutation.mutate({
   category: smethod,
   genere: method,
   title: inputTitle,
   image_url: inputUrl,
   description: inputDescription,
   price: inputPrice,
  });


 }

 return (
  <Dialog open={modal}>
   <DialogTrigger
    onClick={() => {
     setModal(true);
    }}
    className={`${props.cn}`}
   >
    {props.titleTrigger}
   </DialogTrigger>
   <DialogContent className="w-full ">
    <Cross2Icon
     className="h-4 w-4 float-left absolute right-4 top-5 cursor-pointer"
     onClick={() => {
      setModal(false);
     }}
    />
    <DialogHeader className="mt-10">
     <DialogTitle>{props.titleModal}</DialogTitle>
     <DialogDescription className="pt-10 pb-4">
      Adicione seu item nos campos abaixo:
     </DialogDescription>
     <form onSubmit={handleSubmit(pushNewItem)}>
      <div className="flex gap-5">
       <SelectC
        title="Genero"
        arrPropSelect={Selectitems}
        selectMethod={method}
        controlMethod={setMethod}
       />
       <SelectC
        title="Categoria"
        arrPropSelect={category}
        selectMethod={smethod}
        controlMethod={setsMethod}
       />
      </div>
      <ProfileForm
       formlabel="Nome do Produto"
       formtype="text"
       formplace="nome do produto"
       formname={{
        ...register("inputTitle", { required: "Preencha o titulo" }),
       }}
       formerror={errors.inputTitle?.message}
      />
      <ProfileForm
       formlabel="URL do produto"
       formtype="text"
       formplace="Url do produto"
       formname={{
        ...register("inputUrl", { required: "Preencha a url" }),
       }}
       formerror={errors.inputUrl?.message}
      />
      <ProfileForm
       formlabel="Preço"
       formtype="number"
       formplace="preço"
       cn="w-44"
       formname={{
        ...register("inputPrice", { required: "Preencha o preço" }),
       }}
       formerror={errors.inputPrice?.message}
      />
      <ProfileForm
       formlabel="Descrição"
       formtype="text"
       formplace="Fale sobre o produto"
       cn="h-20"
       formname={{
        ...register("inputDescription", { required: "Preencha a descrição" }),
       }}
       formerror={errors.inputDescription?.message}
      />
      <Button className="float-right mt-10">Cadastrar</Button>
     </form>
    </DialogHeader>
   </DialogContent>
  </Dialog>
 );
}
