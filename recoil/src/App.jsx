import "./App.css";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenCountAtom } from "./store/atoms/counts";
//what;s a prop drilling
//context API to avoid prop drillig, but it has a not good point which is
//everytime a child components rendered in between componets even though unchanged it
//still re renders. So we use Recoild to avoid That./
//This is Callled Prop Drilling
function App() {
  console.log("App Components Re-Rendered");
  return (
    <div>
      <RecoilRoot>
        <SomeComponent></SomeComponent>
      </RecoilRoot>
    </div>
  );
}

function SomeComponent() {
  console.log("Some Components Re-Rendered");

  return (
    <div>
      <Count></Count>
      <CustomButtons></CustomButtons>
    </div>
  );
}

function Count() {
  const count = useRecoilValue(countAtom);

  const eventCount = useRecoilValue(evenCountAtom);
  return (
    <div>
      <div>{count}</div>
      {/* <div>{eventCount ? "This is Even Number" : null}</div> */}
    </div>
  );
}

function CustomButtons() {
  console.log("Custom Button Components Re-Rendered");
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        Increase Count
      </button>
      <button onClick={() => setCount((count) => count - 1)}>
        Decrease Count
      </button>
    </div>
  );
}

export default App;
