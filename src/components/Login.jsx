import React from "react";

function Login() {
  return (
    <div class="container">
      <form>
        <input name="username" placeholder="Username" type="text"></input>
        <input name="password" placeholder="Password" type="password"></input>
        <button type="submit">Login</button>
        <button type="submit">Register?</button>
      </form>
    </div>
  );
}

export default Login;
