import React, { useState, useContext } from "react";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Header(props) {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  console.log("Header.jsx isAuthenticated: " + isAuthenticated);

  function logOut(event) {
    event.preventDefault();
    toggleAuth(false);
    return <Redirect to="/login" />;
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
        {props.enableLogout && enableLogout}
      </header>
    </div>
  );
}

export default Header;
