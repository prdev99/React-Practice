import { Component } from "react";

export default class ComUnMount extends Component{
  componentWillUnmount(){
    console.log('componentWillUnmount');
  }
  render(){
    return(
      <>
        <h1>Child Component</h1>
      </>
    )
  }
}