import { useState } from "react";
import PrimaryButton from "../../components/ui/buttons/primary-button/PrimaryButton";
import ProductCard from "../../components/product-card/ProductCard";
import Layout from "../../components/ui/layout/Layout";
import { products } from "../../data/products";

const HomePage = () => {
  const [productsList, setProductsList] = useState(products);

  return (
    <Layout>
      <div>
        <div className="flex w-full justify-between items-center">
          <h1 className="font-sora text-dark text-h1 font-bold">
            Todos os Produtos
          </h1>
          <PrimaryButton title="Adicionar novo Produto" />
        </div>

        <section className="flex flex-wrap justify-between mt-[4rem]">
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
  );
};

export default HomePage;
