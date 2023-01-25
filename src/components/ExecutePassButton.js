import React from 'react';
import Card from './Card';

export default function ExecutePassButton({
  passCard,
  setFrom,
  from,
  to,
  selectedCard,
  setSelectedCard,
}) {
  return (
    <div className="execute-button" onClick={() => passCard(selectedCard)}>
      Pass <Card card={selectedCard} setSelectedCard={setSelectedCard} setFrom={setFrom} /> from{' '}
      {from} to {to}
    </div>
  );
}
