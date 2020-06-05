import React, { useState, useContext } from "react";
import axios from "axios";
import qs from "qs";
import { useHistory, Redirect } from "react-router-dom";
import { checkExistingToken, setCurrentToken } from "../useAuthToken";

function LoginForm() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const history = useHistory();

  function onChangeInput(event) {
    const { name, value } = event.target;
    setUser((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function onClickRegister(event) {
    event.preventDefault();
    const userData = {
      username: user.username,
      password: user.password,
    };
    console.log("user sent==> " + user.username + " " + user.password);

    axios({
      url: "http://localhost:5000/api/addUser",
      method: "post",
      data: qs.stringify(userData),
      headers: { "content-type": "application/x-www-form-urlencoded" },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function onClickLogin(event) {
    event.preventDefault();
    const userData = {
      username: user.username,
      password: user.password,
    };
    console.log("user sent==> " + user.username + " " + user.password);

    axios({
      url: "http://localhost:5000/api/authUser",
      method: "post",
      data: qs.stringify(userData),
      headers: { "content-type": "application/x-www-form-urlencoded" },
    })
      .then((res) => {
        console.log(res.data.success);
        // if TRUE route to User Notes screen
        if (res.data.success) {
          setCurrentToken(res.data);
          history.push("/userNotes");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (checkExistingToken()) {
    return <Redirect to="userNotes" />;
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
        <button type="submit" onClick={onClickLogin} className="btn-login">
          Login
        </button>
        <button type="submit" onClick={onClickRegister} className="btn-login">
          Register?
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
