// src/App.js
import React from 'react';
import AppEx1 from './components/AppEx1';
import AppEx2 from './components/AppEx2';
import AppEx3 from './components/AppEx3';
import AppEx4 from './components/AppEx4';
import AppEx5 from './components/AppEx5';
import AppEx6 from './components/AppEx6';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container mt-4">
      <h2 className="mb-3">Exercise 1: Simple Counter</h2>
      <AppEx1 />
      <hr />
      <h2 className="mb-3">Exercise 2: Counter, Name & Age</h2>
      <AppEx2 />
      <hr />
      <h2 className="mb-3">Exercise 3: Add Item</h2>
      <AppEx3 />
      <hr />
      <h2 className="mb-3">Exercise 4: Remove & Clear Items</h2>
      <AppEx4 />
      <hr />
      <h2 className="mb-3">Exercise 5: Sort & Edit Items</h2>
      <AppEx5 />
      <hr />
      <h2 className="mb-3">Exercise 6: Advanced Todo List</h2>
      <AppEx6 />
    </div>
  );
}

export default App;