import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/store";

const LoginForm = () => {
  const { dispatch } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    if (username.trim() === "admin" && password.trim() === "password") {
      dispatch({ type: "LOGIN", payload: { token: "12345" } });
      setLoginFailed(false);
      navigate("/");
    } else {
      setLoginFailed(true);
    }
  };

  const handleCancel = (event) => {
    event.preventDefault();
    setUsername("");
    setPassword("");
    setLoginFailed(false);
  };

  return (
    <div className="content">
      <form onSubmit={handleLogin} className="login-form">
        <input
          className={`login-form__input ${
            loginFailed ? "error" : ""
          }`}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className={`login-form__input  ${
            loginFailed ? "error" : ""
          }`}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="button-group">
          <button
            type="reset"
            className="button warning"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button type="submit" className="button success">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
