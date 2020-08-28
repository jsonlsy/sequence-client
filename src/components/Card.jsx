import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { cardString } from '../helpers/cards';
import { selectCard } from '../redux/modules/hand';

const Card = ({ card }) => {
  const selectedCard = useSelector((state) => state.hand.selected);
  const dispatch = useDispatch();

  const isSelected = selectedCard && (cardString(card) === selectedCard);

  const attrClass = isSelected ? 'selected' : '';

  const select = () => {
    dispatch(selectCard(cardString(card)));
  };

  return (
    <div className={`card ${attrClass}`} onClick={select}>
      {cardString(card)}
    </div>
  );
};

export default Card;
