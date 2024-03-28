import { Component } from "react";
import ComUnMount from "./ComUnMount";

export default class UserClass extends Component {
  constructor() {
    console.log("constructor");
    super();
    this.state = {
      email: "this@gmail.com",
      count: 0,
      show: true,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }
  render() {
    console.log("render");
    return (
      <>
        <h1>ClassComponents: {this.props.data}</h1>
        <br />
        <h2>Email address: {this.state.email}</h2>
        <h2>Count: {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({
              email: "changed@gmail.com",
            });
          }}
        >
          Change Email
        </button>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count
        </button>
        {this.state.show ? <ComUnMount /> : <h1>Child component removed</h1>}
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Toggle
        </button>
      </>
    );
  }
}
