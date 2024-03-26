import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
interface itemPro {
  toogleItems?: any;
  toogleColor?: any;
  color?: string;
  toogleValue?: string;
  toogleMethod?: any;
  toogleStyle?:string,
}
export function NewToogle(props: itemPro) {
  return (
    <ToggleGroup
      type="single"
      value={props.toogleValue}
      onValueChange={props.toogleMethod}
    >
      {props.toogleItems.map((el: { color: string; item: string }) => {
        return (
          <ToggleGroupItem key={el.item} className={`${el.color}`} value={el.item}>
            <span className={props.toogleStyle}> {el.item}</span>
          </ToggleGroupItem>
        );
      })}
    </ToggleGroup>
  );
}
