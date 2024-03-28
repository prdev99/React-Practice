import { useState } from "react";

function Login() {
  const [userError, setUserError] = useState(false);
  const [userPassErr, setUserPassErr] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");
  function handleForm(e) {
    // console.log(userName.length, userPass);
    userName.length < 3 || userPass.length < 3
      ? alert("Type Valid input")
      : alert("Good");
    e.preventDefault();
  }

  function getData(e) {
    let item = e.target.value;
    item.length < 3 ? setUserError(true) : setUserError(false);
    setUserName(item);
  }

  function getPass(e) {
    let item = e.target.value;
    item.length < 3 ? setUserPassErr(true) : setUserPassErr(false);
    setUserPass(item);
  }
  return (
    <>
      <form onSubmit={handleForm}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="enter username"
          onChange={getData}
        ></input>
        {userError ? <span>username greater than 3 charater</span> : null}
        <br />
        <br />
        <input
          type="password"
          placeholder="enter password"
          onChange={getPass}
        ></input>
        {userPassErr ? <span>Invalid password</span> : null}
        <br />
        <br />
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default Login;
