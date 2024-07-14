import React, { useEffect, useState } from "react";
import Layout from "../../components/ui/layout/Layout";
import PrimaryButton from "../../components/ui/buttons/primary-button/PrimaryButton";
import { HiArrowLeft } from "react-icons/hi2";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../../data/products";

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const selected = products.find((prod) => prod.id == +productId!);

  function goBack() {
    navigate(-1);
  }

  return (
    <Layout>
      <div className="flex w-full justify-between items-center">
        <div className="flex text-dark items-center gap-8">
          <HiArrowLeft onClick={goBack} className="text-h1 stroke-[1.2] cursor-pointer" />
          <h1 className="font-sora  text-h1 font-bold">{selected?.name}</h1>
        </div>
        <div className="flex gap-8">
          <PrimaryButton title="Excluir" />
          <PrimaryButton title="Editar" />
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
