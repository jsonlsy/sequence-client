import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const status = useSelector((state) => state.status);
  const socket = useSelector((state) => state.socket);
  const winner = useSelector((state) => state.winner.winner);
  const room = useSelector((state) => state.room);
  const players = useSelector((state) => state.players);

  if (!status || !socket) return null;

  const roomId = room.set ? room.room || socket.id : null;
  const shareLink = `${window.location.origin}?room=${roomId}`;

  let displayStatus;
  if (winner) {
    displayStatus = `${winner} team won!`;
  } else if (status.paused) {
    displayStatus = 'Paused';
  } else if (status.started) {
    displayStatus = 'Playing';
  } else {
    displayStatus = 'Not started';
  }

  const renderStartButton = () => {
    const nPlayers = Object.keys(players).length;
    const hasEvenPlayers = nPlayers % 2 === 0;
    return (
      <div>
        { !status.started && <button type="button" disabled={!hasEvenPlayers} onClick={() => socket.emit('start')}>Start</button> }
        { !hasEvenPlayers && <div>An even number of players required</div>}
      </div>
    );
  };

  return (
    <div>
      <div>Dashboard:</div>
      <div>
        <span>Status: </span>
        <span>{ displayStatus }</span>
      </div>
      <div>
        <span>Share link: </span>
        <small>{ shareLink }</small>
      </div>
      { renderStartButton() }
      { status.started && <button type="button" onClick={() => socket.emit('reset')}>Reset</button> }
    </div>
  );
};

export default Dashboard;
