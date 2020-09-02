import React from 'react';
import { useSelector } from 'react-redux';

const Players = () => {
  const players = useSelector((state) => state.players);
  const turn = useSelector((state) => state.turn.turn);
  const socket = useSelector((state) => state.socket);

  const turnIndicator = (playerId) => {
    if (turn && turn === playerId) {
      return (<span>&lt;</span>);
    }
  };

  const currentPlayerIndicator = (playerId) => {
    if (socket && socket.id === playerId) {
      return (<span>(You)</span>);
    }
  };

  if (!players) return null;
  return (
    <div>
      <div>Players:</div>
      {
        Object.keys(players).map((playerId) => (
          <div key={playerId}>
            { players[playerId].name }
            ({ players[playerId].color })
            { currentPlayerIndicator(playerId) }
            { turnIndicator(playerId) }
          </div>
        ))
      }
    </div>
  );
};

export default Players;
