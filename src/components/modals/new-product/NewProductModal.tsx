import React from "react";
import { HiArrowLeft } from "react-icons/hi2";
import InputField from "../../ui/inputs/InputField";
import SelectInput from "../../ui/inputs/SelectInput";
import TextField from "../../ui/inputs/TextField";

const NewProductModal = () => {
  return (
    <div>
      <div className="h-[100vh] w-[100vw] fixed aspect-video bg-black-20 backdrop-blur-sm drop-shadow-[20rem] z-40 top-0 left-0"></div>
      <div className="h-full w-[40vw] z-50 fixed rounded-l-[2rem] p-8 px-12 right-0 top-0 bg-white">
        <div className="flex text-dark items-center gap-8">
          <HiArrowLeft
            onClick={() => {}}
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
          />
          <TextField
            name="description"
            label="Descrição"
            placeholder="Descrição do Produto..."
          />
          <div className="flex gap-8 justify-between">
            <InputField name="price" label="Preço" placeholder="Ex: 99,99" />
            <InputField
              name="quantity"
              label="Quatidade"
              placeholder="Ex: 10"
            />
          </div>
          <div className="flex gap-8 justify-between">
            <SelectInput
              name="departmentId"
              label="Departamento"
              placeholder="Selecione um departamento..."
            />
            <SelectInput
              name="categoryId"
              label="Categoria"
              placeholder="Selecione uma categoria..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProductModal;
