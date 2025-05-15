// src/PeopleList.js
import React from "react";

function PeopleList() {
  const people = [
    { name: "Alice", age: 30, occupation: "Engineer" },
    { name: "Bob", age: 25, occupation: "Designer" },
    { name: "Charlie", age: 35, occupation: "Teacher" }
  ];

  return (
    <div>
      <h2>People List</h2>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            {person.name} - Age: {person.age}, Occupation: {person.occupation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PeopleList;
