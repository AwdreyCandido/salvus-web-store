import React, { useContext, useState } from "react";
import { HiArrowLeft } from "react-icons/hi2";
import InputField from "../../ui/inputs/InputField";
import SelectInput from "../../ui/inputs/SelectInput";
import TextField from "../../ui/inputs/TextField";
import { IProduct } from "../../../models/IProduct";
import PrimaryButton from "../../ui/buttons/primary-button/PrimaryButton";
import { categories, departments } from "../../../data/products";
import { ProductsContext } from "../../../context/ProductsContext";
import { createProductRequest } from "../../../services/http/products";
import { notifyError, notifySuccess } from "../../../services/notifications/toasts";

const NewProductModal = () => {
  const [product, setProduct] = useState<IProduct>({} as IProduct);
  const { closeModal, addProduct } = useContext(ProductsContext);

  const getInputValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.currentTarget?.name]: e.currentTarget?.value });
  };

  const getTextAreaValueHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setProduct({ ...product, [e.currentTarget?.name]: e.currentTarget?.value });
  };

  const getSelectValueHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProduct({ ...product, [e.currentTarget?.name]: e.currentTarget?.value });
  };

  const addNewProductHandler = async () => {
    // VALIDAÇÕES

    const res = await createProductRequest(product)

    if (res?.status == 200 && res.statusText == 'OK') {
      addProduct(product);
      notifySuccess("Novo produto criado com sucesso!")
      closeModal();
      return
    }

    notifyError("Falha ao criar novo produto.")
  };

  return (
    <div>
      <div
        onClick={closeModal}
        className="h-[100vh] w-[100vw] fixed aspect-video bg-black-20 backdrop-blur-sm drop-shadow-[20rem] cursor-pointer z-40 top-0 left-0"
      ></div>
      <div className="h-full w-[40vw] z-50 overflow-y-auto fixed rounded-l-[2rem] p-8 px-12 right-0 top-0 bg-white">
        <div className="flex text-dark items-center gap-8">
          <HiArrowLeft
            onClick={closeModal}
            className="text-[3rem] stroke-[1.4] cursor-pointer"
          />
          <h1 className="font-sora  text-[3rem] font-bold">Novo Produto</h1>
        </div>
        <div className="mt-[4rem]">
          <h2 className="text-h3 font-sora text-primary">
            Informações principais
          </h2>
          <InputField
            name="name"
            label="Nome"
            placeholder="Nome do Produto..."
            onChange={getInputValueHandler}
            type="text"
            minLength={5}
          />
          <TextField
            name="description"
            label="Descrição"
            placeholder="Descrição do Produto..."
            onChange={getTextAreaValueHandler}
          />
          <div className="flex gap-8 justify-between">
            <InputField
              name="price"
              label="Preço"
              placeholder="Ex: 99,99"
              onChange={getInputValueHandler}
              type="number"
              maxLength={5}
            />
            <InputField
              name="quantity"
              label="Quatidade"
              placeholder="Ex: 10"
              onChange={getInputValueHandler}
              type="number"
              maxLength={1000}
            />
          </div>
          <div className="flex gap-8 justify-between">
            <SelectInput
              name="departmentId"
              label="Departamento"
              placeholder="Selecione um departamento..."
              onChange={getSelectValueHandler}
              items={departments}
            />
            <SelectInput
              name="categoryId"
              label="Categoria"
              placeholder="Selecione uma categoria..."
              onChange={getSelectValueHandler}
              items={categories}
            />
          </div>
        </div>
        <div className="flex w-full mt-[5rem] align-bottom justify-between">
          <PrimaryButton title="Cancelar" mode="delete" onClick={closeModal} />
          <PrimaryButton
            title="Salvar Novo Produto"
            onClick={addNewProductHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default NewProductModal;
