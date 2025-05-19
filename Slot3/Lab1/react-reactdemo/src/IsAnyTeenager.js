import React from "react";
import { employees } from "./employees";

function IsAnyTeenager() {
  const isTeenager = employees.some(e => e.age >= 10 && e.age <= 20);

  return <p>Any teenager? {isTeenager ? "Yes" : "No"}</p>;
}

export default IsAnyTeenager;
