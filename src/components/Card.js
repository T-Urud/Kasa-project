import React, { useEffect, useState } from "react";

const Card = ({ project, onClick }) => {
  const [titleLength, setTitleLength] = useState(false);

  useEffect(() => {
    if (project.title.length > 30) {
      setTitleLength(true);
    } else {
      setTitleLength(false);
    }
  }, [project.title]);

  return (
    <li className="propertyContainer" onClick={onClick}>
      <img src={project.cover} alt={project.title} />
      <div className="gradient"></div>
      <div className={titleLength ? `propertyInfo longTitle` : "propertyInfo"}>
        <p>{project.title}</p>
      </div>
    </li>
  );
};

export default Card;
