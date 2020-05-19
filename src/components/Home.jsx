import React from "react";
import Login from "./Login";
import App from "./App";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthContextProvider from "../Context/AuthContext";

function Home() {
  function NoMatch({ location }) {
    return (
      <div>
        <h3>404 {location.pathname} Not Found</h3>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <div>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" exact component={Login} />
            <Route path="/notes" exact component={App} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default Home;
