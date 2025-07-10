import "../src/css/counter.css";
import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter-app">
        <h1>Counter Application</h1>
        <h2>Counter: {count}</h2>
        <div className="counter">
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    </div>
  );
};

export default Counter;
