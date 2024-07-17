import { useContext, useEffect, useState } from "react";
import Layout from "../../components/ui/layout/Layout";
import PrimaryButton from "../../components/ui/buttons/primary-button/PrimaryButton";
import { HiArrowLeft } from "react-icons/hi2";
import { useParams, useNavigate } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext";
import UpdateProductModal from "../../components/modals/update-product/UpdateProductModal";
import DeleteProductModal from "../../components/modals/delete-product/DeleteProductModal";
import placeholderImg from "./../../assets/imgs/placeholder.png";
import { getProductRequest } from "../../services/http/products";
import { IProduct } from "../../models/IProduct";

const ProductDetails = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [selected, setSelected] = useState<IProduct | null>(null)
  const { productId } = useParams();
  const { showAddModal, showModal } =
    useContext(ProductsContext);
  const navigate = useNavigate();

  useEffect(() => {
    getProductHandler()
  })


  function goBack() {
    navigate(-1);
  }

  const getProductHandler = async () => {
    if (productId) {
      const response = await getProductRequest(+productId)
      const prod = response?.data
      setSelected(prod)
    }
  }


  if (!productId) return <h1 className="text-h1">Esse produto não existe</h1>;

  function deleteModalHandler() {
    setShowDeleteModal(!showDeleteModal)
  }


  return (
    <>
      <Layout>
        <div className="flex flex-col w-full pb-[4rem] justify-between items-center">
          <div className="flex justify-between w-full">
            <div className="flex text-dark items-center gap-8">
              <HiArrowLeft
                onClick={goBack}
                className="text-h1 stroke-[1.2] cursor-pointer"
              />
              <h1 className="font-sora  text-h1 font-bold">Detalhes do Produto</h1>
            </div>
            <div className="flex items-center gap-8">
              <PrimaryButton title="Excluir" mode="delete" onClick={deleteModalHandler} />
              <PrimaryButton title="Editar Produto" onClick={showAddModal} />
            </div>
          </div>
          <section className="grid xl:grid-cols-2  w-full mt-[4rem]">
            <div className="flex 2xl:justify-center h-min gap-6 rounded-3xl">
              <div>
                <img
                  className="w-[45rem] border border-black-20 rounded-3xl"
                  src={placeholderImg}
                />
              </div>
              <div className="flex justify-between flex-col">
                <img
                  className="w-[10rem] border border-black-20 rounded-3xl"
                  src={placeholderImg}
                />
                <img
                  className="w-[10rem] border border-black-20 rounded-3xl"
                  src={placeholderImg}
                />
                <img
                  className="w-[10rem] border border-black-20 rounded-3xl"
                  src={placeholderImg}
                />
                <img
                  className="w-[10rem] border border-black-20 rounded-3xl"
                  src={placeholderImg}
                />
              </div>
            </div>
            <div className="flex-1 mt-16 xl:mt-0 xl:pr-[6rem] font-sora">
              <ul className="flex flex-col gap-6">
                <li>
                  <p className="text-[1.4rem] font-bold text-black-40">Nome:</p>
                  <h4 className="text-h2 font-semibold">{selected?.name}</h4>
                </li>
                <li>
                  <p className="text-[1.4rem] font-bold text-black-40">Descrição:</p>
                  <h4 className="text-h4 mt-2">{selected?.description}</h4>
                </li>
                <li>
                  <p className="text-[1.4rem] font-bold text-black-40">Preço:</p>
                  <h4 className="text-h2 font-semibold">R$ {selected?.price}</h4>
                </li>
                <li>
                  <p className="text-[1.4rem] font-bold text-black-40">Departamento:</p>
                  <h4 className="text-h4 mt-2">{selected?.department}</h4>
                </li>
                <li>
                  <p className="text-[1.4rem] font-bold text-black-40">Categoria:</p>
                  <h4 className="text-h4 mt-2">{selected?.category}</h4>
                </li>
                <li>
                  <p className="text-[1.4rem] font-bold text-black-40">Quantidade em estoque:</p>
                  <h4 className="text-h4">{selected?.quantity}</h4>
                </li>
                <li>
                  <p className="text-[1.4rem] font-bold text-black-40">Tags:</p>
                  <div className="flex mt-2 gap-2 text-h4">
                    {selected?.tags ?
                      selected.tags.split(",").map((tag) => {
                        return <p className="border text-text border-primary bg-primary text-white px-4 rounded-lg w-fit">{tag}</p>
                      }) :
                      <p>Nenhuma tag</p>
                    }
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
      {showModal && selected && (
        <UpdateProductModal />
      )}
      {showDeleteModal && <DeleteProductModal toggleModal={deleteModalHandler} productId={+productId} />}
    </>
  );
};

export default ProductDetails;
