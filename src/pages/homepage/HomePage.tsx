import { useState } from "react";
import PrimaryButton from "../../components/ui/buttons/primary-button/PrimaryButton";
import ProductCard from "../../components/product-card/ProductCard";
import Layout from "../../components/ui/layout/Layout";
import { products } from "../../data/products";
import NewProductModal from "../../components/modals/new-product/NewProductModal";

const HomePage = () => {
  const [productsList, setProductsList] = useState(products);
  const [newProductModalIsOpen, setNewProductModalIsOpen] = useState(true);

  return (
    <>
      <Layout>
        <div className="text-dark">
          <div className="flex w-full justify-between items-center">
            <h1 className="font-sora  text-h1 font-bold">Todos os Produtos</h1>
            <PrimaryButton title="Adicionar novo Produto" />
          </div>
          <div className="mt-16"></div>
          <div>
            <h2 className="text-h2 font-sora font-semibold">
              {productsList.length} Produtos encontrados
            </h2>
          </div>
          <section className="flex flex-wrap justify-between mt-8">
            {productsList.map((prod) => {
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
      {newProductModalIsOpen && <NewProductModal />}
    </>
  );
};

export default HomePage;
