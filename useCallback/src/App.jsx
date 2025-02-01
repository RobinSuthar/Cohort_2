import { useCallback } from "react";
import { memo } from "react";
import { useMemo } from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleOnClick() {
    setCount(count + 1);
  }

  const x = useCallback(() => {
    console.log("rendered");
  }, []);
  // const x = useMemo(() => {
  //   console.log("Inside X");
  //   return "Robin";
  // }, []);

  return (
    <div>
      <div>{count}</div>
      <button onClick={handleOnClick}>Counter</button>
      <div>-----------------------------</div>

      <Demo a={x}></Demo>
    </div>
  );
}

const Demo = memo(function SomeComponent(props) {
  // ...
  console.log(props.x);
  return <div>Hi there</div>;
});

export default App;
