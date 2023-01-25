import { createContext, useState } from 'react';
// why isn't this a for loop
import rawCardData from '../cards-data.js';

const GameContext = createContext('');
export const GameProvider = ({ children }) => {
  const [deck, setDeck] = useState(rawCardData);
  return <GameContext.Provider value={{ deck, setDeck }}>{children}</GameContext.Provider>;
};
