import { createContext, useState, useContext, useEffect } from "react";
import { arrItems } from "../interfaces/ProductInterface";
import { toast } from "@/components/ui/use-toast";

export const cartContext = createContext<any>([]);

export function CartStore({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<arrItems[]>([]);
  const [total, setTotal] = useState(0);

  function addToCart(item: arrItems) {
    if (!item || !item._id) return;

    const findItem = cart.findIndex((el) => el._id === item._id);
    if (findItem >= 0) {
      toast({
        variant: "destructive",
        title: "Aviso!",
        description: "o item ja foi adicionado ao carrinho.",
      });
    } else {
      setCart((state: arrItems[]) => [...state, item]);
      toast({
        variant: "sucess",
        title: "Adicionado!",
        description: "Seu item foi adicionado ao carrinho.",
      });
    }
  }
  function removeItem(item: arrItems) {
    if (!item || !item._id) return;

    const updatedCart = cart.filter((el) => el._id !== item._id);
    setCart(updatedCart);
  }

  useEffect(() => {
  const totalCart = cart.map((el: arrItems) => {
    const total = {
      prices: Number(el.price) * Number(el.amout),
    };

    return total.prices;
  });
  const totalPrice = totalCart.reduce(
    (acc: number, curr: number) => acc + curr,
    0
  );
    setTotal(totalPrice);
  }, [cart]);

  return (
    <cartContext.Provider value={{ addToCart, cart, removeItem, total }}>
      {children}
    </cartContext.Provider>
  );
}

export const useCart = () => useContext(cartContext);
