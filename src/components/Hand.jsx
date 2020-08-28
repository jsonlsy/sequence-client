import React from 'react';
import { useSelector } from 'react-redux';

const Hand = () => {
  const hand = useSelector((state) => state.hand);

  if (!hand) return null;

  const cardString = (card) => `${card.rank.shortName} ${card.suit.name}`;

  return (
    <div>
      <div>Hand:</div>
      {
        hand.map((card) => (<div key={cardString(card)}>{cardString(card)}</div>))
      }
    </div>
  );
};

export default Hand;
