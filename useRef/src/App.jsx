//Main Purpose on UseRef is to change DOM,
//It;s Basciually document.getElementByID

import { useEffect, useRef, useState } from "react";

function App() {
  const [tax, setTax] = useState(100);
  const divRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      divRef.current.innerHTML = 50;
    }, 5000);
  }, []);

  return <div ref={divRef}>{tax} </div>;
}

export default App;
