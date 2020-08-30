import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const status = useSelector((state) => state.status);
  const socket = useSelector((state) => state.socket);
  const winner = useSelector((state) => state.winner);

  if (!status || !socket) return null;

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

  return (
    <div>
      <div>Dashboard:</div>
      <div>
        <span>Status: </span>
        <span>{ displayStatus }</span>
      </div>
      { !status.started && <button type="button" onClick={() => socket.emit('start')}>Start</button> }
      { status.started && <button type="button" onClick={() => socket.emit('reset')}>Reset</button> }
    </div>
  );
};

export default Dashboard;
