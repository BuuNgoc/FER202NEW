import React from "react";

function AverageAgeByOccupation() {
  const people = [
    { name: "Alice", age: 30, occupation: "Engineer" },
    { name: "Bob", age: 25, occupation: "Designer" },
    { name: "Charlie", age: 35, occupation: "Teacher" },
    { name: "David", age: 28, occupation: "Designer" },
    { name: "Eve", age: 22, occupation: "Engineer" }
  ];

  // Nhóm người theo occupation và tính tuổi trung bình
  const ageSums = {};
  const counts = {};

  people.forEach(person => {
    if (!ageSums[person.occupation]) {
      ageSums[person.occupation] = 0;
      counts[person.occupation] = 0;
    }
    ageSums[person.occupation] += person.age;
    counts[person.occupation] += 1;
  });

  const averageAges = {};
  for (const occupation in ageSums) {
    averageAges[occupation] = (ageSums[occupation] / counts[occupation]).toFixed(2);
  }

  return (
    <div>
      <h2>Average Age by Occupation</h2>
      <ul>
        {Object.entries(averageAges).map(([occupation, avgAge]) => (
          <li key={occupation}>
            {occupation}: {avgAge} years
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AverageAgeByOccupation;
