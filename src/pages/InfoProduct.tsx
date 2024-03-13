import { Button } from "@/components/ui/button";
import { useProducts } from "@/hooks/useProducts";
import { useComments } from "@/hooks/useComments";
import { useParams } from "react-router";
import { arrItems } from "@/interfaces/ProductInterface";

export function InfoProduct() {
  const { results, loading } = useProducts();
  const { comments, loadingComments } = useComments();
  const { id } = useParams();
  const findItem = results.find((el: any) => {
    if (el.title.replaceAll(" ", "-").toLowerCase() === id) {
      return el;
    }
  });

  const findComment = comments.filter(
    (el: any) => el.title.replaceAll(" ", "-").toLowerCase() === id
  );

  if (loading || loadingComments) {
    return <div className="text-center">Carrgando...</div>;
  }

  return (
    <div className="w-full justify-center container items-center  flex flex-col">
      <div className=" xl:min-h-[600px] xl:min-w-[900px] border-[0.1px] rounded-xl mb-24 mt-10">
        <div className="xl:flex p-8 justify-between">
          <div className="w-96  ">
            <img src={findItem.image_url} className="h-96 w-80" />
            <div className="text-slate-700">
              <h1>Descrição:</h1>
              <p className="font-bold text-[12px] w-80">
                {findItem.description}
              </p>
            </div>
          </div>
          <div className=" space-y-4 ">
            <h1 className="font-bold text-slate-600">{findItem.title}</h1>
            <p className="text-xs font-semibold text-slate-400">
              Codigo: {findItem._id}
            </p>
            <div className="w-full">
              <h3 className="text-slate-600">
                por:{" "}
                <span className="text-red-700 font-bold text-2xl">
                  R$ {findItem.price}
                </span>
              </h3>
              <p className="text-xs text-slate-600">Ou</p>
              <h3 className="font-semibold text-slate-700">
                {" "}
                <span className="text-red-700">
                  {" "}
                  {Number(findItem.price) / 8}
                </span>{" "}
                <span className="text-[14px]"> 8x no cartão sem juros</span>
              </h3>
              <div className="mt-10 flex ">
                <h1 className="text-xs border-[1px] py-1 px-2 text-center bg-slate-50 hover:bg-white cursor-pointer rounded">
                  + Formas de pagamento
                </h1>
              </div>
              <div className="mb-10 mt-5">
                <h3 className="font-bold">Cor:</h3>
                <div className="flex gap-3">
                  <div className="h-6 w-6 bg-red-600 rounded border-2 cursor-pointer"></div>
                  <div className="h-6 w-6 bg-green-200 rounded border-2 cursor-pointer"></div>
                  <div className="h-6 w-6 bg-yellow-500 rounded border-2 cursor-pointer"></div>
                </div>
              </div>
              <div className="mb-10 mt-5">
                <h3 className="font-bold">Tamanho:</h3>
                <div className="flex gap-3 text-center">
                  <div className="px-2  rounded border-[1px]  cursor-pointer">
                    M
                  </div>
                  <div className="px-2  rounded border-[1px]  cursor-pointer">
                    GG
                  </div>
                  <div className="px-2  rounded border-[1px] cursor-pointer">
                    XL
                  </div>
                </div>
              </div>
              <div>
                <Button className="bg-green-500 hover:bg-green-900 rounded text-slate-100 float-right">
                  Adicionar ao carrinho{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className=" p-2 mt-10 text-2xl font-semibold text-slate-700">
          Comentarios
        </h1>

        <div className="container mt-10 p-4   xl:w-[900px] border-[1px] max-h-96 rounded overflow-y-auto  mb-24">
          {!findComment.length && (
            <div className="text-center cursor-pointer text-gray-700 font-bold hover:text-gray-500">
              Seja o primeiro a comentar
            </div>
          )}
          {findComment.map((el: arrItems) => {
            return (
              <div
                className=" border-[1px] rounded m-2 p-3 flex flex-col"
                key={el.id_comentario}
              >
                <div className=" flex flex-col justify-center gap-4 ">
                  <h1 className="text-[15px]">{el.name}</h1>
                  <p className="text-gray-600 text-[14px]">{el.comentario}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
