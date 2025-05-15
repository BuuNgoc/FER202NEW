// src/PersonDetail.js
import React from "react";

function PersonDetail() {
  const person = {
    name: "Alice",
    age: 30,
    occupation: "Engineer"
  };

  return (
    <div>
      <h2>Person Detail</h2>
      <p><strong>Name:</strong> {person.name}</p>
      <p><strong>Age:</strong> {person.age}</p>
      <p><strong>Occupation:</strong> {person.occupation}</p>
    </div>
  );
}

export default PersonDetail;
