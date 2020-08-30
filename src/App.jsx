import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Home from './Home';
import Game from './Game';
import { joinRoom } from './redux/modules/room';

const App = () => {
  const room = useSelector((state) => state.room);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const roomParam = params.get('room');
    if (roomParam) {
      // dispatch(joinRoom(roomParam));
    }
    setLoaded(true);
  });

  if (!loaded) {
    return <div>loading...</div>;
  }
  if (room && room.set) {
    return <Game room={room.room} />;
  }
  return <Home />;
};

export default App;
