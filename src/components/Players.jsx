import React from 'react';
import { useSelector } from 'react-redux';

const Players = () => {
  const players = useSelector((state) => state.players);

  if (!players) return null;
  console.log(players);
  return (
    <div>
      <div>Players:</div>
      {
        Object.keys(players).map((playerId) => (
          <div key={playerId}><span>></span> {players[playerId].name}</div>
        ))
      }
    </div>
  );
};

export default Players;
