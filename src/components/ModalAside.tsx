import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
const menuList = [
  {
    title: "Roupas Masculinas",
  },
  {
    title: "Roupas Femininas",
  },
];

export function ModalAside(props: any) {
  return (
    <Sheet>
      <SheetTrigger>{props.icon}</SheetTrigger>
      <SheetContent side={"left"} className="bg-white items-center">
        <ul className="flex flex-col justify-center items-center text-left">
          {menuList.map((el) => {
            return (
              <li className="text-2xl" key={el.title}>
                {el.title}
              </li>
            );
          })}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
