import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import axios from "axios";
import Error from "./Error";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";

const Slideshow = () => {
  const { id } = useParams();
  const [projectsData, setProjectsData] = useState([]);
  const project = projectsData.find((project) => project.id === id);
  const [error, setError] = useState(null);

  const rate = project ? Number(project.rating) : 0;

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
    <div>
      {project ? (
        <main>
          <div className="marginContainer">
            <Header />
            <Carousel project={project} />
            <div className="infosAndTagsContainer">
              <div className="infosContainer">
                <div className="property">
                  <h2>{project.title}</h2>
                  <p>{project.location}</p>
                </div>
                <div className="tagsContainer">
                  <ul>
                    {project.tags.map((tag, index) => (
                      <li key={index}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="hostAndRatingContainer">
                <div className="hostContainer">
                  <p>{project.host.name}</p>
                  <div className="hostPic">
                    <img src={project.host.picture} alt="host profile pic" />
                  </div>
                </div>
                <div className="ratingContainer">
                  <ul>
                    <span className={rate > 0 ? "full" : ""}>&#9733;</span>
                    <span className={rate > 1 ? "full" : ""}>&#9733;</span>
                    <span className={rate > 2 ? "full" : ""}>&#9733;</span>
                    <span className={rate > 3 ? "full" : ""}>&#9733;</span>
                    <span className={rate > 4 ? "full" : ""}>&#9733;</span>
                  </ul>
                </div>
              </div>
            </div>
            <div className="collapsesContainer">
              <Collapse title="Description" content={project.description} />
              <Collapse
                title="Equipments"
                content={project.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              />
            </div>
          </div>
          <Footer />
        </main>
      ) : projectsData.length === 0 ? (
        <div></div>
      ) : (
        <Error />
      )}
    </div>
  );
};

export default Slideshow;
