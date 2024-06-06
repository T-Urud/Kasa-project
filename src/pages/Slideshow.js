import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Slideshow = () => {
  const { id } = useParams;

  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    axios.get("/db.json").then((res) => console.log(res.data[0]));
  }, []);

  return (
    <div>
      <Header />
      {projectsData.map((project) => (
        <Carousel project={project} />
      ))}
    </div>
  );
};

export default Slideshow;
