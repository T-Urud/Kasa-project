import React, { useState } from "react";

const Collapse = ({ title, content }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleVisibilityAndToggle = () => {
    setIsVisible(!isVisible);
    setIsClicked(!isClicked);
  };

  return (
    <div className="dropdownsContainer">
      <div className={`${isVisible ? "open" : "close"} dropdown`}>
        <div className="alwaysShow">
          <p>{title}</p>
          <button
            className={isClicked ? "clicked" : ""}
            onClick={() => handleVisibilityAndToggle("description")}
          >
            &#10096;
          </button>
        </div>
        <div className="content">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
