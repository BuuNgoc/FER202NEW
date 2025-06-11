import React, { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const deleteTodo = (index) => {
    const updated = [...todos];
    updated.splice(index, 1);
    setTodos(updated);
  };

  return (
    <div>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            {todo}{' '}
            <button onClick={() => deleteTodo(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
