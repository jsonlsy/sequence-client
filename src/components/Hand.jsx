import React from 'react';
import { useSelector } from 'react-redux';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { default as PlayingCard } from './Card';

const Hand = () => {
  const cards = useSelector((state) => state.hand.cards);
  const deck = useSelector((state) => state.deck.deck);
  const socket = useSelector((state) => state.socket);
  const selectedCardCode = useSelector((state) => state.hand.selected);

  if (!cards) return null;

  const discard = () => {
    socket.emit('discard', { cardCode: selectedCardCode });
  };

  return (
    <Card>
      <div className="card-header">Your cards</div>
      <Card.Body>
        <Row noGutters>
          {
            cards.map((card, i) => (
              <Col key={i} sm="auto">
                <div className="m-1">
                  <PlayingCard card={card} />
                </div>
              </Col>
            ))
          }
        </Row>
      </Card.Body>
      <Card.Footer>
        <Row className="justify-content-between">
          <Col sm="auto">
            <small>
              Cards in deck:&nbsp;
              {deck}
            </small>
          </Col>
          {
            selectedCardCode && (
              <Col sm="auto">
                <Button size="sm" variant="secondary" onClick={discard}>
                  Discard
                </Button>
              </Col>
            )
          }
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default Hand;
