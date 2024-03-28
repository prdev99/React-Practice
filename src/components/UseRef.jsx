import { useRef } from "react";
import ForwardRef from "./ForwardRef";

function UseRef() {
  let inputRef = useRef(null);
  function handleInput() {
    inputRef.current.value = 100;
    inputRef.current.focus();
    inputRef.current.style.color = 'red';
  }
  return (
    <>
      <h1>Use Ref</h1>
      {/* <input type="text" ref={inputRef}></input> */}
      <ForwardRef ref={inputRef} />
      <button onClick={handleInput}>Click</button>
    </>
  );
}
export default UseRef;
