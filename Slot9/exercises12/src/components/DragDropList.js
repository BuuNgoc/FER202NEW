import React, { useState } from 'react';

export default function DragDropList() {
  const [items, setItems] = useState(['One', 'Two', 'Three', 'Four']);
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (index) => setDraggingItem(index);
  const handleDragOver = (index) => {
    if (draggingItem === index) return;

    const newItems = [...items];
    const item = newItems[draggingItem];
    newItems.splice(draggingItem, 1);
    newItems.splice(index, 0, item);

    setDraggingItem(index);
    setItems(newItems);
  };
  const handleDragEnd = () => setDraggingItem(null);

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => {
            e.preventDefault();
            handleDragOver(index);
          }}
          onDragEnd={handleDragEnd}
          style={{ border: '1px solid gray', padding: '5px', margin: '5px' }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
