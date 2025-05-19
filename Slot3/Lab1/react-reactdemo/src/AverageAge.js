import React from "react";
import { employees } from "./employees";

function AverageAge() {
  const averageAge = (...ages) =>
    (ages.reduce((sum, age) => sum + age, 0) / ages.length).toFixed(2);

  const result = averageAge(...employees.map(e => e.age));

  return <p>Average Age: {result}</p>;
}

export default AverageAge;
