export function useProducCharact(){
    const sizeProdu = [
        {
          item: "P",
        },
        {
          item: "M",
        },
        {
          item: "G",
        },
        {
          item: "GG",
        },
      ];
      const colors = [
        {
          item: "preto ",
          color: "bg-black",
          title: "preto",
        },
        {
          item: "vermelho ",
          color: "bg-red-500",
          title: "vermelho",
        },
        {
          item: "azul",
          color: "bg-blue-500",
          title: "azul",
        },
      ];

      return {sizeProdu, colors}
}