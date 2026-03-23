import React from "react";
import Header from "../components/HomePage/Header";
import Breadcrumb from "../components/Breadcurms";
import FilterTopBar from "../components/ProductPage/FilterTopBar";
import FooterSimple from "../components/HomePage/FooterSimple";

const FilterTopBarPage = () => {
  return (
    <>
      <Header />
      <div className="filter-topbar-page">
        <Breadcrumb title={"Filter TopBar Page"} />
        <FilterTopBar />
      </div>
      <FooterSimple />
    </>
  );
};

export default FilterTopBarPage;
