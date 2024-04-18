import instance from "@/http/instance";
import { useQuery } from "@tanstack/react-query";

const cred: any | null = localStorage.getItem("credentials");
const user = JSON.parse(cred)
export function FetchUserAdm() {

  const {
    data: admin,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["admin"],
    queryFn: async () => {
      const {data} = await instance.get(`/admin`,{
        headers:{
          "authorization": `${user.tokenLocal}`
        }
      });
      return data;
    },
  });

  return { admin, isLoading, isError };
}
