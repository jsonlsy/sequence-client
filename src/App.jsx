import React, { useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import { useDispatch } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { Container, Row, Col } from 'react-bootstrap';

import Players from './components/Players';
import Board from './components/Board';
import Hand from './components/Hand';

import { setSocket } from './redux/modules/socket';
import { updatePlayers } from './redux/modules/players';
import { updateBoard } from './redux/modules/board';
import { updateHand } from './redux/modules/hand';

const ENDPOINT = 'http://127.0.0.1:8081';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    dispatch(setSocket(socket));

    socket.on('gameState', (gameState) => {
      console.log('got gameState event');
      dispatch(updatePlayers(gameState.players));
      dispatch(updateBoard(gameState.board));
    });

    socket.on('playerCards', (playerCards) => {
      console.log('got playerCards event');
      dispatch(updateHand(playerCards));
    });

    return () => socket.disconnect();
  });

  return (
    <div>
      <h3>Sequence</h3>
      <Container>
        <Row>
          <Col sm={2}>
            <Players />
          </Col>
          <Col sm={10}>
            <Board />
            <Hand />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
