import React from "react";
import Header from "../components/HomePage/Header.jsx";
import HeroImg from "../components/HomePage/HeroImg.jsx";
import CollectionType from "../components/HomePage/CollectionType.jsx";
import CategoryGrid from "../components/HomePage/CategoryGrid.jsx";
import Footer from "../components/HomePage/Footer.jsx";
import SneakerSection from "../components/HomePage/SneakerSection.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <HeroImg />
      <CollectionType />
      <CategoryGrid />
      <SneakerSection />
      <Footer />
    </>
  );
};

export default Home;
