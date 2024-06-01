import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Error = () => {
  return (
    <div>
      <Header />
      <div className="errorPage">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <a href="/">Retourner sur la page d'accueil</a>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
