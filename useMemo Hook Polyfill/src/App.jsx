import { useState } from "react";
import "./App.css";

import useCustomMemo from "./hooks/custom-useMemo";

function App() {
  const [count, setCount] = useState(0);
  const [subCount, setSubCount] = useState(100);

  const squaredValue = () => {
    console.log("expensive work");
    return count * count;
  };

  const memoSquaredValue = useCustomMemo(squaredValue, [count]);

  return (
    <div className="app">
      <h2>Counter: {count} </h2>
      <h2> Squared Counter: {memoSquaredValue} </h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <h2>Counter2: {subCount} </h2>
      <button onClick={() => setSubCount(subCount - 1)}>Decrement</button>
    </div>
  );
}

export default App;
