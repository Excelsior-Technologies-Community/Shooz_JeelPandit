import React from "react";
import Header from "../components/HomePage/Header";
import Breadcrumb from "../components/Breadcurms";
import FooterSimple from "./../components/HomePage/FooterSimple";
import AboutUs2 from "../components/ExtPages/AboutUs2";

const AboutUs2Page = () => {
  return (
    <>
      <Header />
      <Breadcrumb title="/AboutUs2" />
      <AboutUs2 />
      <FooterSimple />
    </>
  );
};

export default AboutUs2Page;
