import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import { useDispatch } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';

import Players from './components/Players';
import Board from './components/Board';
import Hand from './components/Hand';
import Dashboard from './components/Dashboard';

import { setSocket } from './redux/modules/socket';
import { updatePlayers, updateAdmin } from './redux/modules/players';
import { updateBoard } from './redux/modules/board';
import { updateHand, selectCard } from './redux/modules/hand';
import { updateStatus } from './redux/modules/status';
import { updateTurns, updateTurnToPlay } from './redux/modules/turn';
import { updateWinner } from './redux/modules/winner';
import { updateDeck } from './redux/modules/deck';
import { updateScore } from './redux/modules/score';

const ENDPOINT = process.env.NODE_ENV === 'development' ? 'http://localhost:8081' : '';

const Game = ({ room, playerName }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalMsg, setModalMsg] = useState(null);
  const closeModal = () => {
    setModalMsg(null);
    setShowModal(false);
  };
  const openModal = (message) => {
    setModalMsg(message);
    setShowModal(true);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT, { query: { room, playerName } });

    socket.on('connect', () => {
      dispatch(setSocket(socket));

      socket.on('gameState', (gameState) => {
        dispatch(updatePlayers(gameState.players));
        dispatch(updateBoard(gameState.board));
        dispatch(updateStatus(gameState.status));
        dispatch(updateTurnToPlay(gameState.turn, gameState.turn === socket.id));
        dispatch(updateTurns(gameState.turns));
        dispatch(updateWinner(gameState.winner));
        dispatch(updateDeck(gameState.deck));
      });

      socket.on('playerCards', (playerCards) => {
        dispatch(selectCard(null));
        dispatch(updateHand(playerCards));
      });

      socket.on('admin', (admin) => {
        dispatch(updateAdmin(admin));
      });

      socket.on('winner', ({ winner, score }) => {
        openModal(`${winner} team won!`);
        dispatch(updateScore(score));
      });

      socket.on('gameError', (errorMsg) => {
        openModal(errorMsg);
      });
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div className="py-3">
      <Container>
        <Row>
          <Col sm={4}>
            <div className="mb-3">
              <Dashboard />
            </div>
            <div className="mb-3">
              <Players />
            </div>
            <Hand />
          </Col>
          <Col sm={8}>
            <Board />
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>{modalMsg}</Modal.Header>
      </Modal>
    </div>
  );
};

export default Game;
