import React, { useContext, useState } from "react";
import { HiArrowLeft } from "react-icons/hi2";
import InputField from "../../ui/inputs/InputField";
import SelectInput from "../../ui/inputs/SelectInput";
import TextField from "../../ui/inputs/TextField";
import { IProduct } from "../../../models/IProduct";
import PrimaryButton from "../../ui/buttons/primary-button/PrimaryButton";
import { categories, departments } from "../../../data/products";
import { ProductsContext } from "../../../context/ProductsContext";
import { updateProductRequest } from "../../../services/http/products";
import { notifyError, notifySuccess } from "../../../services/notifications/toasts";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductFormSchema, productFormSchema } from "../../../services/validations/ProductFormSchema";
import { useParams } from "react-router-dom";

const UpdateProductModal: React.FC = () => {

  // const [product, setProduct] = useState<IProduct>(selectedProduct);
  const { closeModal, updateProduct, productsList } = useContext(ProductsContext);
  const { productId } = useParams();

  const selectedProduct = productsList.find((prod) => prod.id == +productId!);


  const methods = useForm<ProductFormSchema>({
    resolver: zodResolver(productFormSchema),
    mode: "onBlur",
    defaultValues: {
      name: selectedProduct?.name,
      description: selectedProduct?.description,
      price: selectedProduct?.price,
      quantity: selectedProduct?.quantity,
      departmentId: selectedProduct?.departmentId,
      categoryId: selectedProduct?.categoryId,
      createdAt: selectedProduct?.createdAt
    }
  });

  const updateProductHandler = async (productData: IProduct) => {
    console.log(productData)
    if (productId) {
      const res = await updateProductRequest(+productId, productData)

      if (res?.status == 200) { //&& res.statusText == 'OK'
        updateProduct({ ...selectedProduct, ...productData });
        notifySuccess("Produto atualizado com sucesso!")
        return closeModal();
      }
    }

    notifyError("Falha em atualizar o produto.")
  };

  const onSubmit: SubmitHandler<ProductFormSchema> = async (productData) => {
    updateProductHandler(productData)
  }


  return (
    <div>
      <div
        onClick={closeModal}
        className="h-[100vh] w-[100vw] fixed aspect-video bg-black-20 backdrop-blur-sm drop-shadow-[20rem] cursor-pointer z-40 top-0 left-0"
      ></div>
      <div data-aos="slide-left" data-aos-mirror="true" className="h-full xl:w-[40vw] lg:w-[50vw] md:w-[65vw] sm:w-[80vw] w-full z-50 overflow-y-auto fixed rounded-l-[2rem] p-8 px-12 right-0 top-0 bg-white">
        <div className="flex text-dark items-center gap-8">
          <HiArrowLeft
            onClick={closeModal}
            className="text-[3rem] stroke-[1.4] cursor-pointer"
          />
          <h1 className="font-sora  text-[3rem] font-bold">Editar Produto</h1>
        </div>
        <div className="mt-[4rem]">
          <h2 className="text-h3 font-sora text-primary">
            Informações principais
          </h2>

          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Controller
              control={methods.control}
              name="name"
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error }
              }) => {
                return (
                  <InputField
                    name="name"
                    label="Nome"
                    placeholder="Nome do Produto..."
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    type="text"
                    errorMessage={error?.message}
                  />
                )
              }}
            />
            <Controller
              control={methods.control}
              name="description"
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error }
              }) => {
                return (
                  <TextField
                    name="description"
                    label="Descrição"
                    placeholder="Descrição do Produto..."
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    errorMessage={error?.message}
                  />
                )
              }}
            />
            <div className="flex flex-col md:flex-row md:gap-8 justify-between">
              <Controller
                control={methods.control}
                name="price"
                render={({
                  field: { onChange, onBlur, value },
                  fieldState: { error }
                }) => {
                  return (
                    <InputField
                      name="price"
                      label="Preço"
                      placeholder="Ex: 99,99"
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      type="number"
                      errorMessage={error?.message}
                    />
                  )
                }}
              />
              <Controller
                control={methods.control}
                name="quantity"
                render={({
                  field: { onChange, onBlur, value },
                  fieldState: { error }
                }) => {
                  return (
                    <InputField
                      name="quantity"
                      label="Quatidade"
                      placeholder="Ex: 10"
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      type="number"
                      errorMessage={error?.message}
                    />
                  )
                }}
              />
            </div>
            <div className="flex flex-col md:flex-row md:gap-8 justify-between">
              <Controller
                control={methods.control}
                name="departmentId"
                render={({
                  field: { onChange, onBlur, value },
                  fieldState: { error }
                }) => {
                  return (
                    <SelectInput
                      name="departmentId"
                      label="Departamento"
                      placeholder="Selecione um departamento..."
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      items={departments}
                      errorMessage={error?.message}
                    />
                  )
                }}
              />
              <Controller
                control={methods.control}
                name="categoryId"
                render={({
                  field: { onChange, onBlur, value },
                  fieldState: { error }
                }) => {
                  return (
                    <SelectInput
                      name="categoryId"
                      label="Categoria"
                      placeholder="Selecione uma categoria..."
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      items={categories}
                      errorMessage={error?.message}
                    />
                  )
                }}
              />
            </div>
            <div className="flex w-full mt-[5rem] align-bottom justify-between">
              <PrimaryButton title="Cancelar" mode="delete" onClick={closeModal} />
              <PrimaryButton
                title="Confirmar"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProductModal;
