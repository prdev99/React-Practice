import { Component } from "react";

export default class Test extends Component {
  constructor() {
    super();
    this.state = {
      data: 0,
    };
  }

  apple() {
    this.setState({ data: this.state.data + 1 });
  }
  render() {
    return (
      <>
        <h1>{this.state.data}</h1>
        <button
          onClick={() => {
            this.apple();
          }}
        >
          Click
        </button>
      </>
    );
  }
}
