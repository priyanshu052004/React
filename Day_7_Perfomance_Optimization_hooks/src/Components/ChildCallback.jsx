import React from "react";

const ChildCallback = React.memo(({ handleClick }) => {
  console.log("ChildCallback Rendered");

  return <button onClick={handleClick}>Click Me</button>;
});

export default ChildCallback;