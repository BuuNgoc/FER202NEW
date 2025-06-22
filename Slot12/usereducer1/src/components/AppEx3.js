// src/exercise/AppEx3.js
import React, { useReducer, useState } from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function listReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, { id: Date.now(), text: action.text }];
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
}

function AppEx3() {
  const [items, dispatch] = useReducer(listReducer, []);
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      dispatch({ type: 'ADD_ITEM', text });
      setText('');
    }
  };

  return (
    <Container className="mt-5">
      {/* Form nhập */}
      <Row className="mb-3 justify-content-center text-center">
        <Col lg={8}>
          <Form.Label><strong>Enter Item:</strong></Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter item name"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Col>
      </Row>

      <Row className="mb-4 justify-content-center">
        <Col lg={4} className="text-center">
          <Button onClick={handleAdd} variant="primary" size="lg">Add Item</Button>
        </Col>
      </Row>

      {/* Danh sách Item */}
      <Row className="text-center">
        <Col>
          <h3><strong>Item List:</strong></h3>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col lg={8}>
          <Table bordered hover>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td>{item.text}</td>
                  <td className="text-end">
                    <Button
                      variant="danger"
                      onClick={() => dispatch({ type: 'REMOVE_ITEM', id: item.id })}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default AppEx3;
