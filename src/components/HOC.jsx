import { useState } from "react";

function HOC() {
  return (
    <>
      <h1>High Order Component</h1>
      <HocRed cmp={Counter} />
      <HocBlue cmp={Counter} />
    </>
  );
}

function HocRed(props) {
  const Component = props.cmp;
  return (
    <div style={{ backgroundColor: "red" }}>
      <h2>Red Component</h2>
      <Component />
    </div>
  );
}

function HocBlue(props) {
  const Component = props.cmp;
  return (
    <div style={{ backgroundColor: "blue" }}>
      <h2>Blue Component</h2>
      <Component />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Counter</button>
    </>
  );
}

export default HOC;
