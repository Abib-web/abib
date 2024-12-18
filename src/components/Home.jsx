import React from "react";
import Hero from "./hero-section/HeroSection";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import Skills from "./skills/Skills";

const Home = () => {
  return (
    <>
      <Hero />
      <Skills/>
      <ProjectsSection />
    </>
  );
};

export default Home;
