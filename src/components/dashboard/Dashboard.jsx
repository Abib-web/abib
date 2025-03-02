import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-container">
        <div className="dashboard-item">
          <h2>Ajouter un Article</h2>
          {/* Formulaire ou bouton pour ajouter des articles */}
        </div>
        <div className="dashboard-item">
          <h2>Gérer les Articles</h2>
          {/* Liste des articles avec options d'édition et suppression */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
