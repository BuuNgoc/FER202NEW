// App.js
import React from 'react';
import Counter from './components/Counter';
import ControlledInput from './components/ControlledInput';
import ToggleText from './components/ToggleText';
import TodoList from './components/TodoList';
import ColorSwitcher from './components/ColorSwitcher';
import SearchFilter from './components/SearchFilter';
import DragDropList from './components/DragDropList';

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h2>1. Counter</h2>
      <Counter />

      <h2>2. Controlled Input</h2>
      <ControlledInput />

      <h2>3. Toggle Visibility</h2>
      <ToggleText />

      <h2>4. Todo List</h2>
      <TodoList />

      <h2>5. Color Switcher</h2>
      <ColorSwitcher />

      <h2>6. Search Filter</h2>
      <SearchFilter />

      <h2>7. Drag and Drop List</h2>
      <DragDropList />
    </div>
  );
}
