import React, { useState } from "react";
import "../styles/Login.css";
export const Login = ({ setIsLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "ivan" && password === "123") {
      setIsLogin(true);
    } else {
      alert("Credenciales incorrectas!");
    }
  };

  const handleChangeUser = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="login-container">
      <h1>Login page</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            onChange={handleChangeUser}
            placeholder="Username"
          />
          <input
            type="text"
            onChange={handleChangePassword}
            placeholder="Password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
