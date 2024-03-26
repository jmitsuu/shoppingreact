import { useCount } from "@/hooks/useCount";
import { useEffect } from "react";

export function Count() {
  const { more, less, count } = useCount();

  useEffect(() => {
    const changeEl = document.getElementsByClassName("elementCount");
    changeEl[0].innerHTML = `${count}`;
  }, [count]);

  return (
    <div className="flex gap-2">
      <div
        onClick={less}
        className="border w-4 text-center rounded cursor-pointer"
      >
        -
      </div>
      <span className={`elementCount changEl=${count}`}> {count}</span>{" "}
      <div
        onClick={more}
        className="border w-4 text-center rounded cursor-pointer"
      >
        +
      </div>
    </div>
  );
}
