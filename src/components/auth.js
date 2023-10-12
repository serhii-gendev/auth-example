import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/store"; //import from the path where defined AuthContext

const Login = () => {
  const { dispatch } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault(); // prevent form from refreshing the page
    if (username.trim() === "admin" && password.trim() === "password") {
      dispatch({ type: "LOGIN", payload: { token: "12345" } });
      navigate("/");
    } else {
      alert("Invalid login");
    }
  };

  const handleCancel = (event) => {
    event.preventDefault(); // prevent form from refreshing the page
    setUsername("");
    setPassword("");
  };

  return (
    <div className="content">
      <form className="login-form">
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
        <div className="button-group">
          <button className="button warning" onClick={handleCancel}>
            {" "}
            Cancel{" "}
          </button>
          <button className="button success" onClick={handleLogin}>
            {" "}
            Login{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
