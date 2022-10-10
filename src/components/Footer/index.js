import React from "react";

import {Nav,NavDropdown,Navbar, Container, Button, Row, Col} from "react-bootstrap";

function Footer() {
    return (
      <Navbar id="footer"  collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">About us</Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Contact </Nav.Link  >
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Follow</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Feedback
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
export default Footer;