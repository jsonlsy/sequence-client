import React from 'react';
import { useSelector } from 'react-redux';

const Players = () => {
  const players = useSelector((state) => state.players);
  return (
    <div>Players:</div>
  );
};

export default Players;
