import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCardCode } from '../helpers/cards';
import { selectCard } from '../redux/modules/hand';

const Card = ({ card }) => {
  const selectedCard = useSelector((state) => state.hand.selected);
  const dispatch = useDispatch();

  const isSelected = selectedCard && (getCardCode(card) === selectedCard);

  const attrClass = isSelected ? 'selected' : '';

  const select = () => {
    dispatch(selectCard(getCardCode(card)));
  };

  return (
    <div className={`card ${attrClass}`} onClick={select}>
      {getCardCode(card)}
    </div>
  );
};

export default Card;
