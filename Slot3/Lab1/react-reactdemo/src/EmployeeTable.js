import React from "react";
import { employees } from "./employees";

function EmployeeTable() {
  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((e, index) => (
          <tr key={e.id || index}>
            <td>{e.id || index}</td>
            <td>{e.name}</td>
            <td>{e.department}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
