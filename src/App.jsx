import React from "react";
import ItemListContainer from "./componentes/ItemListContainer.jsx";
import './app.css';
import NavBar from "./componentes/navbar.jsx";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer
        bienvenida="¡Bienvenido a El Camino de las Bodegas!"
        subtitulo="Explorá nuestras bodegas y descubrí nuevos vinos 🍷"
      />
    </>
  );
}

export default App;


