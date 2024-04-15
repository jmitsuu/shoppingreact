import instance from "@/http/instance";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./Auth";

export function FetchUserAdm() {
  const {user} = useAuth();
  const {
    data: admin,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["admin"],
    queryFn: async () => {
      const {data} = await instance.get(`/admin`,{
        headers:{
          "Authorization":user.tokenLocal
        }
      });
      return data;
    },
  });

  return { admin, isLoading, isError };
}
