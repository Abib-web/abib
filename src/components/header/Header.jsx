import React, { useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyPress = (event) => {
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
    <header className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <a href="/" className="navbar-brand logo">MonPortfolio</a>
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto nav-list">
            {isHomePage ? (
              <>
                <li className="nav-item"><a href="#projects" className="nav-link">Projets</a></li>
                <li className="nav-item"><a href="#skills" className="nav-link">Compétences</a></li>
                <li className="nav-item"><a href="#articles" className="nav-link">Articles</a></li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/projects" className="nav-link">Projets</Link>
                </li>
                <li className="nav-item">
                  <Link to="../#skills" className="nav-link">Compétences</Link>
                </li>
                <li className="nav-item">
                  <Link to="/articles" className="nav-link">Articles</Link>
                </li>
              </>
            )}
          </ul>
          <button className="btn btn-primary ms-2 btn-send-me">Écris-moi</button>
        </div>
      </div>
    </header>
  );
};

export default Header;