import { Cart } from "./Cart";

export const Header = () => {
  return (
    <header className="w-screen h-28 flex justify-center  items-center border-b-[0.1rem] bg-[#CCCCFE] mb-10 z-50 relative">
      <nav className="flex w-screen h-28 text-gray-600 text-xl font-bold items-center justify-center   ">
        <div className="flex w-screen px-10 h-28 fixed justify-between items-center bg-[#CCCCFE]">
          <ul className="flex gap-6">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">
              <a href="/produtos">Produtos</a>
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
