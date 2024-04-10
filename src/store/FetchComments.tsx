import instance from "@/http/instance";
import { useQuery } from "@tanstack/react-query";
export function FetchComments() {
  const { data: comments, isLoading: loadComments } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const {data} = await instance.get("/comments");
      return data;
    },
  });

  return { comments, loadComments };
}
