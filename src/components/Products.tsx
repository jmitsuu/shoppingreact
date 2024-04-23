import { Link } from "react-router-dom";
export function Products(props: any) {
  return (
    <main className="   flex justify-center   items-center mb-5  ">
      <div className=" w-72  h-full m-2 p-4 xl:p-2 border-[0.1rem] border-gray-300/80 rounded-xl flex flex-col items-center">
        <Link
          preventScrollReset={true}
          className="h-full w-full"
          to={props.title.replaceAll(" ", "-").toLowerCase()}
        >
          <img
            className="xl:h-64 h-52 m-auto scale-100 hover:scale-105 transition duration-300 cursor-pointer rounded-md "
            src={props.image_url}
          />
        </Link>

        <div className="flex justify-between w-full">
          <div className=" text-left relative mt-5">
            <h1
              className={`m-auto text-left text-[0.8rem] h-10 font-bold text-gray-700 ${props.cn}`}
            >
              {props.title}
            </h1>
            <h2 className=" text-gray-500 font-bold text-[0.8em]  ">
              {props.price} R$
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Products;
