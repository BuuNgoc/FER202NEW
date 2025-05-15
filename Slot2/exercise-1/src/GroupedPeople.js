import React from "react";

function GroupedPeople() {
  const people = [
    { name: "Alice", age: 30, occupation: "Engineer" },
    { name: "Bob", age: 25, occupation: "Designer" },
    { name: "Charlie", age: 35, occupation: "Teacher" },
    { name: "David", age: 28, occupation: "Designer" },
    { name: "Eve", age: 22, occupation: "Engineer" }
  ];

  // Hàm nhóm theo occupation
  const grouped = people.reduce((acc, person) => {
    if (!acc[person.occupation]) {
      acc[person.occupation] = [];
    }
    acc[person.occupation].push(person);
    return acc;
  }, {});

  return (
    <div>
      <h2>Grouped People by Occupation</h2>
      {Object.entries(grouped).map(([occupation, group]) => (
        <div key={occupation}>
          <h3>{occupation}</h3>
          <ul>
            {group.map((person, index) => (
              <li key={index}>
                {person.name} - Age: {person.age}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GroupedPeople;
