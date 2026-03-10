import React from "react";
import Header from "../components/HomePage/Header";
import ProductsNav from "../components/ProductPage/ProductsNav";
import Breadcrumb from "../components/Breadcurms";
import ProductList from "../components/ProductPage/PoductList";

const ProductPage = () => {
  return (
    <>
      <Header />
      <Breadcrumb title={"ProductPage"} />
      <ProductsNav />
      <ProductList />
    </>
  );
};

export default ProductPage;
