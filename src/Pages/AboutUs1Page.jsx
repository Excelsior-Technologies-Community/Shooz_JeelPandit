import React from "react";
import Header from "../components/HomePage/Header";
import AboutUs1 from "../components/ExtPages/AboutUs1";
import FooterSimple from "../components/HomePage/FooterSimple";
import Breadcrumb from "../components/Breadcurms";

const AboutUs1Page = () => {
  return (
    <>
      <Header />
      <Breadcrumb title="About Us 1" />
      <AboutUs1 />
      <FooterSimple />
    </>
  );
};

export default AboutUs1Page;
