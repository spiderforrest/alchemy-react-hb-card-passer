import React from 'react';
import CardList from './CardList';
import { useContext } from 'react';
import { GameContext } from '../context/GameContext.js';

export default function Player({ player, hand }) {
  const { to, setTo } = useContext(GameContext);
  return (
    <div
      className={`player ${to === player ? 'selected-player' : ''}`}
      onClick={() => setTo(player)}
    >
      <p>Player {player}</p>
      <CardList player={player} cards={hand} />
    </div>
  );
}
