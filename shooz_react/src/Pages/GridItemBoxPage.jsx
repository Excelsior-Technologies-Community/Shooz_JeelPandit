import React from "react";
import Header from "../components/HomePage/Header";
import SliderSwiper from "../components/BlogPage/SliderSwiper";
import FooterSimple from "../components/HomePage/FooterSimple";
import GridItemBox from "../components/BlogPage/GridItemBox";

const GridItemBoxPage = () => {
  return (
    <>
      <Header />
      <SliderSwiper />
      <GridItemBox />
      <FooterSimple />
    </>
  );
};

export default GridItemBoxPage;
