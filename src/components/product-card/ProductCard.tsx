import React from "react";
import placeholderImg from "./../../assets/imgs/placeholder.png"

const ProductCard = () => {
  return (
    <div className="flex flex-col w-[28rem] h-[38rem] rounded-2xl bg-white shadow-lg overflow-hidden font-sora text-dark">
      <div className="bg-danger w-full rounded-2xl  flex-1 overflow-hidden">
        <img src={placeholderImg} />
      </div>
      <div className="p-4 flex flex-col gap-4">
        <p className="text-h3 font-semibold">R$ 99,99</p>
        <p className="text-h4">Nome do produto</p>
        <div className="text-[1.1rem] h-full">
          <p>Estoque: 10</p>
          <p>Última atualização: 13/07/24 às 18:00h</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
