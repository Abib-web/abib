import React from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AllProjects from "./components/AllProjects";
import Header from "./components/Header/Header"; // Importation du Header
import './App.css'

function App() {
  return (
    <Router>
      <Header /> {/* Le Header s'affiche sur toutes les pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </Router>
  );
}
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import Skills from "./components/skills/Skills"
import Header from "./components/header/Header";
import ArticlePage from "./components/Article/ArticlePage";
import "./App.css";

const App = () => {
  return (
    <Router>
    <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/article/:articleId" element={<ArticlePage />} />
      </Routes>
    </Router>
  );
};
>>>>>>> gh-pages

export default App;
