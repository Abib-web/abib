
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

export default App;
