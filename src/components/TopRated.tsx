import { arrItems } from "@/interfaces/ProductInterface";
import Products from "./Products";
import { FetchComments } from "@/store/FetchComments";
export function TopRated({ items }: any) {
  const { comments } = FetchComments();
  if (!comments) return;
  const topRated = comments.filter((el: { voto: number }) => el.voto > 4);
  const newTopRated = topRated.map((item: arrItems) => {
    const produInfo = items.find((el: arrItems) => el.title === item.title);
    return {
      _id: produInfo._id,
      title: produInfo.title,
      image_url: produInfo.image_url,
      comentario: item.comentario,
      price: produInfo.price,
      id_comentario: item.id_comentario,
      name: item.name,
      voto: item.voto,
    };
  });

  const limitedArr = newTopRated.slice(0, 5);

  return (
    <div className="w-screen mb-32  bg-white relative mt-10 ">
      <div className="w-full container mb-32    flex justify-center items-center">
        <div className="text-center flex flex-col  min-h-96  justify-center items-center ">
          <p className="text-gray-400 text-4xl">Nosso produtos</p>
          <h1 className="text-gray-500 uppercase font-bold xl:text-3xl mb-10">
            Destaques
          </h1>
          <div className=" xl:grid md:grid-cols-5   p-5 ">
            {limitedArr.map((prod: arrItems) => {
              return (
                <Products
                  key={prod._id}
                  cn={"text-xs text-gray-400 font-bold "}
                  title={prod.title}
                  image_url={prod.image_url}
                  price={prod.price}
                  item={prod}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
