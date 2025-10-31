import React from "react";
import { Button, Badge } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  return (
    <Button variant="outline-light" className="position-relative">
      <FaShoppingCart />
      <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
        3
      </Badge>
    </Button>
  );
};

export default CartWidget;
