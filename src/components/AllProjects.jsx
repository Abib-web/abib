import React from "react";
import projects from "../data/projectsData";
import "./style/AllProjects.css";

const AllProjects = () => {
  return (
    <section className="all-projects">
      <h2>Tous mes projets</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Voir le projet
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllProjects;
