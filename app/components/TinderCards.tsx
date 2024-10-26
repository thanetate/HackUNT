"use client";

import TinderCard from 'react-tinder-card';
import React, { useState } from 'react';

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

    const onSwipe = (direction: string, name: string) => {
        console.log(`You swiped ${direction} on ${name}`);
    };

    const onCardLeftScreen = (myIdentifier: string) => {
        console.log(myIdentifier + ' left the screen');
    };

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
          {characters.map((character) => (
            <TinderCard
              key={character.name}
              onSwipe={(dir) => onSwipe(dir, character.name)}
              onCardLeftScreen={() => onCardLeftScreen(character.name)}
              preventSwipe={["up", "down"]}
            >
              <div style={{ backgroundImage: `url(${character.url})` }}>
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
    );
};
 
export default TinderCards;