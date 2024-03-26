import instance from "@/http/instance";
import { useQuery } from "@tanstack/react-query";
export function FetchComments() {
  const { data: comments, isLoading: loadComments } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const response = await instance.get("/comments");
      return response.data;
    },
  });

  return { comments, loadComments };
}
