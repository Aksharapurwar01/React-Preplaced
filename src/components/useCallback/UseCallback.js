import React, { useState, useCallback, useMemo } from 'react';

// Child Component
const ChildComponent = React.memo(({ onClick, computedValue }) => {
  console.log("ChildComponent rendered");
  return (
    <div>
      <button onClick={onClick}>Click me</button>
      <p>Computed Value: {computedValue}</p>
    </div>
  );
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(2);

  // Memoizing the handleClick function using useCallback
  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  // Using useMemo to compute a value based on count and multiplier
  const computedValue = useMemo(() => {
    console.log("Computed value recalculated");
    return multiplier;
  }, [ multiplier]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setMultiplier(multiplier + 0)}>Increase Multiplier</button>

      {/* Pass the memoized function and computed value to the child component */}
      <ChildComponent onClick={handleClick} computedValue={computedValue} />
    </div>
  );
};

export default ParentComponent;
