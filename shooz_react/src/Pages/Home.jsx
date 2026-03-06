import React from "react";
import Header from "../components/HomePage/Header.jsx";
import HeroImg from "../components/HomePage/HeroImg.jsx";
import CollectionType from "../components/HomePage/CollectionType.jsx";
import CategoryGrid from "../components/HomePage/CategoryGrid.jsx";
import Footer from "../components/HomePage/Footer.jsx";
import SneakerSection from "../components/HomePage/SneakerSection.jsx";
import SeasonSale from "../components/HomePage/SeasonSale.jsx";
import "./css/home.css";
import PopularStyles from "../components/HomePage/PopularStyles.jsx";
import Feedback from "../components/HomePage/Feedback.jsx";

const Home = () => {
  return (
    <main className="home-page">
      <Header />
      <HeroImg />
      <CollectionType />
      <CategoryGrid />
      <SneakerSection />
      <SeasonSale />
      <PopularStyles />
      <Feedback />
      <Footer />
    </main>
  );
};

export default Home;
