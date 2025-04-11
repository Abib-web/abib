import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import Skills from "./components/skills/Skills";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import ArticlePage from "./components/Article/ArticlePage";
import "./App.css";

const App = () => {
  const location = useLocation(); // Maintenant ça fonctionne

  return (
    <>

      <div className="app-content">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/article/:articleId" element={<ArticlePage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
