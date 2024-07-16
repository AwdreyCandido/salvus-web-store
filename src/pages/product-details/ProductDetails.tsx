import { useContext, useState } from "react";
import Layout from "../../components/ui/layout/Layout";
import PrimaryButton from "../../components/ui/buttons/primary-button/PrimaryButton";
import { HiArrowLeft } from "react-icons/hi2";
import { useParams, useNavigate } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext";
import UpdateProductModal from "../../components/modals/update-product/UpdateProductModal";
import { deleteProductRequest } from "../../services/http/products";
import DeleteProductModal from "../../components/modals/delete-product/DeleteProductModal";

const ProductDetails = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const { productId } = useParams();
  const { productsList, deleteProduct, showAddModal, showModal } =
    useContext(ProductsContext);
  const navigate = useNavigate();

  const selected = productsList.find((prod) => prod.id == +productId!);

  function goBack() {
    navigate(-1);
  }

  if (!productId) return <h1 className="text-h1">Esse produto não existe</h1>;

  function deleteModalHandler() {
    setShowDeleteModal(!showDeleteModal)
  }


  return (
    <>
      <Layout>
        <div className="flex w-full justify-between items-center">
          <div className="flex text-dark items-center gap-8">
            <HiArrowLeft
              onClick={goBack}
              className="text-h1 stroke-[1.2] cursor-pointer"
            />
            <h1 className="font-sora  text-h1 font-bold">{selected?.name}</h1>
          </div>
          <div className="flex gap-8">
            <PrimaryButton title="Excluir" onClick={deleteModalHandler} />
            <PrimaryButton title="Editar Produto" onClick={showAddModal} />
          </div>
        </div>
      </Layout>
      {showModal && selected && (
        <UpdateProductModal selectedProduct={selected} />
      )}
      {showDeleteModal && <DeleteProductModal toggleModal={deleteModalHandler} productId={+productId} />}
    </>
  );
};

export default ProductDetails;
