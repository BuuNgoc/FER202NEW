import React, { useState } from 'react';

export default function SearchFilter() {
  const items = ['Apple', 'Banana', 'Grapes', 'Orange', 'Strawberry'];
  const [search, setSearch] = useState('');

  const filtered = items.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filtered.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
