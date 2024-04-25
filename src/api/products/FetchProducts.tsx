import instance from "@/http/instance";
import { useQuery } from "@tanstack/react-query";

export function FetchProducts() {
  const {
    data: products,
    isLoading,
    isError,
    refetch
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const {data} = await instance.get(`/products`);
      return data;
    },
  });

  return { products, isLoading, isError , refetch };
}
