import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "react-router-dom/Link";
import "./index.css";

class MyNavBar extends React.Component {
  render() {
    return (

      <Navbar fixed="top" bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">Simon Alexander Gohl</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/about-me">about_me</Nav.Link>
            <Nav.Link as={Link} to="/experience">experience</Nav.Link>
            <Nav.Link as={Link} to="/projects">projects</Nav.Link>
            <Nav.Link as={Link} to="/education">education</Nav.Link>
            <Nav.Link as={Link} to="/education">tools</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MyNavBar;
