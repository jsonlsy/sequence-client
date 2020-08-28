import React from 'react';
import { useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tile from './Tile';

const Board = () => {
  const board = useSelector((state) => state.board);

  const renderTile = ({ card, color }, key) => (
    <Col key={key}>
      <Tile card={card} color={color} />
    </Col>
  );

  if (!board) return null;

  return (
    <div>
      <div>Board:</div>
      {
        board.map((row, rowIndex) => (
          <Row noGutters key={`row-${rowIndex}`}>
            { row.map((tile, colIndex) => renderTile(tile, `${rowIndex}-${colIndex}`)) }
          </Row>
        ))
      }
    </div>
  );
};

export default Board;
