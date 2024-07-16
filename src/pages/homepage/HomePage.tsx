import { useContext, useEffect, useState } from "react";
import PrimaryButton from "../../components/ui/buttons/primary-button/PrimaryButton";
import ProductCard from "../../components/product-card/ProductCard";
import Layout from "../../components/ui/layout/Layout";
import { ProductsContext } from "../../context/ProductsContext";
import { IProduct } from "../../models/IProduct";
import NewProductModal from "../../components/modals/new-product/NewProductModal";
import { getAllProductsRequest } from "../../services/http/products";

const HomePage = () => {
  const { showAddModal, showModal, productsList, setAllProducts } = useContext(ProductsContext);

  const getAllProductsHandler = async () => {
    const res = await getAllProductsRequest()

    if (res?.status == 200 && res.statusText == 'OK') {
      setAllProducts(res.data)
      return
    }

    window.alert("Erro ao buscar todos os produtos")
  }

  useEffect(() => {
    getAllProductsHandler()
  }, [])



  return (
    <>
      <Layout>
        <div className="text-dark">
          <div className="flex w-full justify-between items-center">
            <h1 className="font-sora  text-h1 font-bold">Todos os Produtos</h1>
            <PrimaryButton
              title="Adicionar novo Produto"
              onClick={showAddModal}
            />
          </div>
          <div className="mt-16"></div>
          <div>
            {productsList.length > 0 ? (
              <h2 className="text-h2 font-sora font-semibold">
                {productsList.length} Produtos encontrados
              </h2>
            ) : (
              <h2 className="text-h2 font-sora font-semibold">
                Nenhum produto encontrado
              </h2>
            )}
          </div>
          <section className="justify-between mt-4 pb-8 grid grid-cols-6">
            {productsList.map((prod: IProduct) => {
              return (
                <ProductCard
                  id={prod.id}
                  name={prod.name}
                  description={prod.description}
                  price={prod.price}
                  createdAt={prod.createdAt}
                  categoryId={prod.categoryId}
                  departmentId={prod.departmentId}
                  quantity={prod.quantity}
                  tags={prod.tags}
                />
              );
            })}
          </section>
        </div>
      </Layout>
      {showModal && <NewProductModal />}
    </>
  );
};

export default HomePage;
