// src/SortedPeople.js
import React from "react";

function SortedPeople() {
  const people = [
    { name: "Alice", age: 30, occupation: "Engineer" },
    { name: "Bob", age: 25, occupation: "Designer" },
    { name: "Charlie", age: 35, occupation: "Teacher" },
    { name: "David", age: 28, occupation: "Designer" },
    { name: "Eve", age: 22, occupation: "Engineer" }
  ];

  // Tạo bản sao rồi sort
  const sortedPeople = [...people].sort((a, b) => {
    if (a.occupation < b.occupation) return -1;
    if (a.occupation > b.occupation) return 1;
    // Nếu occupation bằng nhau thì so tuổi
    return a.age - b.age;
  });

  return (
    <div>
      <h2>Sorted People by Occupation and Age</h2>
      <ul>
        {sortedPeople.map((person, index) => (
          <li key={index}>
            {person.name} - Age: {person.age}, Occupation: {person.occupation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortedPeople;
