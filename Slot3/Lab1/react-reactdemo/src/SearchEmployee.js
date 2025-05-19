import React, { useState } from "react";
import { employees } from "./employees";

function SearchEmployee() {
  const [query, setQuery] = useState("");

  const matches = employees.filter(e =>
    e.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search name..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <ul>
        {matches.map((e, index) => (
          <li key={e.id || index}>{e.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchEmployee;
