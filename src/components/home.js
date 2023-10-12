import React, { useContext } from "react";
import AuthContext from "../store/store";
import "../assets/css/App.css";

const Home = () => {
  const { state } = useContext(AuthContext);

  return (
    <div className="content">
      {!state.isAuthenticated ? (
        <h1 className="notAuthenticated">Please login first</h1>
      ) : (
        <h1 className="authenticated">Hi Marcus</h1>
      )}
    </div>
  );
};

export default Home;
