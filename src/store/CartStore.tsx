import { createContext, useState, useContext } from "react";
import { arrItems } from "../hooks/ProductInterface";

export const cartContext = createContext<any>([]);

export function CartStore({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<arrItems[]>([]);

  function addToCart(item: arrItems) {
    if (!item) return;
    const findItem = cart.findIndex((el) => el._id == item._id);
    if (findItem >= 0) return;
    setCart((state: any) => [...state, item]);
  }

  return (
    <cartContext.Provider value={{ addToCart, cart }}>
      {children}
    </cartContext.Provider>
  );
}

export const useCart = () => useContext(cartContext);
