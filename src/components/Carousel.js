import React, { useState } from "react";

const Carousel = ({ project }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === project.pictures.length - 1 ? 0 : prev + 1
    );
  };

  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? project.pictures.length - 1 : prev - 1
    );
  };

  return (
    <div className="carousel">
      <button
        className={project.pictures.length === 1 ? `prev hidden` : "prev"}
        onClick={previousSlide}
      >
        &#10096;
      </button>
      <button
        className={project.pictures.length === 1 ? `next hidden` : "next"}
        onClick={nextSlide}
      >
        &#10097;
      </button>
      <ul>
        {project.pictures.map((slide, index) => (
          <li
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <img src={project.pictures[currentSlide]} alt={project.title} />
            <span
              className={
                project.pictures.length === 1
                  ? `displayNumberPictures hidden`
                  : "displayNumberPictures"
              }
            >
              {currentSlide + 1}/{project.pictures.length}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
