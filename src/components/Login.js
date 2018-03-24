import React from "react";

export default ({
  username,
  password,
  update_username,
  update_password,
  login
}) => (
  <form onSubmit={e => e.preventDefault()}>
    <label>Username: </label>
    <input
      type={"text"}
      onChange={({ target }) => update_username({ username: target.value })}
    />
    <label>Password: </label>
    <input
      type={"password"}
      onChange={({ target }) => update_password({ password: target.value })}
    />
    <button onClick={login}>Login</button>
  </form>
);
