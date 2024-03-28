import { useState } from "react";

function Controlled() {
  const [val, setVal] = useState("");
  return (
    <>
      <h1>Controlled Input</h1>
      <input
        type="text"
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      ></input>
      <h4>{val}</h4>
    </>
  );
}
export default Controlled;
