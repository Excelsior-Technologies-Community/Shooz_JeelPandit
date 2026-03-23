import React from "react";
import Breadcrumb from "../components/Breadcurms";
import Header from "../components/HomePage/Header";
import ProductDetail from "../components/ProductDetailPage/ProductDetail";
import ProductDetailExtra from "../components/ProductDetailPage/ProductDetailExtra";
import FooterSimple from "../components/HomePage/FooterSimple";
import ClasicFAQs from "../components/ProductDetailPage/ClasicFAQs";

const ProductDetailPage = () => {
  return (
    <>
      <Header />
      <Breadcrumb title={"Product Detail Page"} />
      <ProductDetail />
      <ProductDetailExtra />
      <ClasicFAQs />
      <FooterSimple />
    </>
  );
};

export default ProductDetailPage;
