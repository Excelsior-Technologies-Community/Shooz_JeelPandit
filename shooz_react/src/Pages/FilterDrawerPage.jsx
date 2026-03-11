import React from "react";
import Header from "../components/HomePage/Header";
// import ProductsNav from "../components/ProductPage/ProductsNav";
import Breadcrumb from "../components/Breadcurms";
import FilterDrawer from "../components/ProductPage/FilterDrawer";
// import Footer from "../components/HomePage/Footer";

const FilterDrawerPage = () => {
  return (
    <>
      <Header />
      <Breadcrumb title={"Filter Drawer Page"} />
      {/* <ProductsNav /> */}
      <FilterDrawer />
      {/* <Foote/> */}
    </>
  );
};

export default FilterDrawerPage;
