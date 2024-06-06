import React from "react";

const Carousel = ({ project }) => {
  return (
    <div className="carousel">
      <button className="btn" id="prev">
        &#10096;
      </button>
      <button className="btn" id="next">
        &#10097;
      </button>
      <ul>
        <li className="slide">
          <img src="" alt="img1" />
        </li>
        <li className="slide active">
          <img src={project.cover} alt="img2" />
        </li>
        <li className="slide">
          <img src="./img/appartement-paris-x1651287435459.png" alt="img3" />
        </li>
        <li className="slide">
          <img
            src="./img//lampe-a-poser-champignon-design-21716538654500.jpg"
            alt="img4"
          />
        </li>
      </ul>
    </div>
  );
};

export default Carousel;
