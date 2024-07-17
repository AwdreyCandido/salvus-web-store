import { useContext, useEffect, useState } from "react";
import PrimaryButton from "../../components/ui/buttons/primary-button/PrimaryButton";
import ProductCard from "../../components/product-card/ProductCard";
import Layout from "../../components/ui/layout/Layout";
import { ProductsContext } from "../../context/ProductsContext";
import { IProduct } from "../../models/IProduct";
import NewProductModal from "../../components/modals/new-product/NewProductModal";
import { getAllProductsRequest } from "../../services/http/products";
import Aos from "aos";
import { notifyError } from "../../services/notifications/toasts";
import Loading from "../../components/ui/loading/Loading";


const HomePage = () => {
  const { showAddModal, showModal, productsList, setAllProducts } = useContext(ProductsContext);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    Aos.init();
    getAllProductsHandler()
  }, [])

  const getAllProductsHandler = async () => {
    setIsLoading(true)
    const res = await getAllProductsRequest()
    console.log(res)
    if (res?.status == 200) { 
      setAllProducts(res.data)
      return setIsLoading(false)
    }
  
    notifyError("Erro ao buscar todos os produtos")
  }

  return (
    <>
      {isLoading && <Loading />}
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
          <section className="justify-between place-items-center mt-4 pb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
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
