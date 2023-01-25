import React from 'react';
import Card from './Card';
import { useContext } from 'react';
import { GameContext } from '../context/GameContext.js';

export default function ExecutePassButton({ passCard }) {
  const { setFrom, from, to, selectedCard, setSelectedCard } = useContext(GameContext);
  return (
    <div className="execute-button" onClick={() => passCard(selectedCard)}>
      Pass <Card card={selectedCard} setSelectedCard={setSelectedCard} setFrom={setFrom} /> from{' '}
      {from} to {to}
    </div>
  );
}
