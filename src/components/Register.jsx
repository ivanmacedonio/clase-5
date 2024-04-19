import React, { useState } from "react";

export const Register = () => {
  const [password, setPassword] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  //register logic
  function handleChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (password !== "") {
      localStorage.setItem("password", password);
    }
  }

  //login logic
  function handleLoginChange(e) {
    setPasswordLogin(e.target.value);
  }

  function handleSubmitLogin(e) {
    e.preventDefault();
    const passwordLocalstorage = localStorage.getItem("password");

    if (passwordLogin !== "" && passwordLocalstorage !== "") {
      if (passwordLogin === passwordLocalstorage) {
        alert("Ingresaste");
      } else {
        alert("Rechazado");
      }
    } else {
      alert("empty passwords");
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmitLogin}>
        <aside>
          <h2>Aca te logueas</h2>
          <input
            type="text"
            placeholder="Password"
            onChange={handleLoginChange}
          />
          <button type="submit">Login</button>
        </aside>
      </form>

      <form onSubmit={handleSubmit}>
        <aside>
          <h2>Aca te Registras</h2>
          <input type="text" placeholder="Password" onChange={handleChange} />
        </aside>
        <button type="submit">Create password</button>
      </form>
    </div>
  );
};
