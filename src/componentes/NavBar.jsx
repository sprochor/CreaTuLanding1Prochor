import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import CartWidget from "./CartWidget";
import logo from '../assets/Logo Bodegas.png';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src={logo} 
            width="35" 
            height="35"
            className="d-inline-block align-top me-3" 
            alt="Logo El Camino de las Bodegas"
          />
          El Camino de las Bodegas
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Inicio</Nav.Link>
            <Nav.Link href="#">Bodegas</Nav.Link>
            <Nav.Link href="#">Vinos</Nav.Link>
            <Nav.Link href="#">Contacto</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
