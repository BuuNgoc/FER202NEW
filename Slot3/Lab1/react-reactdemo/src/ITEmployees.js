import React from "react";
import { employees } from "./employees";

function ITEmployees() {
  const itList = employees.filter(e => e.department === "IT");

  return (
    <ul>
      {itList.map((e, index) => (
        <li key={e.id || index}>{e.name}</li>
      ))}
    </ul>
  );
}

export default ITEmployees;
