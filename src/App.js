import React from "react";
import StateProvider from "./store/store";
import Login from "./components/auth";
import "./assets/css/App.css"
function App() {
  return (
    <StateProvider>
      <Login />
    </StateProvider>
  );
}

export default App;
