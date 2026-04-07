import React from "react";

const ChildMemo = React.memo(({ name }) => {
  console.log("ChildMemo Rendered");

  return <h2>User: {name}</h2>;
});

export default ChildMemo;