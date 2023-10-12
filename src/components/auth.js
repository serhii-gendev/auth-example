import React, { useState, useContext } from "react";
import { store } from "./Store";

const Login = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      // just for testing
      dispatch({ type: "SET_AUTHENTICATION", payload: true });
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
