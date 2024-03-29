import { Link } from "react-router-dom";
import { ModalAside } from "./ModalAside";
import { RiShoppingCart2Fill } from "react-icons/ri";

export const Header = () => {
  return (
    <header className=" h-16 bg-white w-screen  flex justify-center  items-center  z-50 ">
      <nav className="flex  text-gray-600 text-md font-bold items-center justify-center   ">
        <div className="flex w-screen px-10 h-16 z-50 fixed justify-between items-center bg-white  ">
          <ul className="flex gap-6 items-center">
            <Link to={"/"} className="cursor-pointer  hover:border-b-[0.1em]">
              Shop
            </Link>
            <li className="cursor-pointer  hover:border-b-[0.1em]">
              <Link to={"/sobre"}> Sobre</Link>
            </li>
          </ul>
          <div className="flex items-center gap-10">
            <h1 className=" hover:border-b-[0.1em] cursor-pointer">Conta</h1>
            <ModalAside icon={<RiShoppingCart2Fill />} />
          </div>
        </div>
      </nav>
    </header>
  );
};
