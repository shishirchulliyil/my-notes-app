import React from "react";
import LoginForm from "./LoginForm";
import Header from "./Header";
import Footer from "./Footer";

function Login(props) {
  function isLoggedIn(isLoggedIn) {
    const { history } = props;
    // console.log(history);

    if (isLoggedIn) {
      history.push("/notes");
    }
  }

  return (
    <div>
      <Header />
      <LoginForm isLoggedIn={isLoggedIn} />
      <Footer />
    </div>
  );
}

export default Login;
