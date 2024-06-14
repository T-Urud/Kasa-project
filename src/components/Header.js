import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="header">
      <div className="logoContainer">
        <img src="../LOGO.jpg" alt="Kasa logo"></img>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
