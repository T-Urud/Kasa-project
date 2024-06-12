import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <Header />
      <div className="imgMottoContainer"></div>
      <div className="aboutGeneralContainer">
        <div className="aboutContainer">
          <div className="alwaysShow">
            <p>Fiabilité</p>
            <button onClick={() => setIsVisible(true)}>&#10096;</button>
          </div>
          <div
            className="content"
            style={{ display: isVisible ? "block" : "none" }}
          >
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
