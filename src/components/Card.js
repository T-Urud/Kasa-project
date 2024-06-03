import React from "react";

const Card = ({ project }) => {
  return (
    <li className="propertyContainer">
      <img src={project.cover} alt={project.title} />
      <div className="propertyInfo">
        <p>{project.title}</p>
      </div>
    </li>
  );
};

export default Card;
