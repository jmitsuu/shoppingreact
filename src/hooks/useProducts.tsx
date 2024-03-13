import instance from "@/http/instance";
import { useState, useEffect } from "react";

export function useProducts() {
  const [results, setResults] = useState<any | undefined>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await instance.get("/products");
        setResults(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { results, loading };
}
