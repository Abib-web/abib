<<<<<<< HEAD
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
=======
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "./hero-section/HeroSection";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import Skills from "./skills/Skills";
import client from '../contentfulClient';
import Articles from "./Article/ArticlePage";
import "./Home.css";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    client.getEntries({ content_type: "article" }) // Ajout du content_type pour éviter les erreurs
      .then((response) => setArticles(response.items))
      .catch(console.error);
  }, []);

  const handleArticleClick = (articleId) => {
    navigate(`/article/${articleId}`);
  };

  return (
    <>
      <Hero />
      <Skills />
      <ProjectsSection />
      <div className="articles-container">
        <h1>Mes articles</h1>
        <ul className="articles-list">
          {articles.map((article) => (
            <li key={article.sys.id} className="article-item" onClick={() => handleArticleClick(article.sys.id)}>
              <div className="article-content">
                <h2>{article.fields.titre}</h2>
                {article.fields.image?.fields?.file?.url && (
                  <img
                    src={`https:${article.fields.image.fields.file.url}`}
                    alt={article.fields.titre}
                    className="article-image"
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
        <Articles />
      </div>
>>>>>>> gh-pages
    </>
  );
};

export default Home;
