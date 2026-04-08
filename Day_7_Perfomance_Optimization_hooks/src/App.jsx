import React, { useState, useCallback, useMemo } from "react";
import ChildMemo from "./Components/ChildMemo";
import ChildCallback from "./Components/ChildCallback";
import ChildMemoValue from "./Components/ChildMemoValue";
import ChildRef from "./Components/ChildRef";
import UseRender from "./Components/UseRender";

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(5);

  // useCallback
  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  // useMemo
  const memoValue = useMemo(() => {
    console.log("Memo Calculation...");
    return num * 2;
  }, [num]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <hr />

      {/* React.memo */}
      <ChildMemo name="Priyanshu" />

      <hr />

      {/* useCallback */}
      <ChildCallback handleClick={handleClick} />

      <hr />

      {/* useMemo */}
      <ChildMemoValue number={memoValue} />

      <hr />

      {/* useRef */}
      <ChildRef />

      <h1>Use Render</h1>
      <UseRender />

      








    </div>
  );
}

export default App;