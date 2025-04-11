import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "./hero-section/HeroSection";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import Skills from "./skills/Skills";
import client from '../contentfulClient';
import FluidEffect from "./utils/FluidEffect";
import "./Home.css";

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
    <div >
      <FluidEffect />
      <Hero />
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ display: "block" }}>
        <path
          fill="#90E0E0" 
          d="M0,128L48,122.7C96,117,192,107,288,106.7C384,107,480,117,576,144C672,171,768,213,864,224C960,235,1056,213,1152,181.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L0,320Z"
        />
      </svg>

      <Skills />
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ display: "block" }}>
        <path
          fill="#6EA9EE" 
          d="M0,160L48,154.7C96,149,192,139,288,144C384,149,480,171,576,176C672,181,768,171,864,144C960,117,1056,75,1152,69.3C1248,64,1344,96,1392,112L1440,128L1440,0L0,0Z"
        />
      </svg>

      <ProjectsSection />
      <div className="articles-container container">
        <h1>Mes articles</h1>
        <div className="row">
          {articles.map((article) => (
            <div key={article.sys.id} className="col-md-4 col-sm-6 mb-4">
              <div className={`card article-item ${!article.fields.dataImage ? 'no-image' : ''}`} onClick={() => handleArticleClick(article.sys.id)}>
                <div className="card-body">
                  <h2 className="card-title">{article.fields.titre}</h2>
                  {article.fields.dataImage?.[0].fields?.file?.url ? (
                    <img
                      src={`https:${article.fields.dataImage[0].fields.file.url}`}
                      alt={article.fields.titre}
                      className="card-img-top article-image"
                    />
                  ) : (
                    <p className="card-text">Aucune image disponible</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ display: "block" }}>
        <path
          fill="#D5E7FC"
          d="M0,64L48,101.3C96,139,192,213,288,224C384,235,480,181,576,149.3C672,117,768,107,864,112C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,0L0,0Z"
        />
      </svg>

    </div>
  );
};

export default Home;
