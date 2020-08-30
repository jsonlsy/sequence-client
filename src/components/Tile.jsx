import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectCard } from '../redux/modules/hand';

const Tile = ({ cardCode, color, rowIndex, colIndex }) => {
  const selectedCardCode = useSelector((state) => state.hand.selected);
  const socket = useSelector((state) => state.socket);
  const dispatch = useDispatch();

  const isSelected = cardCode && selectedCardCode && (cardCode === selectedCardCode);

  const play = () => {
    if (!isSelected) return;
    socket.emit('play', { cardCode: selectedCardCode, rowIndex, colIndex });
    dispatch(selectCard(null));
  };

  let attrClass;
  if (color) {
    attrClass = color;
  } else if (isSelected) {
    attrClass = 'selected cursor-pointer';
  }

  return (
    <div className={`card ${attrClass}`} onClick={play}>
      {cardCode}
    </div>
  );
};

export default Tile;
