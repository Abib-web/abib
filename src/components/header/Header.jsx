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
        </ul>
      </nav>
      <button>Écris-moi</button>
    </header>
  );
};

export default Header;
