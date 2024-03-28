import logo from "./logo.svg";
import "./App.css";
import User from "./components/User";
import Test from "./ClassComponents/Test";
import { useState } from "react";
import Student from "./components/Student";
import Input from "./components/Input";
import Form from "./components/Form";
import Login from "./components/Login";
import UserClass from "./ClassComponents/UserClass";
import UseEffect from "./components/UseEffect";
import { Button } from "react-bootstrap";
import List from "./components/List";
import NestedList from "./components/NestedList";
import ChildToParent from "./components/ChildToParent";

function App() {
  const [data, setData] = useState("Radhe");
  const [count, setCount] = useState(10);

  function getInfo(data) {
    alert(data);
  }

  // function Apple() {
  //   setData("Hey");
  // }
  return (
    <div className="App">
      <ChildToParent alert = {getInfo}/>

      {/* <NestedList /> */}
      {/* <List /> */}
      {/* <UseEffect count={count} />
      <Button onClick={() => setCount(count + 1)}>Update count</Button> */}
      {/* <UserClass data={data} />
      <button onClick={() => setData("Shyam")}>Click</button> */}

      {/* <Login /> */}
      {/* <Form /> */}

      {/* <Input /> */}
      {/* <User data = {getInfo}/> */}

      {/* <h1>{data}</h1> */}
      {/* <button onClick={Apple}>Click</button> */}
      {/* <Apple /> */}
      {/* <Test /> */}
      {/* <Student
        name={data}
        email="shyam@gmail.com"
        other={{ address: "abc", city: "indore" }}
      />
      <button
        onClick={() => {
          setData("Shyam");
        }}
      >
        Click
      </button> */}
    </div>
  );
}

export default App;
