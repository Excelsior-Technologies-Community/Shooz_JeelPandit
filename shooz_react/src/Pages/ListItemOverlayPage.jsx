import React from "react";
import Header from "../components/HomePage/Header";
import SliderSwiper from "../components/BlogPage/SliderSwiper";
import FooterSimple from "../components/HomePage/FooterSimple";
import ListItemOverlay from "../components/BlogPage/ListItemOverlay";

const ListItemOverlayPage = () => {
  return (
    <>
      <Header />
      <SliderSwiper />
      <ListItemOverlay />
      <FooterSimple />
    </>
  );
};

export default ListItemOverlayPage;
