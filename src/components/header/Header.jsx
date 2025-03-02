<<<<<<< HEAD
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <a href="#" className="logo">MonPortfolio</a>
      <nav>
        <ul className="nav-list">
          <li className="nav-item"><a href="#projects">Projets</a></li>
          <li className="nav-item"><a href="#skills">Compétences</a></li>
          <li className="nav-item"><a href="#articles">Articles</a></li>
=======
import React, {useEffect} from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyPress = (event) => {
      // Ctrl + D pour accéder au dashboard
      if (event.ctrlKey && event.key === "d") {
        navigate("/dashboard");
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [navigate]);

  return (
    <header>
      <a href="/" className="logo">MonPortfolio</a>
      <nav>
        <ul className="nav-list">
          {isHomePage ? (
            <>
              <li className="nav-item"><a href="#projects">Projets</a></li>
              <li className="nav-item"><a href="#skills">Compétences</a></li>
              <li className="nav-item"><a href="#articles">Articles</a></li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/projects">Projets</Link>
              </li>
              <li className="nav-item">
                <Link to="../#skills">Compétences</Link>
              </li>
              <li className="nav-item">
                <Link to="/articles">Articles</Link>
              </li>
            </>
          )}
>>>>>>> gh-pages
        </ul>
      </nav>
      <button>Écris-moi</button>
    </header>
  );
};

export default Header;
