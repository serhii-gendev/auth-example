import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../store/store";
import "../assets/css/App.css";

const NavigationBar = () => {
  const { state, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

const handleLogout = (e) => {
  e.preventDefault();
  dispatch({ type: "LOGOUT" });
  navigate("/login");
};

  return (
    <header className="navbar">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {state.isAuthenticated ? (
            <li>
              <Link to="/login" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
