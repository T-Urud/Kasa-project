import React, { useEffect, useState } from "react";

const Card = ({ project, onClick }) => {
  const [titleLength, setTitleLength] = useState(false);

  useEffect(() => {
    if (project.title.length > 38) {
      setTitleLength(true);
    } else {
      setTitleLength(false);
    }
  }, [project.title]);

  return (
    <li className="propertyContainer" onClick={onClick}>
      <img src={project.cover} alt={project.title} />
      <div
        className="propertyInfo"
        style={{ maxWidth: titleLength ? "70%" : "none" }}
      >
        <p>{project.title}</p>
      </div>
    </li>
  );
};

export default Card;
