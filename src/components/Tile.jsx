import React from 'react';
import { useSelector } from 'react-redux';

const Tile = ({ card, color }) => {
  const selectedCard = useSelector((state) => state.hand.selected);

  const isSelected = card && selectedCard && (card === selectedCard);

  let attrClass;
  if (color) {
    attrClass = color;
  } else if (isSelected) {
    attrClass = 'selected';
  }

  return (
    <div className={`card ${attrClass}`}>
      {card}
    </div>
  );
};

export default Tile;
