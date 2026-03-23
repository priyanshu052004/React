import { useEffect, useState } from "react";

function Timer() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((prev) => prev  );
    }, 1000);
  }, []);

  return <h1>Timer: {count}</h1>;
}
export default Timer;
