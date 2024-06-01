import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Motto from "../components/Motto";
import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <div>
      <Header />
      <Motto />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
