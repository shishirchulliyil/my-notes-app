import React from "react";
import Login from "./Login";
import UserNotes from "./UserNotes";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  function NoMatch({ location }) {
    return (
      <div>
        <h3>404 {location.pathname} Not Found</h3>
      </div>
    );
  }

  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/login" exact component={Login} />
      <Route path="/userNotes" component={UserNotes} />
      {/* <Route component={NoMatch} /> */}
    </Router>
  );
}

export default App;
