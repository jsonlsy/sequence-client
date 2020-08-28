import React from 'react';
import { useSelector } from 'react-redux';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from './Card';
import { cardString } from '../helpers/cards';

const Hand = () => {
  const cards = useSelector((state) => state.hand.cards);

  if (!cards) return null;

  return (
    <div>
      <div>Hand:</div>
      <Row>
        {
          cards.map((card) => (
            <Col key={cardString(card)}>
              <Card card={card} />
            </Col>
          ))
        }
      </Row>
    </div>
  );
};

export default Hand;
