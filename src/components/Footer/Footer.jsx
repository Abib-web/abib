import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>À propos</h3>
          <p>
            Ce portfolio a été créé pour présenter mes projets, compétences et
            expériences. N'hésitez pas à me contacter pour toute collaboration !
          </p>
        </div>

        <div className="footer-section">
          <h3>Liens utiles</h3>
          <ul>
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/projects">Projets</a>
            </li>
            <li>
              <a href="/articles">Articles</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Réseaux sociaux</h3>
          <div className="social-icons">
            <a
              href="https://github.com/Abib-web"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/oumar-kone-747b3b18a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon" />
            </a>
            <a
              href="mailto:oumar.kone@uqtr.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Oumar Kone. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;