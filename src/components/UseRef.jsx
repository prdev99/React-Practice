import { useRef } from "react";

function UseRef() {
  let inputRef = useRef(null);
  function handleInput() {
    inputRef.current.value = 100;
    inputRef.current.focus();
  }
  return (
    <>
      <h1>Use Ref</h1>
      <input type="text" ref={inputRef}></input>
      <button onClick={handleInput}>Click</button>
    </>
  );
}
export default UseRef;
