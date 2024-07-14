import React from "react";
import PrimaryButton from "../../components/ui/buttons/primary-button/PrimaryButton";
import OutlineButton from "../../components/ui/buttons/outline-button/OutlineButton";
import ProductCard from "../../components/product-card/ProductCard";
import InputField from "../../components/ui/inputs/InputField";
import Sidebar from "../../components/ui/sidebar/Sidebar";
import Layout from "../../components/ui/layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <div className="w-fit">
        <div className="font-sora text-h1 font-bold">Salvus Web Store</div>
        <PrimaryButton title="Primary Button" />
        <OutlineButton title="Primary Button" />
        <InputField />
        <ProductCard />
      </div>
    </Layout>
  );
};

export default HomePage;
