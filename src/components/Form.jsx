import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("");
  const [tmc, setTmc] = useState(false);
  function getFormData(e) {
    console.log(name, interest, tmc);
    e.preventDefault();
  }
  return (
    <>
      <h1>This is React Form</h1>
      <form onSubmit={getFormData}>
        <input
          type="text"
          placeholder="Enter name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <br />
        <br />
        <select
          onChange={(e) => {
            setInterest(e.target.value);
          }}
        >
          <option>Select Options</option>
          <option>MI</option>
          <option>CSK</option>
        </select>
        <br />
        <br />
        <input
          type="checkbox"
          onChange={(e) => {
            setTmc(e.target.checked);
          }}
        />
        <span>Accept term and conditon</span>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}

export default Form;
