import React, { useReducer } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {
  count: 0,
  name: '',
  age: ''
};

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'RESET':
      return { ...state, count: 0 };
    case 'SET_NAME':
      return { ...state, name: action.value };
    case 'SET_AGE':
      return { ...state, age: action.value };
    default:
      return state;
  }
}

function AppEx2() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Container className="mt-5">
      {/* Counter */}
      <Row className="text-center mb-3">
        <Col>
          <h2>Counter: {state.count}</h2>
          <div className="d-flex justify-content-center gap-2 mt-2">
            <Button variant="primary" onClick={() => dispatch({ type: 'INCREMENT' })}>+</Button>
            <Button variant="danger" onClick={() => dispatch({ type: 'DECREMENT' })}>-</Button>
            <Button variant="secondary" onClick={() => dispatch({ type: 'RESET' })}>Reset</Button>
          </div>
        </Col>
      </Row>

      {/* Form */}
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formName">
          <Form.Label column sm={2}><strong>Name:</strong></Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Input name"
              value={state.name}
              onChange={(e) => dispatch({ type: 'SET_NAME', value: e.target.value })}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formAge">
          <Form.Label column sm={2}><strong>Age:</strong></Form.Label>
          <Col sm={10}>
            <Form.Control
              type="number"
              placeholder="Input age"
              value={state.age}
              onChange={(e) => dispatch({ type: 'SET_AGE', value: e.target.value })}
            />
          </Col>
        </Form.Group>
      </Form>

      {/* Display name & age */}
      <Row className="mt-4 text-center">
        <Col>
          <h4><strong>Name:</strong> {state.name}</h4>
          <h4><strong>Age:</strong> {state.age}</h4>
        </Col>
      </Row>
    </Container>
  );
}

export default AppEx2;
