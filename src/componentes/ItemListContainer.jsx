import React from "react";
import { Container } from "react-bootstrap";

const ItemListContainer = ({ bienvenida, subtitulo }) => {
  return (
    <Container fluid>
      <h1
        className="text-center fw-bold color-vino"
      >
        {bienvenida}
      </h1>
      <p className="text-center">
        {subtitulo}
      </p>
    </Container>
  );
};

export default ItemListContainer;


