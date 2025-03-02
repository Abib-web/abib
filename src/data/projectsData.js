// src/data/projectsData.js
const projects = [
  {
    id: 1,
    title: "Système IoT pour la qualité de l'air",
    description: "Surveillance en temps réel via capteurs LoRa et tableau de bord web.",
    technologies: ["LoRaWAN", "React", "Node.js", "MongoDB"],
    image: "./0b5d284f-435b-45ac-b829-064a6873f842.jpeg",
    link: "https://github.com/Abib-web/air-quality-iot-system",
  },
  {
    id: 2,
    title: "Application Full Stack de gestion des promotions",
    description: "Application MERN avec gestion d'utilisateurs, restaurants et promotions.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    image: "./file.jpeg",
    link: "https://github.com/Abib-web/promotion-management",
  },
  {
    id: 3,
    title: "Oscilloscope logiciel avec STM32",
    description: "Acquisition et affichage des signaux en temps réel via interface Python.",
    technologies: ["Python", "STM32", "MATLAB"],
    image: "./nucleo-f411re-f446re-wifi-serial1.png",
    link: "https://github.com/Abib-web/software-oscilloscope",
  },
  {
    id: 4,
    title: "Blog scientifique 'ForumXcience'",
    description: "Plateforme dynamique de partage d'articles et discussions techniques.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    image: "./images/project4.png",
    link: "https://github.com/Abib-web/forumXcience",
  },
  {
    id: 5,
    title: "Joystick Controller avec STM32",
    description:
      "Integration d'un joystick pour contrôler un véhicule via communication I2C.",
    technologies: ["STM32", "C", "I2C"],
    image: "./images/joystick-controller.png",
    link: "https://github.com/Abib-web/joystick-controller-stm32",
  },
  {
    id: 6,
    title: "Acquisition de Données avec Nucleo64-L476RG",
    description:
      "Acquisition des données de capteurs (gyroscope, température, humidité) via I2C et transmission UART vers une application Python.",
    technologies: ["STM32", "C", "UART", "I2C", "Python"],
    image: "./images/nucleo-data-acquisition.png",
    link: "https://github.com/Abib-web/GUI_nucleo_project", // Remplace avec le bon lien GitHub
  },
];

export default projects;
