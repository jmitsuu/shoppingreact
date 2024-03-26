import { useState } from "react";

export function useCount(){
  const [count, setCount] = useState(1);

  function less() {
    if (count > 1) {
      setCount((state) => state - 1);
    
    }
  }

  function more() {
    setCount((state) => state + 1);


  }
  return{count, less, more}

}