import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import axios from "axios";
import Error from "./Error";
import Footer from "../components/Footer";

const Slideshow = () => {
  const { id } = useParams();
  // obtenir ID

  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    axios.get("/db.json").then((res) => setProjectsData(res.data));
  }, []);
  // Axios encore car besoin des données de l'API encore 1x

  const project = projectsData.find((project) => project.id === id);
  // find() permet de trouver le projet avec id qui match avec id de l'URL

  return (
    <div>
      <Header />
      {project ? (
        <main>
          <Carousel project={project} />
          <div className="infosContainer">
            <div className="property">
              <h2>{project.title}</h2>
              <p>{project.location}</p>
            </div>
            <div className="hostContainer">
              <p>{project.host.name}</p>
              <div className="hostPic">
                <img src={project.host.picture} alt="host profile picture" />
              </div>
            </div>
          </div>
          <div className="tagsAndRatingContainer">
            <div className="tagsContainer">{project.tags}</div>
            <div className="ratingContainer">{project.rating}</div>
          </div>
          <div className="dropdownsContainer">
            <div className="dropdown">
              <div className="alwaysShow">
                <p>Description</p>
                <button className="sign">&#10096;</button>
              </div>
              <div className="content">
                <p>{project.description}</p>
              </div>
            </div>
            <div className="dropdown">
              <div className="alwaysShow">
                <p>Equipements</p>
                <button className="sign">&#10096;</button>
              </div>
              <div className="content">
                <ul className="equipmentList">
                  {/* {projectsData.map((project) => (
                  ))} */}
                  <li>{project.equipments}</li>
                </ul>
              </div>
            </div>
          </div>
          <Footer />
        </main>
      ) : (
        <Error />
      )}
    </div>
  );
};

export default Slideshow;
