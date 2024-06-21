import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
import Collapse2 from "../components/Collapse2";

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
      <div className="aboutContainer">
        <Collapse2
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes."
        />
        <Collapse2
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de pertubation du voisinage
              entrainera une exclusion de notre plateforme."
        />
        <Collapse2
          title="Service"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de pertubation du voisinage
              entrainera une exclusion de notre plateforme."
        />
        <Collapse2
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
      <Footer />
    </div>
  );
};

export default About;
