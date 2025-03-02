<<<<<<< HEAD
import React from "react";
import "./Skills.css";

const skills = [
    { name: "C/C++", icon: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png" },
    { name: "Python", icon: "https://cdn-icons-png.flaticon.com/512/1822/1822899.png" },
    { name: "React", icon: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
    { name: "Node.js", icon: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
    { name: "SQL", icon: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png" },
    { name: "PIC16/18/24", icon: "https://cdn-icons-png.flaticon.com/512/3224/3224866.png" },
    { name: "STM32", icon: "https://cdn-icons-png.flaticon.com/512/3224/3224866.png" },
    { name: "FPGA", icon: "https://cdn-icons-png.flaticon.com/512/882/882985.png" },
    { name: "Arduino", icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png" },
    { name: "Raspberry Pi", iconnnn : "https://cdn-icons-png.flaticon.com/512/4290/4290854.png" },
    { name: "Altium Designer", icon: "https://cdn-icons-png.flaticon.com/512/929/929083.png" },
    { name: "MATLAB/Simulink", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc36bSKd51qFqjmBk_cDA3eNAeYF2Dtc_fWQ&s" },
    { name: "IoT", icon: "https://cdn-icons-png.flaticon.com/512/1524/1524891.png" },
    { name: "PLC SIEMENS", icon: "https://cdn-icons-png.flaticon.com/512/3224/3224866.png" },
    { name: "PLC ALLEN-BRADLEY", icon: "https://cdn-icons-png.flaticon.com/512/3224/3224866.png" },
    { name: "Linux", icon: "https://cdn-icons-png.flaticon.com/512/6124/6124995.png" },
    { name: "Git", icon: "https://cdn-icons-png.flaticon.com/512/919/919847.png" },
    { name: "Docker", icon: "https://cdn-icons-png.flaticon.com/512/919/919853.png" },
    { name: "Wireshark", icon: "https://cdn-icons-png.flaticon.com/512/1149/1149232.png" },
    { name: "Cybersécurité", icon: "https://cdn-icons-png.flaticon.com/512/3522/3522145.png" },
    { name: "Odoo", icon: "https://cdn-icons-png.flaticon.com/512/8744/8744040.png" },
    { name: "Boostrap.js", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png" },
  ];
  

const Skills = () => {
  return (
    <section className="skills">
      <h2>Mes Compétences</h2>
      <p>Voici un aperçu des technologies et outils que j'utilise :</p>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
=======
  import React, { useState } from "react";
  import "./Skills.css";
  import { motion, AnimatePresence } from "framer-motion";
  import { Radar } from "react-chartjs-2"; // Importer le radar depuis react-chartjs-2
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

  const radarData = {
    labels: skills.map((skill) => skill.name), // Utiliser les noms des compétences comme étiquettes
    datasets: [
      {
        label: "Niveau de Compétence (%)",
        data: [90, 80, 75, 70, 85, 60, 70, 80, 75, 77, 55, 66,50, 80,70,60,56,70,80,60,78,99], // Niveaux fictifs (vous pouvez les ajuster)
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        borderColor: "#007bff",
        borderWidth: 2,
      },
    ],
  };

  const radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: { color: "#ddd" },
        grid: { color: "#ddd" },
        ticks: {
          display: true,
          stepSize: 20,
          color: "#555",
        },
      },
    },
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
        {/* Ajout du graphique radar */}
        <div className="radar-chart">
          <h3>Niveau de Compétence</h3>
          <div style={{ width: "100%", height: "400px" }}>
            <Radar data={radarData} options={radarOptions} />
          </div>
        </div>
      </section>
    );
  };

  export default Skills;
>>>>>>> gh-pages
