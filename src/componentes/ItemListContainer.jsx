import React from "react";
import { Container } from "react-bootstrap";
import './ItemListContainer.css'

const ItemListContainer = ({ bienvenida, subtitulo }) => {
  return (
    <Container fluid
      className="text-center"
      style={{
        marginTop: "100px",
        display: "block",        
        position: "relative",    
      }}
    >
      <h1
        className="color-vino fw-bold mb-3"
        style={{ marginTop: "0", paddingTop: "0" }}
      >
        {bienvenida}
      </h1>
      <p className="text-muted m-0 ">
        {subtitulo}
      </p>
    </Container>
  );
};

export default ItemListContainer;


