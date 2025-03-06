import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "./hero-section/HeroSection";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import Skills from "./skills/Skills";
import client from '../contentfulClient';
import "./Home.css";
import { use } from "react";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    client.getEntries({ content_type: "article" }) 
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
            <li
              key={article.sys.id}
              className={`article-item ${!article.fields.dataImage ? 'no-image' : ''}`}
              onClick={() => handleArticleClick(article.sys.id)}
            >
              <div className="article-content">
                <h2>{article.fields.titre}</h2>
                {article.fields.dataImage?.[0].fields?.file?.url ? (
                  <img
                    src={`https:${article.fields.dataImage[0].fields.file.url}`}
                    alt={article.fields.titre}
                    className="article-image"
                  />
                ) : (
                  <p>Aucune image disponible</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
