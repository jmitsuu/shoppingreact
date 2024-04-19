import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface arrSelect {
  title: string;
  arrPropSelect: any;
  selectMethod: string;
  controlMethod: any;
}
export function SelectC(props: arrSelect) {
  return (
    <Select value={props.selectMethod} onValueChange={props.controlMethod}>
      <SelectTrigger className="w-[180px]  border-slate-200">
        <SelectValue placeholder={props.title} />
      </SelectTrigger>
      <SelectContent className="bg-white">
        {props.arrPropSelect.map((el: {
          title: string; item: string 
}) => {
          return (
            <SelectItem key={el.item} value={el.item}>
              {el.title}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
