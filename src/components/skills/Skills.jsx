  import React, { useState } from "react";
  import "./Skills.css";
  import { motion, AnimatePresence } from "framer-motion";
  import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from "chart.js";
  import skills from "../../data/skillsData";

  ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

  const SkillsModal = ({ skill, onClose }) => {
    return (
      <AnimatePresence >
        {skill && (
          <>
            <motion.div
              className="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={onClose}
            >
              <motion.div
                className="modal-content"
                initial={{ scale: 0.7, rotate: -10, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                exit={{ scale: 0.7, rotate: 10, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
              >
                <h2>{skill.name}</h2>
                <p>Comment j'ai appris cette compétence : {skill.description}</p>
                <button onClick={onClose} className="close-button">
                  Fermer
                </button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  };



  const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState(null);

    return (
      <section className="skills" id="skills">
        <h2>Mes Compétences</h2>
        <p>Voici un aperçu des technologies et outils que j'utilise :</p>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card"
              onClick={() => setSelectedSkill(skill)}
            >
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
        {selectedSkill && (
          <SkillsModal
            skill={selectedSkill}
            onClose={() => setSelectedSkill(null)}
          />
        )}
      </section>
    );
  };

  export default Skills;
