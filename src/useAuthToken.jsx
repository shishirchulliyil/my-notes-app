const isAuth = checkExistingToken();

function checkExistingToken() {
  return localStorage.getItem("token");
}

function setCurrentToken(data) {
  localStorage.setItem("token", JSON.stringify(data));
}

function removeCurrentToken() {
  localStorage.removeItem("token");
}

export { checkExistingToken, setCurrentToken, removeCurrentToken };
