import React from "react";

function ChildMemoValue({ number }) {
  console.log("ChildMemoValue Rendered");

  function heavyCalculation(num) {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  }

  const result = heavyCalculation(number);

  return <h3>Result: {result}</h3>;
}

export default ChildMemoValue;