import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

const Slideshow = ({ project }) => {
  const { id } = useParams;

  return (
    <div>
      <Header />
      <h1>dddddd</h1>
    </div>
  );
};

export default Slideshow;
