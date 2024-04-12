

import { Input } from "./ui/input"
import { Label } from "./ui/label"

interface formType {
  formLabel?:string | "prop formLabel",
  formValue?:string | "prop formValue", 
  formPlace?:string | "prop formPlace",
  formType?:string | "text"

}

export function ProfileForm(props:formType ) {
return (
  <div className="mb-4 px-2">
    <Label className= "font-semibold text-md">{props.formLabel}</Label>
    <Input className="h-12 mt-2" type={props.formType} placeholder={props.formPlace} value={props.formValue} />
  </div>

)
}
