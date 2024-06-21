import React, { useEffect, useState } from "react";

const Collapse = ({ project, descriptionTitle, equipmentsTitle }) => {
  const handleVisibilityAndToggle = (
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

  const [sectionVisible, setSectionVisible] = useState({
    description: false,
    equipments: false,
  });
  const [isClicked, setIsClicked] = useState({
    description: false,
    equipments: false,
  });

  return (
    <div className="dropdownsContainer">
      <div
        className={`${sectionVisible.description ? "open" : "close"} dropdown`}
      >
        <div className="alwaysShow">
          <p>{descriptionTitle}</p>
          <button
            className={isClicked.description ? "clicked" : ""}
            onClick={() =>
              handleVisibilityAndToggle(
                "description",
                setSectionVisible,
                setIsClicked
              )
            }
          >
            &#10096;
          </button>
        </div>
        <div className="content">
          <p>{project.description}</p>
        </div>
      </div>
      <div
        className={`${sectionVisible.equipments ? "open" : "close"} dropdown`}
      >
        <div className="alwaysShow">
          <p>{equipmentsTitle}</p>
          <button
            className={isClicked.equipments ? "clicked" : ""}
            onClick={() =>
              handleVisibilityAndToggle(
                "equipments",
                setSectionVisible,
                setIsClicked
              )
            }
          >
            &#10096;
          </button>
        </div>
        <div className="content">
          <ul>
            {project.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
