import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage.tsx";
import ProductDetails from "./pages/product-details/ProductDetails.tsx";
import ProductsContextProvider from "./context/ProductsContext.tsx";

const router = createBrowserRouter([
  { path: "/dashboard/home", element: <HomePage /> },
  { path: "/dashboard/product/:productId", element: <ProductDetails /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProductsContextProvider>
      <RouterProvider router={router} />
    </ProductsContextProvider>
  </React.StrictMode>
);
