import React from 'react';
import { useSelector } from 'react-redux';

const Players = () => {
  const players = useSelector((state) => state.players);

  if (!players) return null;

  return (
    <div>
      <div>Players:</div>
      {
        Object.keys(players).map((player) => (
          <div key={player}>{player}</div>
        ))
      }
    </div>
  );
};

export default Players;
