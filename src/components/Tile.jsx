import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectCard } from '../redux/modules/hand';

const Tile = ({ cardCode, color, rowIndex, colIndex }) => {
  const selectedCardCode = useSelector((state) => state.hand.selected);
  const socket = useSelector((state) => state.socket);
  const dispatch = useDispatch();

  const play = () => {
    socket.emit('play', { cardCode: selectedCardCode, rowIndex, colIndex });
    dispatch(selectCard(null));
  };

  const isSelected = cardCode && selectedCardCode && (cardCode === selectedCardCode);

  let attrClass;
  if (color) {
    attrClass = color;
  } else if (isSelected) {
    attrClass = 'selected';
  }

  // TODO: check for turn
  attrClass += ' cursor-pointer';

  return (
    <div className={`card ${attrClass}`} onClick={play}>
      {cardCode}
    </div>
  );
};

export default Tile;
