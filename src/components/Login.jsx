import React, { useState } from "react";
import axios from "axios";
import qs from "qs";

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  function onChangeInput(event) {
    const { name, value } = event.target;
    setUser((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function onClickLogin(event) {
    event.preventDefault();
    const userData = {
      username: user.username,
      password: user.password,
    };
    console.log("user sent==> " + user.username + " " + user.password);

    const options = {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: qs.stringify(userData),
      url: "http://localhost:5000/users",
    };
    axios(options);
  }

  return (
    <div className="container">
      <form>
        <input
          name="username"
          placeholder="Username"
          type="text"
          onChange={onChangeInput}
          value={user.username}
        ></input>
        <input
          name="password"
          placeholder="Password"
          type="password"
          onChange={onChangeInput}
          value={user.password}
        ></input>
        <button type="submit" onClick={onClickLogin}>
          Login
        </button>
        <button type="submit">Register?</button>
      </form>
    </div>
  );
}

export default Login;
