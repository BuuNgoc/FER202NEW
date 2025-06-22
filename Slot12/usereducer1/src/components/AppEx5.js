import React, { useReducer, useState } from 'react';
import { Container, Form, Button, ListGroup } from 'react-bootstrap';

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, { id: Date.now(), text: action.text }];
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.id);
    case 'EDIT_ITEM':
      return state.map(item => item.id === action.id ? { ...item, text: action.text } : item);
    default:
      return state;
  }
}

function AppEx5() {
  const [items, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      dispatch({ type: 'ADD_ITEM', text });
      setText('');
    }
  };

  const handleEdit = (id, currentText) => {
    setEditingId(id);
    setEditText(currentText);
  };

  const handleSave = (id) => {
    dispatch({ type: 'EDIT_ITEM', id, text: editText });
    setEditingId(null);
    setEditText('');
  };

  return (
    <Container>
      <Form.Group className="mb-3">
        <Form.Label>Enter Item:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter item name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="mt-2 text-center">
          <Button onClick={handleAdd}>Add Item</Button>
        </div>
      </Form.Group>

      <h4 className="text-center">Item List:</h4>
      <ListGroup>
        {items.map(item => (
          <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
            {editingId === item.id ? (
              <Form.Control
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="me-2"
              />
            ) : (
              item.text
            )}
            <div>
              {editingId === item.id ? (
                <>
                  <Button variant="success" size="sm" onClick={() => handleSave(item.id)} className="me-2">Save</Button>
                  <Button variant="secondary" size="sm" onClick={() => setEditingId(null)}>Cancel</Button>
                </>
              ) : (
                <>
                  <Button variant="warning" size="sm" onClick={() => handleEdit(item.id, item.text)} className="me-2">Edit</Button>
                  <Button variant="danger" size="sm" onClick={() => dispatch({ type: 'REMOVE_ITEM', id: item.id })}>Remove</Button>
                </>
              )}
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default AppEx5;
