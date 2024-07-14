import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage.tsx";
import ProductDetails from "./pages/product-details/ProductDetails.tsx";

const router = createBrowserRouter([
  { path: "/dashboard/home", element: <HomePage /> },
  { path: "/dashboard/product/:productId", element: <ProductDetails /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
