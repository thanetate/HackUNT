import React from "react";
import '../styles/dash.css'
import Header from "../components/Header";

const dashboard = () => {
  return (
    <>
    <Header />
    <div className="dash-page">
      <div className="left-card-container">
            <div className="redirect-container">
                <img src="./ghost.svg" alt="ghost icon" />
                <button>Account Preferences</button>
            </div>
            <div className="redirect-container">
                <img src="./skull.svg" alt="skull icon" />
                <button>Identifiers</button>
            </div>

      </div>
    
    </div>
    </>
  );
};

export default dashboard;
