import React from 'react';
import Card from './Card';
import { useContext } from 'react';
import { GameContext } from '../context/GameContext.js';

export default function CardList({ player, cards }) {
  const { selectedCard, setSelectedCard, setFrom } = useContext(GameContext);
  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card
          key={card.suit + card.value}
          setSelectedCard={setSelectedCard}
          selectedCard={selectedCard}
          player={player}
          setFrom={setFrom}
          card={card}
        />
      ))}
    </div>
  );
}
