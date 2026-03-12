import React from "react";
import Header from "../components/HomePage/Header";
// import ProductsNav from "../components/ProductPage/ProductsNav";
import Breadcrumb from "../components/Breadcurms";
import FilterDrawer from "../components/ProductPage/FilterDrawer";
import FooterSimple from "../components/HomePage/FooterSimple";

const FilterDrawerPage = () => {
  return (
    <>
      <Header />
      <Breadcrumb title={"Filter Drawer Page"} />
      {/* <ProductsNav /> */}
      <FilterDrawer />
      <FooterSimple />
    </>
  );
};

export default FilterDrawerPage;
