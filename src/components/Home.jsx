import React from "react";
import Login from "./Login";
import App from "./App";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function Home() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/notes" exact component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Home;
