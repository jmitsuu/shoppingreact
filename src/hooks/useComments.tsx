import instance from "@/http/instance";
import { useEffect, useState } from "react";
export function useComments() {
  const [comments, setComments] = useState<any | undefined>([]);
  const [loadingComments, setloadingComments] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const { data } = await instance.get("/comments");
        setComments(data);
      } catch (error) {
        console.log(error);
      } finally {
        setloadingComments(false);
      }
    };
    fetchComments();
  }, []);

  return { comments, loadingComments };
}
