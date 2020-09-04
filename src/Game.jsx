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
import Dashboard from './components/Dashboard';

import { setSocket } from './redux/modules/socket';
import { updatePlayers } from './redux/modules/players';
import { updateBoard } from './redux/modules/board';
import { updateHand, selectCard } from './redux/modules/hand';
import { updateStatus } from './redux/modules/status';
import { updateTurnToPlay } from './redux/modules/turn';
import { updateWinner } from './redux/modules/winner';

const ENDPOINT = 'http://127.0.0.1:8081';

const Game = ({ room, playerName }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT, { query: { room, playerName } });

    socket.on('connect', () => {
      dispatch(setSocket(socket));
      // if (!room) {
      //   // TODO: consider using react router
      //   history.pushState('', '', `?room=${socket.id}`);
      // }

      socket.on('gameState', (gameState) => {
        console.log('got gameState event');
        console.log(gameState);
        dispatch(updatePlayers(gameState.players));
        dispatch(updateBoard(gameState.board));
        dispatch(updateStatus(gameState.status));
        dispatch(updateTurnToPlay(gameState.turn, gameState.turn === socket.id));
        dispatch(updateWinner(gameState.winner));
      });

      socket.on('playerCards', (playerCards) => {
        console.log('got playerCards event');
        dispatch(selectCard(null));
        dispatch(updateHand(playerCards));
      });
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div className="py-3">
      <Container>
        <Row>
          <Col sm={3}>
            <div className="mb-2">
              <Dashboard />
            </div>
            <Players />
          </Col>
          <Col sm={9}>
            <Board />
            <Hand />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Game;
