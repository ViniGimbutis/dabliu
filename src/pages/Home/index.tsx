import React from "react";
import Footer from "../../components/Footer";
import Orcamento from "../../components/Orcamento";
import Impressao from "../../components/Impressao";
import Header from "../../components/Header";
import HomeComponent from "../../components/HomeComponent";
import QuemSomos from "../../components/QuemSomos";

const Home = () => {
  return (
    <>
      <Header />
      <HomeComponent />
      <QuemSomos />
      <Impressao />
      <Orcamento />
      <Footer />
    </>
  );
};

export default Home;
