import { useCount } from "@/hooks/useCount";
export function Count() {
  const { more, less, count } = useCount();

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
