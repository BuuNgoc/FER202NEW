import React from "react";

function FirstTeenager() {
  const people = [
    { name: "Alice", age: 30, occupation: "Engineer" },
    { name: "Bob", age: 17, occupation: "Student" },
    { name: "Charlie", age: 35, occupation: "Teacher" },
    { name: "Daisy", age: 15, occupation: "Intern" }
  ];

  const teenager = people.find(person => person.age >= 13 && person.age <= 19);

  return (
    <div>
      <h2>First Teenager</h2>
      {teenager ? (
        <p>
          {teenager.name} - Age: {teenager.age}, Occupation: {teenager.occupation}
        </p>
      ) : (
        <p>No teenager found.</p>
      )}
    </div>
  );
}

export default FirstTeenager;
