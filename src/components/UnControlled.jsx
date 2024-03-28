import { useRef } from "react";

function UnControlled() {
  let inputRef1 = useRef(null);
  let inputRef2 = useRef(null);
  function submitForm(e) {
    e.preventDefault();
    console.log("input field 1 value", inputRef1.current.value);
    console.log("input field 2 value", inputRef2.current.value);
    let input3 = document.getElementById("input").value;
    console.log("input field 2 value", input3);
  }
  return (
    <>
      <h1>UnControlled</h1>
      <form onSubmit={submitForm}>
        <input type="text" ref={inputRef1}></input>
        <br />
        <br />
        <input type="text" ref={inputRef2}></input>
        <br />
        <br />
        <input id="input" type="text"></input>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}

export default UnControlled;
