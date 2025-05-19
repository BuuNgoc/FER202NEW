import React from "react";
import { employees } from "./employees";

function EmployeeDropdown() {
  return (
    <select>
      {employees.map((e, index) => (
        <option key={e.id || index}>{e.name}</option>
      ))}
    </select>
  );
}

export default EmployeeDropdown;
