import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./login/login";
import { LoginData } from "./login/interfaces/LoginData";

function App() {
  const login: LoginData = {
    username: "rituj",
    password: 123455
  };
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
