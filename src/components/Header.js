import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="header">
      <img src="LOGO.jpg" alt="Kasa logo" className="logoContainer"></img>
      <Navigation />
    </header>
  );
};

export default Header;
