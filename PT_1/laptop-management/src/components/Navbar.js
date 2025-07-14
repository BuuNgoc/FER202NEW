// components/Navbar.js
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand as={Link} to="/">Laptop Manager</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Login</Nav.Link>
        <Nav.Link as={Link} to="/laptops">Laptops</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default NavbarComponent;