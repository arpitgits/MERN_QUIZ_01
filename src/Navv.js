import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom'


export default function Navv(){
    return(
        <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto  my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/contact">Feedback</Link>
              <Link className="nav-link" to="/feedback">Contact</Link>            
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}