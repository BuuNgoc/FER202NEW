import React, { useReducer } from 'react';
import { Button, Container, ListGroup, Row, Col } from 'react-bootstrap';

const initialItems = [
  { id: 1, text: 'Item 1' },
  { id: 2, text: 'Item 2' },
  { id: 3, text: 'Item 3' },
];

function reducer(state, action) {
  switch (action.type) {
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.id);
    case 'CLEAR_ALL':
      return [];
    default:
      return state;
  }
}

function AppEx4() {
  const [items, dispatch] = useReducer(reducer, initialItems);

  return (
    <Container>
      <ListGroup className="mb-3">
        {items.map(item => (
          <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
            {item.text}
            <Button variant="danger" onClick={() => dispatch({ type: 'REMOVE_ITEM', id: item.id })}>Remove</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Row className="justify-content-center">
        <Col sm="auto">
          <Button variant="secondary" onClick={() => dispatch({ type: 'CLEAR_ALL' })}>Clear All</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default AppEx4;
