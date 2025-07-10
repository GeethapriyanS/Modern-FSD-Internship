import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import { useState, useEffect,useRef } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const a = useRef();

  useEffect(() => {
    console.log(a);
    if (count < 0) {
      a.current.style.color="red";
      let timer = setTimeout(() => {
        reset();
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }
    a.current.style.color="green";
  }, [count]);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  return (
    <div className="counter-app">
      <h1 ref={a}>Hello</h1>
      <Header />
      <Counter count={count} />
      <Buttons inc={increment} dec={decrement} res={reset} />
    </div>
  );
};
export default App;

//  <div className="counter-app">
//         <h1>Counter Application</h1>
//         <h2>Counter: {count}</h2>
//         <div className="counter">
//             <button onClick={() => setCount(count + 1)}>Increment</button>
//             <button onClick={() => setCount(count - 1)}>Decrement</button>
//             <button onClick={() => setCount(0)}>Reset</button>
//         </div>
//  </div>
