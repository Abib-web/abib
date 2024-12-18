import React, { useState } from "react";
import projects from "../../data/projectsData";
import "./ProjectsSection.css";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <section className="projects-section">
      <h2>Mes Projets</h2>
      <div className="projects-grid">
        {projects.slice(0, 3).map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => handleProjectClick(project)}
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      <button className="see-more-btn" onClick={() => window.location.href = "/projects"}>
        Voir plus
      </button>

      {/* Affichage du projet en détail */}
      {selectedProject && (
        <div className="project-modal">
          <div className="project-modal-content">
            <span className="close-btn" onClick={() => setSelectedProject(null)}>&times;</span>
            <img src={selectedProject.image} alt={selectedProject.title} />
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
              Voir le projet complet
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
