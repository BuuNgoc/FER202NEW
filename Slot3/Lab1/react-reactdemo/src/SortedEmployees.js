import React from "react";
import { employees } from "./employees";

function SortedEmployees() {
  const sorted = [...employees].sort((a, b) => {
    const depCompare = a.department.localeCompare(b.department);
    return depCompare !== 0 ? depCompare : a.name.localeCompare(b.name);
  });

  return (
    <ul>
      {sorted.map((e, index) => (
        <li key={e.id || index}>{e.name} - {e.department}</li>
      ))}
    </ul>
  );
}

export default SortedEmployees;
