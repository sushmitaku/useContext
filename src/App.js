import "./styles.css";
import ContextCounter from "./ContextCounter";
//wrap with component

import Counter from "./Counter";
export default function App() {
  return (
    <div className="App">
      <ContextCounter>
        <Counter />
      </ContextCounter>
    </div>
  );
}
