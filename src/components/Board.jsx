import React from 'react';
import { useSelector } from 'react-redux';

const Board = () => {
  const board = useSelector((state) => state.board);
  const socket = useSelector((state) => state.socket);

  const renderTile = ({ card, color }, key) => (
    <span key={key}>
      {card}
      ::
      {color}
    </span>
  );

  if (!board || !socket) return null;

  return (
    <div>
      <div>Board:</div>
      {
        board.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`}>
            { row.map((tile, colIndex) => renderTile(tile, `${rowIndex}-${colIndex}`)) }
          </div>
        ))
      }
      <button type="button" onClick={() => socket.emit('start')}>Start</button>
    </div>
  );
};

export default Board;
