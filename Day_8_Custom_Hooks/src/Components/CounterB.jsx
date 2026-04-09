import React from "react";
import useCounter from "../hooks/useCounter";

function CounterB() {
  const { count, increment } = useCounter();

  return (
    <div>
      <h2>Counter B: {count}</h2>
      <button onClick={increment}>Increase</button>
    </div>
  );
}

export default CounterB;