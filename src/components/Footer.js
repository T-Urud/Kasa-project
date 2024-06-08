import React from "react";

const Footer = () => {
  return (
    <footer>
      <img
        src="footer-desktop.svg"
        srcSet="
          footer-mobile.svg 600w,
          footer-desktop.svg 1200w
        "
        sizes="(max-width: 600px) 100vw, 50vw"
        alt="Kasa footer with logo and general terms and conditions"
      />
    </footer>
  );
};

export default Footer;
