import { useContext } from "react";
import Layout from "../../components/ui/layout/Layout";
import PrimaryButton from "../../components/ui/buttons/primary-button/PrimaryButton";
import { HiArrowLeft } from "react-icons/hi2";
import { useParams, useNavigate } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext";
import UpdateProductModal from "../../components/modals/update-product/UpdateProductModal";
import { deleteProductRequest } from "../../services/http/products";

const ProductDetails = () => {
  const { productId } = useParams();
  const { productsList, deleteProduct, showAddModal, showModal } =
    useContext(ProductsContext);
  const navigate = useNavigate();

  const selected = productsList.find((prod) => prod.id == +productId!);

  function goBack() {
    navigate(-1);
  }

  if (!productId) return <h1 className="text-h1">Esse produto não existe</h1>;

  const deleteProductHandler = async () => {

    const res = await deleteProductRequest(+productId)

    if (res?.status == 200 && res.statusText == 'OK') {
      deleteProduct(+productId);
      goBack();
      return
    }

    window.alert("Erro ao excluir produto")
  };

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
            <PrimaryButton title="Excluir" onClick={deleteProductHandler} />
            <PrimaryButton title="Editar Produto" onClick={showAddModal} />
          </div>
        </div>
      </Layout>
      {showModal && selected && (
        <UpdateProductModal selectedProduct={selected} />
      )}
    </>
  );
};

export default ProductDetails;
