import React, { useState, useEffect } from "react";
import remarkGfm from "remark-gfm";
import { useParams } from "react-router-dom";
import client from "../../contentfulClient";
import "./ArticlePage.css";
import ReactMarkdown from 'react-markdown';

const ArticlePage = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    client
      .getEntry(articleId)
      .then((response) => {
        console.log("Données de l'article :", response.fields);
        setArticle(response);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur lors de la récupération de l'article :", err);
        setError("Impossible de charger l'article.");
        setLoading(false);
      });
  }, [articleId]);

  if (loading) return <p>Chargement de l'article...</p>;
  if (error) return <p>{error}</p>;
  if (!article) return <p>Aucun article trouvé.</p>;

  const imageUrl = article?.fields?.dataImage?.[0].fields?.file?.url;
  const titre = article?.fields?.titre || "Titre non disponible";
  const contenu = article?.fields?.contenu;

  console.log("Type de contenu :", typeof contenu);
  console.log("Contenu :", contenu);

  return (
    <div className="article-container">
      <h1>{titre}</h1>

      <div className="article-content">
        {contenu ? (
          <ReactMarkdown children={contenu} remarkPlugins={[remarkGfm]} />
        ) : (
          <p>Contenu non disponible.</p>
        )}
      </div>
    </div>
  );
};

export default ArticlePage;
