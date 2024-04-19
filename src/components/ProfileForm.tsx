import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface formType {
 formlabel?: string | "prop formlabel";
 formvalue?: string | "prop formvalue";
 formplace?: string | "prop formplace";
 formtype?: string | number;
 formname?: any;
 formerror?: any;
 cn?:string
}

export function ProfileForm(props: formType) {
 return (
  <div className="mb-4 px-2">
   <Label className="font-semibold text-md">{props.formlabel}</Label>
   <Input
    {...props.formname}
    className={`h-12 mt-2 ${props.cn} ${props.formerror ? "border-red-500" : ""}`}
    type={props.formtype}
    placeholder={props.formplace}
    value={props.formvalue}
   />
   <p className="text-red-500 text-xs">{props.formerror}</p>
  </div>
 );
}
