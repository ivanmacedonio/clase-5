import axios from "axios";
import React, { useEffect } from "react";

export const ListaProductos = () => {
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    // ==> almacenar response.data en un useState
    // ==> Mostrar la informacion  con un .map() en el html
    // ==> Le den estilos!
  }
  return <div>ListaProductos</div>;
};
