import React from "react";
import axios from "axios";

function Login() {
  function onClickLogin(event) {
    console.log("login button clicked");
    event.preventDefault();
    axios
      .get("https://reqres.in/api/users/2")
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  return (
    <div className="container">
      <form>
        <input name="username" placeholder="Username" type="text"></input>
        <input name="password" placeholder="Password" type="password"></input>
        <button type="submit" onClick={onClickLogin}>
          Login
        </button>
        <button type="submit">Register?</button>
      </form>
    </div>
  );
}

export default Login;
