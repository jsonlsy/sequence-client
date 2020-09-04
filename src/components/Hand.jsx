import React from 'react';
import { useSelector } from 'react-redux';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from './Card';

const Hand = () => {
  const cards = useSelector((state) => state.hand.cards);

  if (!cards) return null;

  return (
    <div>
      <div>Hand:</div>
      <Row className="justify-content-center">
        {
          cards.map((card, i) => (
            <Col key={i} sm="auto">
              <Card card={card} />
            </Col>
          ))
        }
      </Row>
    </div>
  );
};

export default Hand;
