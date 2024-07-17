import React, { useContext } from 'react'
import PrimaryButton from '../../ui/buttons/primary-button/PrimaryButton'
import { ProductsContext } from '../../../context/ProductsContext';
import { HiArrowLeft, HiXMark } from 'react-icons/hi2';
import { deleteProductRequest } from '../../../services/http/products';
import { useNavigate } from 'react-router-dom';
import { notifyError, notifySuccess } from '../../../services/notifications/toasts';

const DeleteProductModal: React.FC<{ productId: number, toggleModal: () => void }> = ({ productId, toggleModal }) => {

    const { deleteProduct, closeModal } = useContext(ProductsContext);
    const navigate = useNavigate();

    function goBack() {
        navigate(-1);
    }

    const deleteProductHandler = async () => {

        const res = await deleteProductRequest(+productId)

        if (res?.status == 200 ) { //&& res.statusText == 'OK'
            deleteProduct(+productId);
            notifySuccess("Produto excluído com sucesso!")
            return goBack();
        }

        notifyError("Falha ao excluir produto.")
    };

    return (
        <div className='flex justify-center'>
            <div
                onClick={toggleModal}
                className="h-[100vh] w-[100vw] fixed aspect-video bg-black-20 backdrop-blur-sm drop-shadow-[20rem] cursor-pointer z-40 top-0 left-0"
            ></div>
            <div data-aos="zoom-in" data-aos-mirror="true" className="h-fit w-[30vw] flex flex-col justify-between gap-8 z-50 overflow-y-auto fixed rounded-[2rem] p-8 top-[25%] -translate-y-[50%] bg-white">
                <div className="flex justify-between text-dark items-center gap-8">
                    <h1 className="font-sora  text-[3rem] font-bold">Excluir Produto</h1>
                    <HiXMark
                        onClick={toggleModal}
                        className="text-[3.2rem] stroke-[1.4] cursor-pointer"
                    />
                </div>
                <p className="font-sora text-h4">Tem certeza que deseja excluir esse produto? Essa ação é irreversível.</p>
                <div className="flex w-full place-content-end justify-between">
                    <PrimaryButton title="Excluir" mode='delete' onClick={deleteProductHandler} />
                </div>
            </div>
        </div>
    )
}

export default DeleteProductModal