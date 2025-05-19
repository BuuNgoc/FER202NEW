import React from "react";
import { employees } from "./employees";

function EmployeeList() {
  return (
    <ul>
      {employees.map((e, index) => (
        <li key={e.id || index}>{e.name} - {e.department}</li>
      ))}
    </ul>
  );
}

export default EmployeeList;
