import React from "react";

function AreAllTeenagers() {
  const people = [
    { name: "Alice", age: 15, occupation: "Student" },
    { name: "Bob", age: 17, occupation: "Student" },
    { name: "Charlie", age: 19, occupation: "Intern" }
  ];

  const allTeenagers = people.every(person => person.age >= 13 && person.age <= 19);

  return (
    <div>
      <h2>Are All Teenagers?</h2>
      <p>{allTeenagers ? "Yes" : "No"}</p>
    </div>
  );
}

export default AreAllTeenagers;
