import React from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
