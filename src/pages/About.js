import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  const [isVisible, setIsVisible] = useState(null);

  const toggleVisibility = (section) => {
    setIsVisible(isVisible === section ? null : section);
  };

  return (
    <div>
      <Header />
      <div className="imgMottoContainer"></div>
      <div className="aboutGeneralContainer">
        <div className="aboutContainer">
          <div className="alwaysShow">
            <p>Fiabilité</p>
            <button onClick={() => toggleVisibility("fiabilite")}>
              &#10096;
            </button>
          </div>
          <div
            className="content"
            style={{
              display: isVisible === "fiabilite" ? "block" : "none",
            }}
          >
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          </div>
        </div>
        <div className="aboutContainer">
          <div className="alwaysShow">
            <p>Respect</p>
            <button onClick={() => toggleVisibility("respect")}>
              &#10096;
            </button>
          </div>
          <div
            className="content"
            style={{ display: isVisible === "respect" ? "block" : "none" }}
          >
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          </div>
        </div>
        <div className="aboutContainer">
          <div className="alwaysShow">
            <p>Service</p>
            <button onClick={() => toggleVisibility("service")}>
              &#10096;
            </button>
          </div>
          <div
            className="content"
            style={{ display: isVisible === "service" ? "block" : "none" }}
          >
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          </div>
        </div>
        <div className="aboutContainer">
          <div className="alwaysShow">
            <p>Sécurité</p>
            <button onClick={() => toggleVisibility("securite")}>
              &#10096;
            </button>
          </div>
          <div
            className="content"
            style={{
              display: isVisible === "securite" ? "block" : "none",
            }}
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
