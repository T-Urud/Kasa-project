import React, { useEffect, useState } from "react";

const Collapse2 = ({ title, content }) => {
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
  });
  const [isClicked, setIsClicked] = useState({
    description: false,
  });

  return (
    <div className="dropdownsContainer">
      <div
        className={`${sectionVisible.description ? "open" : "close"} dropdown`}
      >
        <div className="alwaysShow">
          <p>{title}</p>
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
        <div className="content">{<p>{content}</p>}</div>
      </div>
    </div>
  );
};

export default Collapse2;
