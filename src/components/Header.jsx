import React from "react";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";

function Header(props) {
  function logOut() {
    const history = props.history;
    console.log(history);
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
    <header>
      <h1>
        <EmojiObjectsIcon />
        My Notes
      </h1>
      {props.enableLogout && enableLogout}
    </header>
  );
}

export default Header;
