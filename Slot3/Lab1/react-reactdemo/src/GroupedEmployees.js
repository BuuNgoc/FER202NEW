import React from "react";
import { employees } from "./employees";

function GroupedEmployees() {
  const groups = employees.reduce((acc, e) => {
    if (!acc[e.department]) acc[e.department] = [];
    acc[e.department].push(e);
    return acc;
  }, {});

  return (
    <div>
      {Object.entries(groups).map(([dep, list]) => (
        <div key={dep}>
          <h3>{dep}</h3>
          <ul>
            {list.map((e, index) => (
              <li key={e.id || index}>{e.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GroupedEmployees;
