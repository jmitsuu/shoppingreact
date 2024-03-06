import { Cart } from "./Cart";
import { Link } from "react-router-dom";


export const Header = () => {
  return (
    <header className=" h-28 bg-white w-screen fixed flex justify-center  items-center  z-50 ">
      <nav className="flex  text-gray-600 text-xl font-bold items-center justify-center   ">
        <div className="flex w-screen px-10 h-28 fixed justify-between items-center bg-white container ">
          <ul className="flex gap-6">
            <Link to={"/"} className="cursor-pointer">Home</Link>
            <li className="cursor-pointer">
              <Link to={"/sobre"}> Sobre</Link>
            </li>
          </ul>
          <div className="">
            <Cart />
          </div>
        </div>
      </nav>
    </header>
  );
};
