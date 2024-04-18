import { Link, useNavigate } from "react-router-dom";
import { ModalAside } from "./ModalAside";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { IoPersonSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { FetchUserAdm } from "@/api/userAuth/FetchUserAdm";
import {
 Sheet,
 SheetContent,
 SheetTrigger,
 SheetClose,
} from "@/components/ui/sheet";
export const Header = () => {
 const { admin } = FetchUserAdm();

 const navigate = useNavigate();
 function singout() {
  localStorage.removeItem("credentials");
  setTimeout(() => {
   navigate("/");
   navigate(0);
  }, 400);
 }

 return (
  <header className=" h-16 bg-white w-screen  flex justify-center  items-center  z-50 ">
   <nav className="flex  text-gray-600 text-md font-bold items-center justify-center   ">
    <div className="md:flex w-screen hidden px-10 h-16 z-50 fixed justify-between items-center bg-white  ">
     <ul className="flex gap-6 items-center">
      <Link to={"/"} className="cursor-pointer  hover:border-b-[0.1em]">
       Shop
      </Link>
      <li className="cursor-pointer  hover:border-b-[0.1em]">
       <Link to={"/sobre"}> Sobre</Link>
      </li>
      <li
       className={`cursor-pointer text-red-400   hover:border-b-[0.1em] ${
        !admin ? "hidden" : null
       }`}
      >
       <Link to={"/admin"}> Admin</Link>
      </li>
     </ul>

     <div className="flex items-center gap-5">
      <div
       className={`border p-2 rounded-full cursor-pointer hover:bg-gray-200 transition-all  ${
        !admin ? "hidden" : null
       }`}
       onClick={singout}
      >
       {<IoPersonSharp />}
      </div>
      {/* <p>{user?.userName}</p> */}
      <Link
       to={"/auth/singin"}
       className={`hover:border-b-[0.1em] cursor-pointe  ${
        admin ? "hidden" : null
       }`}
      >
       Conta
      </Link>
      <ModalAside icon={<RiShoppingCart2Fill />} />
     </div>
    </div>
   </nav>
   <Sheet>
    <SheetTrigger className="text-3xl cursor-pointer flex md:hidden justify-start w-full   hover:text-slate-500">
     <FaBars className="ml-4" />
    </SheetTrigger>
    <SheetContent side={"top"} className="bg-white flex flex-col  w-full ">
     <SheetClose>
      <span>X</span>
     </SheetClose>
     <ul className=" text-2xl  text-gray-500  items-center">
      <Link to={"/"} className="cursor-pointer">
       <SheetClose>Shop</SheetClose>
      </Link>

      <li className="cursor-pointer ">
       <Link to={"/sobre"}>
        {" "}
        <SheetClose> Sobre </SheetClose>
       </Link>
      </li>
      <li
       className={`cursor-pointer text-red-400  ${!admin ? "hidden" : null}`}
      >
       <Link to={"/admin"}>
        <SheetClose> Admin </SheetClose>{" "}
       </Link>
      </li>
      <div
       className={`  flex items-center cursor-pointer  transition-all  ${
        !admin ? "hidden" : null
       }`}
       onClick={singout}
      >
       Sair
      </div>
      <div className="flex gap-3 items-center">
       {/* <p>{user.userName}</p> */}
      </div>
      <Link
       to={"/auth/singin"}
       className={` cursor-pointer flex gap-2 items-center  ${
        admin ? "hidden" : null
       }`}
      >
       <SheetClose>Conta</SheetClose>
       {<IoPersonSharp />}
      </Link>
     </ul>
    </SheetContent>
   </Sheet>
  </header>
 );
};
