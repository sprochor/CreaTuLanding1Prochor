import React from "react";
import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer bienvenida="¡Bienvenido a El Camino de las Bodegas!" />
      <ItemListContainer subtitulo="Explorá nuestras bodegas y descubrí nuevos vinos 🍷" />
    </>
  );
}

export default App;
