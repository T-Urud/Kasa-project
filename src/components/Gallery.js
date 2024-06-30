import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();
  const [projectsData, setProjectsData] = useState([]);
  const [status, setStatus] = useState({ loading: true, error: null });
  const handleCardClick = (id) => {
    navigate(`/project/${id}`);
  };

  useEffect(() => {
    axios
      .get("/db.json")
      .then((res) => {
        setProjectsData(res.data);
        setStatus({ loading: false, error: null });
      })
      .catch((err) => {
        setStatus({ loading: false, error: err.message });
      });
  }, []);

  if (status.loading) {
    return <div>Loading...</div>;
  }
  if (status.error) {
    return <div>{status.error}</div>;
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
