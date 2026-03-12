import React from "react";
import Breadcrumb from "../components/Breadcurms";
import Header from "../components/HomePage/Header";
import ProductDetail from "../components/ProductDetailPage/ProductDetail";
import ProductDetailExtra from "../components/ProductDetailPage/ProductDetailExtra";
import FooterSimple from "../components/HomePage/FooterSimple";

const ProductDetailPage = () => {
  return (
    <>
      <Header />
      <Breadcrumb title={"Product Detail Page"} />
      <ProductDetail />
      <ProductDetailExtra />
      <FooterSimple />
    </>
  );
};

export default ProductDetailPage;
