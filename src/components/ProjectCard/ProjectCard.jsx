import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ link, img, title, tech }) => {
  return (
    <div id="card">
      <img src={img} alt={title} className="project-img" />

      <a href={link} target="_blank">
        <div className="overlay">
          <h2 className="title">{title}</h2>
          <p>Technology Used -</p>
          <p className="tech">{tech}</p>
          <p className="view">View</p>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
