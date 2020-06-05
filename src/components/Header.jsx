import React, { useState, useContext } from "react";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import { Redirect, useHistory } from "react-router-dom";
import { checkExistingToken, removeCurrentToken } from "../useAuthToken";

function Header() {
  const history = useHistory();

  function logOut(event) {
    event.preventDefault();
    removeCurrentToken();
    history.push("/login");
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
      <header>
        <h1>
          <EmojiObjectsIcon />
          My Notes
        </h1>
        {checkExistingToken() && enableLogout}
      </header>
    </div>
  );
}

export default Header;
