import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface arrSelect {
  title: string;
  arrItems: any;
  selectMethod: string;
  controlMethod: any;
}
export function SelectC(props: arrSelect) {
  return (
    <Select value={props.selectMethod} onValueChange={props.controlMethod}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={props.title} />
      </SelectTrigger>
      <SelectContent className="bg-white">
        {props.arrItems.map((el: { item: string }) => {
          return (
            <SelectItem key={el.item} value={el.item}>
              {el.item}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
