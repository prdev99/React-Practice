import { useState } from "react";

function Input() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  function ChangeData(val) {
    setData(val.target.value);
    setPrint(false);
  }

  return (
    <>
      {print ? <h1>{data}</h1> : null}
      <input type="text" onChange={ChangeData}></input>
      <button
        onClick={() => {
          setPrint(true);
        }}
      >
        Click
      </button>
    </>
  );
}
export default Input;
