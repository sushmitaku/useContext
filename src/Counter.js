import React, { useContext } from "react";
import { createCounter } from "./ContextCounter";
const Counter = () => {
  const { count, setCount } = useContext(createCounter);
  const incremtHandler = () => {
    setCount((prev) => prev + 1);
  };
  const decrementHandler = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div>
      {count}
      <button onClick={incremtHandler}>increment</button>
      <button onClick={decrementHandler}>decrement</button>
    </div>
  );
};
export default Counter;
