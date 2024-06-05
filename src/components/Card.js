import React, { useEffect, useState } from "react";
import Slideshow from "./Slideshow";

const Card = ({ project }) => {
  const [titleLength, setTitleLength] = useState(false);

  useEffect(() => {
    if (project.title.length > 38) {
      setTitleLength(true);
    } else {
      setTitleLength(false);
    }
  }, [project.title]);

  return (
    <li className="propertyContainer">
      <img src={project.cover} alt={project.title} />
      <div
        className="propertyInfo"
        style={{ maxWidth: titleLength ? "60%" : "none" }}
      >
        <p>{project.title}</p>
      </div>
    </li>
  );
};

export default Card;
