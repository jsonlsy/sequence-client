import React from 'react';
import { useSelector } from 'react-redux';

const Players = () => {
  const players = useSelector((state) => state.players);
  const socket = useSelector((state) => state.socket);

  if (!players || !socket) return null;

  return (
    <div>
      <div>Players:</div>
      {
        Object.keys(players).map((player) => (
          <div key={player}>{player}</div>
        ))
      }
      <button type="button" onClick={() => socket.emit('start')}>Start</button>
    </div>
  );
};

export default Players;
