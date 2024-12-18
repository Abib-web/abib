import React from "react";
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

export default App;
