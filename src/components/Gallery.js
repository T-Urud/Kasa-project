import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/project/${id}`);
  };

  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    axios.get("/db.json").then((res) => setProjectsData(res.data));
  }, []);

  return (
    <div className="galleryContainer">
      <ul className="gallery">
        {projectsData.map((project, index) => (
          <Card
            key={index}
            project={project}
            onClick={() => handleCardClick(project.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
