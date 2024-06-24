import React, { useCallback, useState } from "react";

const Collapse = ({ title, content }) => {
  const [sectionState, setSectionState] = useState({
    state: { visible: false, clicked: false },
  });

  const handleVisibilityAndToggle = useCallback(() => {
    setSectionState((prevState) => ({
      // prevState --> état avant update
      // ...prevState --> destructuring object
      ...prevState,
      state: {
        visible: !prevState.state.visible,
        clicked: !prevState.state.clicked,
      },
    }));
  }, []);

  // const { state } = sectionState;

  return (
    <div className="dropdownsContainer">
      <div
        className={`${sectionState.state.visible ? "open" : "close"} dropdown`}
      >
        <div className="alwaysShow">
          <p>{title}</p>
          <button
            className={sectionState.state.clicked ? "clicked" : ""}
            onClick={() => handleVisibilityAndToggle("description")}
          >
            &#10096;
          </button>
        </div>
        {sectionState.state.visible && (
          <div className="content">{<p>{content}</p>}</div>
        )}
      </div>
    </div>
  );
};

export default Collapse;
