"use client";

import TinderCard from 'react-tinder-card';
import React, { useState, useEffect } from 'react';
import "./TinderCards.css"

// Define a type for the character object
type Character = {
  name: string;
  url: string;
};

const db = [ 
    { name: 'Emily', url: '/Capture.PNG' },
    { name: 'John', url: '/IMG_5709.jpg' },
    { name: 'Sarah', url: '/fall2024Schedule.PNG' },
];

const TinderCards = () => {
    const [characters, setCharacters] = useState(db);
    const [isDragging, setIsDragging] = useState(false);

    const onSwipe = (direction: string, name: string) => {
        console.log(`You swiped ${direction} on ${name}`);
        setIsDragging(false); // Ensure dragging is reset
      };

    const onCardLeftScreen = (myIdentifier: string) => {
        console.log(myIdentifier + ' left the screen');
    };

    const handleMouseDown = () => {
        setIsDragging(true);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div>
          <div className="tinderCards__cardContainer">
            {characters.map((character) => (
              <TinderCard
                className='swipe'
                key={character.name}
                onSwipe={(dir) => onSwipe(dir, character.name)}
                onCardLeftScreen={() => onCardLeftScreen(character.name)}
                preventSwipe={["up", "down"]}
                swipeRequirementType='position'
                swipeThreshold={300}
              >
                <div style={{ 
                  backgroundImage: `url(${character.url})`, 
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '300px',
                  height: '400px',
                  borderRadius: '10px',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'flex-end', // Positions text at the bottom
                  color: '#fff',
                  overflow: 'hidden',
                  userSelect: 'none', // Prevent selection on the entire card
                }}>
                  <h3 style={{
                      width: '100%',
                      textAlign: 'center',
                      padding: '10px 0',
                      background: 'rgba(0, 0, 0, 0.4)', // Semi-transparent background for text
                      margin: 0,
                      userSelect: 'none', // Prevent selection on the text
                  }}>{character.name}</h3>
                </div>
              </TinderCard>
            ))}
          </div>
        </div>
    );
};
 
export default TinderCards;