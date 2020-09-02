import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectCard } from '../redux/modules/hand';
import { isWildcard, isRemove } from '../helpers/cards';

const Tile = ({ cardCode, color, rowIndex, colIndex }) => {
  const selectedCardCode = useSelector((state) => state.hand.selected);
  const socket = useSelector((state) => state.socket);
  const players = useSelector((state) => state.players);
  const dispatch = useDispatch();

  const currentColor = players[socket.id] ? players[socket.id].color : null;

  const isSelected = cardCode
    && ((selectedCardCode && (cardCode === selectedCardCode) && !color)
        || (isWildcard(selectedCardCode) && !color)
        || (isRemove(selectedCardCode) && color && color !== currentColor));

  const play = () => {
    if (!isSelected) return;
    socket.emit('play', { cardCode: selectedCardCode, rowIndex, colIndex });
    dispatch(selectCard(null));
  };

  let attrClass = '';
  if (color) {
    attrClass += color;
  }

  if (isSelected) {
    attrClass += ' selected cursor-pointer';
  }

  return (
    <div className={`card ${attrClass}`} onClick={play}>
      {cardCode}
    </div>
  );
};

export default Tile;
