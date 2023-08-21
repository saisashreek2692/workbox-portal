import React from "react";
import Content from "./Content";
import Navbar from "./Navbar";
import Features from "./Features";
import About from "./About";
import Team from "./Team";
import Footer from "./Footer";

const Main = () => {
  return (
    <>
      <Navbar />
      <Content />
      <About />
      <Features />
      <Team />
      <Footer />
    </>
  );
};

export default Main;
