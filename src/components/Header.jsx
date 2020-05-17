import React, { useState } from "react";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import { Redirect } from "react-router-dom";

function Header(props) {
  const [isLogOut, setLogOut] = useState(false);

  function logOut(event) {
    event.preventDefault();
    setLogOut(true);
    // const history = props.history;
    // console.log(history);
    // history.push("/login");
  }

  const enableLogout = (
    <form className="form-logout">
      <button type="submit" onClick={logOut}>
        Logout
      </button>
    </form>
  );

  return (
    <div>
      {isLogOut && <Redirect to="/login" />}
      <header>
        <h1>
          <EmojiObjectsIcon />
          My Notes
        </h1>
        {props.enableLogout && enableLogout}
      </header>
    </div>
  );
}

export default Header;
