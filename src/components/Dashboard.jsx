import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const status = useSelector((state) => state.status);
  const socket = useSelector((state) => state.socket);

  if (!status || !socket) return null;

  const displayStatus = (status.paused? 'Paused' : (status.started ? 'Playing' : 'Not started'));

  return (
    <div>
      <div>Dashboard:</div>
      <div>
        <span>Status: </span>
        <span>{ displayStatus }</span>
      </div>
      { !status.started && <button type="button" onClick={() => socket.emit('start')}>Start</button> }
    </div>
  );
};

export default Dashboard;
