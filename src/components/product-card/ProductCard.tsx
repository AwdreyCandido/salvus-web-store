import React from "react";
import placeholderImg from "./../../assets/imgs/placeholder.png";
import { NavLink } from "react-router-dom";
import { IProduct } from "../../models/IProduct";

const ProductCard: React.FC<IProduct> = ({
  id,
  name,
  price,
  createdAt,
  quantity,
}) => {
  return (
    <NavLink to={`/dashboard/product/${id}`}>
      <div data-aos="fade-up" className="flex flex-col w-[22rem] h-[30rem] mt-6 rounded-2xl bg-white shadow-lg hover:shadow-none cursor-pointer overflow-hidden font-sora border border-black-10 text-dark duration-300">
        <div className="w-full h-[18rem] rounded-b-[2rem]  flex-1 overflow-hidden">
          <img
            className="hover:scale-110 hover:rounded-[2rem] duration-300"
            src={placeholderImg}
          />
        </div>
        <div className="p-4 flex flex-col gap-2">
          <p className="text-h4 font-bold leading-tight overflow-ellipsis truncate text-primary">
            R$ {price}
          </p>
          <p className="text-h3 leading-tight overflow-ellipsis truncate">
            {name}
          </p>
          <p className="leading-none mt-2">Estoque: {quantity}</p>
          <p>Última atualização: {new Date(createdAt!).toLocaleDateString()}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default ProductCard;
