import React from "react";
import Header from "../components/HomePage/Header";
import FooterSimple from "../components/HomePage/FooterSimple";
import SliderSwiper from "../components/BlogPage/SliderSwiper";
import ListBlogSection from "../components/BlogPage/ListBlogSection";

const ListLeftSideBarPage = () => {
  return (
    <>
      <Header />
      <SliderSwiper />
      <ListBlogSection />
      <FooterSimple />
    </>
  );
};

export default ListLeftSideBarPage;
