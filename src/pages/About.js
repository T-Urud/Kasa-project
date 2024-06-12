import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  const [sectionVisible, setSectionVisible] = useState({
    fiabilite: false,
    respect: false,
    service: false,
    securite: false,
  });
  const [isClicked, setIsClicked] = useState(false);

  const handleVisibility = (section) => {
    // prevState --> état avant update
    setSectionVisible((prevState) => ({
      // ...prevState --> destructuring object
      ...prevState,
      [section]: !prevState[section],
    }));

    setIsClicked((prevIsClicked) => !prevIsClicked);
  };

  return (
    <div>
      <Header />
      <div className="imgMottoContainer"></div>
      <div className="aboutGeneralContainer">
        <div className="aboutContainer">
          <div className="alwaysShow">
            <p>Fiabilité</p>
            <button
              onClick={() => handleVisibility("fiabilite")}
              style={{
                transform: isClicked ? "rotate(270deg)" : "rotate(90deg)",
              }}
            >
              &#10096;
            </button>
          </div>
          <div
            className="content"
            style={{
              display: sectionVisible.fiabilite ? "block" : "none",
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
            <button
              onClick={() => handleVisibility("fiabilite")}
              style={{
                transform: isClicked ? "rotate(270deg)" : "rotate(90deg)",
              }}
            >
              &#10096;
            </button>
          </div>
          <div
            className="content"
            style={{ display: sectionVisible.respect ? "block" : "none" }}
          >
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de pertubation du voisinage
              entrainera une exclusion de notre plateforme.
            </p>
          </div>
        </div>
        <div className="aboutContainer">
          <div className="alwaysShow">
            <p>Service</p>
            <button
              onClick={() => handleVisibility("fiabilite")}
              style={{
                transform: isClicked ? "rotate(270deg)" : "rotate(90deg)",
              }}
            >
              &#10096;
            </button>
          </div>
          <div
            className="content"
            style={{ display: sectionVisible.service ? "block" : "none" }}
          >
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de pertubation du voisinage
              entrainera une exclusion de notre plateforme.
            </p>
          </div>
        </div>
        <div className="aboutContainer">
          <div className="alwaysShow">
            <p>Sécurité</p>
            <button
              onClick={() => handleVisibility("fiabilite")}
              style={{
                transform: isClicked ? "rotate(270deg)" : "rotate(90deg)",
              }}
            >
              &#10096;
            </button>
          </div>
          <div
            className="content"
            style={{
              display: sectionVisible.securite ? "block" : "none",
            }}
          >
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
