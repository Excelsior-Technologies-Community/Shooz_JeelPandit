import React from "react";
import Header from "../components/HomePage/Header";
import ProductsNav from "../components/ProductPage/ProductsNav";
import Breadcrumb from "../components/Breadcurms";
import FilterSideBar from "../components/ProductPage/FilterSideBar";
import FooterSimple from "../components/HomePage/FooterSimple";

const FilterSideBarPage = () => {
  return (
    <>
      <Header />
      <Breadcrumb title={"Filter SideBar Page"} />
      <ProductsNav />
      <FilterSideBar />
      <FooterSimple />
    </>
  );
};

export default FilterSideBarPage;
