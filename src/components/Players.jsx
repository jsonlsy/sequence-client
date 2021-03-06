import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

import { highlightTile, unhighlightTile } from '../redux/modules/board';
import { isRemove, isWildcard } from '../helpers/cards';

const Players = () => {
  const players = useSelector((state) => state.players.players);
  const admin = useSelector((state) => state.players.admin);
  const turn = useSelector((state) => state.turn.turn);
  const turns = useSelector((state) => state.turn.turns);
  const socket = useSelector((state) => state.socket);
  const dispatch = useDispatch();

  const isTurn = (playerId) => turn && turn === playerId;

  const currentPlayerIndicator = (playerId) => {
    if (socket && socket.id === playerId) {
      return (<small>(You)</small>);
    }
  };

  const highlight = (row, col) => () => {
    dispatch(highlightTile(row, col));
    setTimeout(() => dispatch(unhighlightTile()), 500);
  };

  const lastMoveLabel = (lastMove) => {
    if (isRemove(lastMove.card)) {
      return 'Played a one-eyed Jack';
    }
    if (isWildcard(lastMove.card)) {
      return 'Played a two-eyed Jack';
    }
    return 'Played';
  };

  const renderPlayer = (playerId) => {
    if (players[playerId]) {
      return (
        <ListGroup.Item key={playerId} variant={isTurn(playerId) ? 'success' : ''}>
          <div>
            <span className={`color-${players[playerId].color} pr-1`}>
              { players[playerId].name }
            </span>
            { currentPlayerIndicator(playerId) }
            { admin === playerId && (<small>(Admin)</small>) }
          </div>
          {
            players[playerId].lastMove && (
              <small>
                { lastMoveLabel(players[playerId].lastMove) }
                :&nbsp;
                <u className="cursor-pointer" onClick={highlight(players[playerId].lastMove.row, players[playerId].lastMove.col)}>
                  { players[playerId].lastMove.card }
                </u>
              </small>
            )
          }
        </ListGroup.Item>
      );
    }
  };

  if (!turns || !players) return null;

  const playersIds = turns.length ? turns : Object.keys(players);
  return (
    <Card>
      <div className="card-header">Players</div>
      <ListGroup variant="flush">
        { playersIds.map((playerId) => renderPlayer(playerId)) }
      </ListGroup>
    </Card>
  );
};

export default Players;
