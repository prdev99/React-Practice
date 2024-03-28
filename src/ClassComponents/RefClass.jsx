import { Component, createRef } from "react";

export default class RefClass extends Component {
  constructor() {
    super();
    this.inputRef = createRef();
  }
  getVal() {
    console.log(this.inputRef.current.value);
    this.inputRef.current.style.color = "red";
  }
  render() {
    return (
      <>
        <h1>Ref in class components</h1>
        <input type="text" ref={this.inputRef}></input>
        <button onClick={() => this.getVal()}>Click</button>
      </>
    );
  }
}
