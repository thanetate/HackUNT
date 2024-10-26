import React from "react";
import TinderCard from 'react-tinder-card'
import TinderCards from "../components/TinderCards";
import { Certificate } from "crypto";


const swipe = () => {
  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}> 
        <h1>Swipe</h1>
        <TinderCards /> {/* Displaying the TinderCards component */}
    </div>
  )
  
};

export default swipe;
