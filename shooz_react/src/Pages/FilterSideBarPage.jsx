import React from "react";
import Header from "../components/HomePage/Header";
import ProductsNav from "../components/ProductPage/ProductsNav";
import Breadcrumb from "../components/Breadcurms";
import FilterSideBar from "../components/ProductPage/FilterSideBar";
// import Footer from "../components/HomePage/Footer";

const FilterSideBarPage = () => {
  return (
    <>
      <Header />
      <Breadcrumb title={"Filter SideBar Page"} />
      <ProductsNav />
      <FilterSideBar />
      {/* <Foote/> */}
    </>
  );
};

export default FilterSideBarPage;
