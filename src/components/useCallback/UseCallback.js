import React, { useState, useCallback, useMemo } from "react";

const ChildComponent = React.memo(({ onClick }) => {
  console.log("ChildComponent rendered");
  return (
    <div>
      <button onClick={onClick}>Click me</button>
    </div>
  );
});

const CallbackComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <ChildComponent onClick={handleClick} />
    </div>
  );
};

export default CallbackComponent;
