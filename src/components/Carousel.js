import React from "react";

const Carousel = ({ project }) => {
  return (
    <div className="carousel">
      <button className="btn prev">&#10096;</button>
      <button className="btn next">&#10097;</button>
      <ul>
        <li className="slide">
          <img src="" alt="img1" />
        </li>
        <li className="slide active">
          <img src={project.cover} alt="img2" />
        </li>
        <li className="slide">
          <img src="" alt="img3" />
        </li>
        <li className="slide">
          <img src="" alt="img4" />
        </li>
      </ul>
    </div>
  );
};

export default Carousel;
