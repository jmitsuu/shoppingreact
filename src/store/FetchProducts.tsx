import instance from "@/http/instance";
import { useQuery } from "@tanstack/react-query";

export function FetchProducts() {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await instance.get(`/products`);
      return response.data;
    },
  });

  return { products, isLoading };
}
