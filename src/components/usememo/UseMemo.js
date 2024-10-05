import React, { useState, useMemo } from "react";

const ChildComponent = React.memo(({ onClick, computedValue }) => {
  console.log("ChildComponent rendered");
  return (
    <div>

      <p>Computed Value: {computedValue}</p>
    </div>
  );
});

const UseMemoComponenet = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(2);

 

  const computedValue = useMemo(() => {
    console.log("Computed value recalculated");
    return multiplier;
  }, [multiplier]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setMultiplier(multiplier + 0)}>
        Increase Multiplier
      </button>
      <ChildComponent computedValue={computedValue} />
    </div>
  );
};

export default UseMemoComponenet;
