//use Callback skips and cache the funciton itself, not the return value
//useMemo Value Cache the return value,
//We use useCallbacks to chache a function  itself
//we Have to use Memo in order to skip the re render of child unti the props
//are change but everytime the app compnent re-render when count butotn is pressed
//it lets to fucntion called again , and then we have to the child render even using memo
//so we use usecallback and pit the function in inside it inroder to avoid
//increasst rerneder

import React, { memo } from "react";
import { useCallback, useMemo, useState } from "react";

// /useCallback is a React Hook that lets you cache a function definition between re-renders.
function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  const handleValue = useCallback(() => {
    setValue("Kunal");
  }, [value, setValue]);
  return (
    <div>
      <div>
        {count}
        <div>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Increase Count
          </button>
          <div>
            {" "}
            <p>Value: {value}</p>
          </div>
        </div>
        <SlowComponent handleValue={handleValue} />
      </div>
    </div>
  );
}

const SlowComponent = React.memo(function x({ handleClick }) {
  console.log("Child Re rnedered");
  for (let i = 0; i < 100000000; i++) {
    i;
  }

  return (
    <div>
      <h1>Slow Component</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
});

export default App;
