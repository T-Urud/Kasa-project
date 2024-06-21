import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";

export const handleVisibilityAndToggle = (
  section,
  setSectionVisible,
  setIsClicked
) => {
  // prevState --> état avant update
  setSectionVisible((prevState) => ({
    // ...prevState --> destructuring object
    ...prevState,
    [section]: !prevState[section],
  }));

  setIsClicked((prevState) => ({
    ...prevState,
    [section]: !prevState[section],
  }));
};

const About = () => {
  const [sectionVisible, setSectionVisible] = useState({
    fiabilite: false,
    respect: false,
    service: false,
    securite: false,
  });

  const [isClicked, setIsClicked] = useState({
    fiabilite: false,
    respect: false,
    service: false,
    securite: false,
  });

  return (
    <div>
      <Header />
      <div className="imgMottoContainer"></div>
      <div className="aboutGeneralContainer">
        <div className="aboutContainer">
          <div className="alwaysShow">
            <p>Fiabilité</p>
            <button
              onClick={() =>
                handleVisibilityAndToggle(
                  "fiabilite",
                  setSectionVisible,
                  setIsClicked
                )
              }
              className={isClicked.fiabilite ? "clicked" : ""}
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
              onClick={() =>
                handleVisibilityAndToggle(
                  "respect",
                  setSectionVisible,
                  setIsClicked
                )
              }
              className={isClicked.respect ? "clicked" : ""}
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
              onClick={() =>
                handleVisibilityAndToggle(
                  "service",
                  setSectionVisible,
                  setIsClicked
                )
              }
              className={isClicked.service ? "clicked" : ""}
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
              onClick={() =>
                handleVisibilityAndToggle(
                  "securite",
                  setSectionVisible,
                  setIsClicked
                )
              }
              className={isClicked.securite ? "clicked" : ""}
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
        <Collapse descriptionTitle="respect" />
      </div>
      <Footer />
    </div>
  );
};

export default About;
