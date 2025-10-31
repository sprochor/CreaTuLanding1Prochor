import React from "react";
import { Container } from "react-bootstrap";

const ItemListContainer = ({ greeting }) => {
  return (
    <Container className="text-center mt-5">
      <h2 className="text-secondary">{greeting}</h2>
    </Container>
  );
};

export default ItemListContainer;
