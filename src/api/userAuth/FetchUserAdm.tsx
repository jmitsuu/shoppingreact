import { useLocal } from "@/hooks/useLocal";
import instance from "@/http/instance";
import { useQuery } from "@tanstack/react-query";


export function FetchUserAdm() {
const {user}:any = useLocal()

  const {
    data: admin,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["admin"],
    queryFn: async () => {
      const {data} = await instance.get(`/admin`,{
        headers:{
          "authorization": `${user.tokenLocal}` || null
        }
      });
      return data;
    },
  });

  return { admin, isLoading, isError };
}
