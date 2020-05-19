import React, { useContext, useEffect } from "react";
import LoginForm from "./LoginForm";
import Header from "./Header";
import Footer from "./Footer";

function Login(props) {
  return (
    <div>
      <Header />
      <LoginForm history={props.history} />
      <Footer />
    </div>
  );
}

export default Login;
