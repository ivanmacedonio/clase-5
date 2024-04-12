import React, { useState } from "react";
import { Login } from "./Login";
function Counter() {
  const [contador, setContador] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const sumar = () => {
    setContador(contador + 1);
  };

  const reiniciar = () => {
    setContador(0);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContador(parseInt(inputValue));
  };

  return (
    <div>
      {isLogin ? (
        <div className="counter-cnt">
          <h1>Contador</h1>
          <h2>{contador}</h2>
          <button onClick={sumar}>Sumar</button>
          <button onClick={reiniciar}>Reiniciar</button>
          <button onClick={restar}>Restar</button>
          <form onSubmit={handleSubmit}>
            <input type="text" name="" id="" onChange={handleChange} />
            <button>ingrese num</button>
          </form>
        </div>
      ) : (
        <Login setIsLogin={setIsLogin}></Login>
      )}
    </div>
  );
}

export default Counter;
