import React, { useState } from "react";
import projects from "../../data/projectsData";
<<<<<<< HEAD
=======
import { motion, AnimatePresence } from "framer-motion";
>>>>>>> gh-pages
import "./ProjectsSection.css";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
<<<<<<< HEAD
    <section className="projects-section">
      <h2>Mes Projets</h2>
      <div className="projects-grid">
=======
    <section className="projects-section" id="projects">
      <h2>Mes Projets</h2>
      <p>Voici quelques-uns de mes projets récents :</p>
      <div className="projects-grid">
        {/* Afficher uniquement les 3 premiers projets */}
>>>>>>> gh-pages
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
<<<<<<< HEAD
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
=======

      {/* Bouton "Voir Plus" */}
      <button
        className="see-more-btn"
        onClick={() => (window.location.href = "/projects")}
      >
        Voir plus
      </button>

      {/* Modal d'affichage des détails */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <span
                className="close-btn"
                onClick={() => setSelectedProject(null)}
              >
                &times;
              </span>
              <img src={selectedProject.image} alt={selectedProject.title} />
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.description}</p>
              <div className="project-technologies">
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index} className="technology">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le projet complet
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
>>>>>>> gh-pages
    </section>
  );
};

export default ProjectsSection;
