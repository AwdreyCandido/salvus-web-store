import { createContext, useState } from "react";
import { IProduct } from "../models/IProduct";
import { products } from "../data/products";

interface IProductsContextProps {
  showModal: boolean;
  showAddModal: () => void;
  closeModal: () => void;
  productsList: IProduct[];
  addProduct: (newProduct: IProduct) => void;
  updateProduct: (updatedTask: IProduct) => void;
  deleteProduct: (id: number) => void;
}

export const ProductsContext = createContext<IProductsContextProps>(
  {} as IProductsContextProps
);

const ProductsContextProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [productsList, setProductsList] = useState<IProduct[]>(products);

  const showAddModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // PRODUCTS CRUD
  const addProduct = (newProduct: IProduct) => {
    setProductsList((prev) => [newProduct, ...prev]);
    closeModal();
  };

  const updateProduct = (updatedTask: IProduct) => {
    const selectedTask = productsList.find(
      (prevTask) => prevTask.id == updatedTask.id
    );
    console.log(selectedTask);
  };

  const deleteProduct = (id: number) => {
    setProductsList([
      ...productsList!.filter((selectedTask) => selectedTask.id != id),
    ]);
    closeModal();
  };

  const value = {
    showModal,
    showAddModal,
    closeModal,
    productsList,
    addProduct,
    updateProduct,
    deleteProduct,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
