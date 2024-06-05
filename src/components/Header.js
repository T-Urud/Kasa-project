import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="header">
      {/* <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link> */}
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
