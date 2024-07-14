import React from "react";
import placeholderImg from "./../../assets/imgs/placeholder.png";
import { NavLink } from "react-router-dom";

type ProductProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  createdAt: string;
  categoryId: number;
  departmentId: number;
  quantity: number;
  tags: string;
};

const ProductCard: React.FC<ProductProps> = ({
  id,
  name,
  description,
  price,
  createdAt,
  categoryId,
  departmentId,
  quantity,
  tags,
}) => {
  return (
    <NavLink to={`/dashboard/product/${id}`}>
      <div className="flex flex-col w-[22rem] h-[30rem] rounded-2xl bg-white shadow-lg hover:shadow-none cursor-pointer overflow-hidden font-sora text-dark duration-300">
        <div className="w-full h-[18rem] rounded-b-[2rem]  flex-1 overflow-hidden">
          <img
            className="hover:scale-110 hover:rounded-[2rem] duration-300"
            src={placeholderImg}
          />
        </div>
        <div className="p-4 flex flex-col gap-2">
          <p className="text-h4 font-bold leading-tight text-primary">R$ {price}</p>
          <p className="text-h3 leading-tight overflow-ellipsis truncate">
            {name}
          </p>
          <p className="leading-none mt-2">Estoque: {quantity}</p>
          <p>Última atualização: {new Date(createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default ProductCard;
