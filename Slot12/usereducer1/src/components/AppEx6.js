import React, { useReducer, useState } from 'react';
import { Container, Form, Button, ListGroup } from 'react-bootstrap';

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.text, completed: false }];
    case 'TOGGLE_TODO':
      return state.map(todo => todo.id === action.id ? { ...todo, completed: !todo.completed } : todo);
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}

function AppEx6() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      dispatch({ type: 'ADD_TODO', text });
      setText('');
    }
  };

  return (
    <Container>
      <Form.Group className="mb-3">
        <Form.Label>Enter Task:</Form.Label>
        <Form.Control
          type="text"
          placeholder="New task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="mt-2 text-center">
          <Button onClick={handleAdd}>Add Task</Button>
        </div>
      </Form.Group>

      <h4 className="text-center">Todo List:</h4>
      <ListGroup>
        {todos.map(todo => (
          <ListGroup.Item
            key={todo.id}
            className="d-flex justify-content-between align-items-center"
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
            <div>
              <Button variant="success" size="sm" onClick={() => dispatch({ type: 'TOGGLE_TODO', id: todo.id })} className="me-2">
                {todo.completed ? 'Undo' : 'Done'}
              </Button>
              <Button variant="danger" size="sm" onClick={() => dispatch({ type: 'REMOVE_TODO', id: todo.id })}>
                Delete
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default AppEx6;
