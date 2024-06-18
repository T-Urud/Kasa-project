import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import axios from "axios";
import Error from "./Error";
import Footer from "../components/Footer";
import { handleVisibilityAndToggle } from "./About";

const Slideshow = () => {
  const { id } = useParams();
  // obtenir ID

  const [projectsData, setProjectsData] = useState([]);

  const [sectionVisible, setSectionVisible] = useState({
    description: false,
    equipments: false,
  });
  const [isClicked, setIsClicked] = useState({
    description: false,
    equipments: false,
  });

  useEffect(() => {
    axios.get("/db.json").then((res) => setProjectsData(res.data));
  }, []);
  // Axios encore car besoin des données de l'API encore 1x

  const project = projectsData.find((project) => project.id === id);
  // find() permet de trouver le projet avec id qui match avec id de l'URL

  const rate = project ? Number(project.rating) : 0;
  // Number() convertit string en number

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
                    <img
                      src={project.host.picture}
                      alt="host profile picture"
                    />
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
            <div className="dropdownsContainer">
              <div className="dropdown">
                <div className="alwaysShow">
                  <p>Description</p>
                  <button
                    className={isClicked.description ? "clicked" : ""}
                    onClick={() =>
                      handleVisibilityAndToggle(
                        "description",
                        setSectionVisible,
                        setIsClicked
                      )
                    }
                  >
                    &#10096;
                  </button>
                </div>
                <div
                  className="content"
                  style={{
                    display: sectionVisible.description ? "block" : "none",
                  }}
                >
                  <p>{project.description}</p>
                </div>
              </div>
              <div className="dropdown">
                <div className="alwaysShow">
                  <p>Equipements</p>
                  <button
                    className={isClicked.equipments ? "clicked" : ""}
                    onClick={() =>
                      handleVisibilityAndToggle(
                        "equipments",
                        setSectionVisible,
                        setIsClicked
                      )
                    }
                  >
                    &#10096;
                  </button>
                </div>
                <div
                  className="content"
                  style={{
                    display: sectionVisible.equipments ? "block" : "none",
                  }}
                >
                  <ul className="equipmentList">
                    {project.equipments.map((equipment, index) => (
                      <li key={index}>{equipment}</li>
                    ))}
                  </ul>
                </div>
              </div>
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
