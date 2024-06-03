import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Gallery = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    axios.get("/db.json").then((res) => setProjectsData(res.data));
  }, []);

  return (
    <div className="galleryContainer">
      <ul className="gallery">
        {projectsData.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
