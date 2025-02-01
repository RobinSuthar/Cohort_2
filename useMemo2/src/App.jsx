//What's use Memo?
//Let's us skip unneccesaary renders of things whose value doesn't not change across entire re-render
//here if we keep count as a dependcy for useMemo it will show render and we will se clg "Inside Memo"
//if we don't do it we will it will Cache the value of a across render and we will not see clg "inside Memo"
import { useMemo } from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [dependentCount, setDependentCount] = useState(10);

  const value = useMemo(() => {
    calculate();
  }, [dependentCount]);

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>
      <p>Depended COunt: {dependentCount}</p>
    </div>
  );
}
//So Use memeo backs stored The returned Value in initial Run
//And does not call the Value Again
//Which Result's
function calculate() {
  console.log("Child Called Again");
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += i;
  }
  return result;
}

export default App;

//When you have a state dependent on an expensive calculation, but you don't want to run the calculation on every render.
//When you declare an array or object inside a component, its reference changes on every render, even though the value remains the same. Wrapping the values inside useMemo maintains referential equality and prevents unnecessary re-renders. This is essential when there's a useEffect dependent on the array or object.
//When you are rendering lists using Array.map that do not need to change unless a certain state value changes.
