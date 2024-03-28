import { useEffect, useState } from "react";

function UseEffect(props) {
  // const [count, setCount] = useState(0);
  // const [name, setName] = useState("anil");
  useEffect(() => {
    console.log("useEffect");
  }, [props.count]);
  return (
    <>
      <h1>Count: {props.count}</h1>
      {/* <button onClick={() => setCount(count + 1)}>Count</button> */}
    </>
  );
}

export default UseEffect;
