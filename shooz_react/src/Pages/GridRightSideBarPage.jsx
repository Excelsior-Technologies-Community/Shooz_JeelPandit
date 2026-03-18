import React from "react";
import Header from "../components/HomePage/Header";
import SliderSwiper from "../components/BlogPage/SliderSwiper";
import FooterSimple from "../components/HomePage/FooterSimple";
import GridRightSideBar from "../components/BlogPage/GridRightSideBar";

const GridRightSideBarPage = () => {
  return (
    <>
      <Header />
      <SliderSwiper />
      <GridRightSideBar />
      <FooterSimple />
    </>
  );
};

export default GridRightSideBarPage;
