import React, { useState } from 'react';

export default function ColorSwitcher() {
  const [color, setColor] = useState('white');

  return (
    <div>
      <select onChange={(e) => setColor(e.target.value)} value={color}>
        <option value="white">White</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
      <div style={{ backgroundColor: color, padding: '20px', marginTop: '10px' }}>
        This box changes color
      </div>
    </div>
  );
}
