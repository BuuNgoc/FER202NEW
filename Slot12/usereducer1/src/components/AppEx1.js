/* eslint-disable no-unused-vars */
import React, { useReducer } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
}

function AppEx1() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Container className="text-center">
      <h3>Count: {state.count}</h3>
      <div className="d-flex justify-content-center gap-2">
        <Button variant="primary" onClick={() => dispatch({ type: 'INCREMENT' })}>+</Button>
        <Button variant="danger" onClick={() => dispatch({ type: 'DECREMENT' })}>-</Button>
        <Button variant="secondary" onClick={() => dispatch({ type: 'RESET' })}>Reset</Button>
      </div>
    </Container>
  );
}

export default AppEx1;