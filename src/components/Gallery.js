import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();
  const [projectsData, setProjectsData] = useState([]);
  const [error, setError] = useState(null);

  const handleCardClick = (id) => {
    navigate(`/project/${id}`);
  };

  useEffect(() => {
    axios
      .get("/db.json")
      .then((res) => {
        setProjectsData(res.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="galleryContainer">
      <ul className="gallery">
        {projectsData.map((project) => (
          <Card
            key={project.id}
            project={project}
            onClick={() => handleCardClick(project.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
