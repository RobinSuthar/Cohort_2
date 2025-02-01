import { useMemo, useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState(0);
  const [counter, setCounter] = useState(0);

  var count = useMemo(() => {
    console.log("Rendered");
    var x = 0;
    for (let i = 0; i <= inputValue; i++) {
      x = x + i;
    }
    return x;
  }, [inputValue]);

  return (
    <div>
      <div>
        <input
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </div>
      <div>Sum is {count}</div>
      <div>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Counter {counter}
        </button>
      </div>
    </div>
  );
}

export default App;
