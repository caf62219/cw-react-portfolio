import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { Link } from 'react-router-dom';
import {NavLink} from 'react-router-dom';


 export default function NavbarPage() {
  return (
    <Navbar style={{backgroundColor: "#A9DDD6"}} fixed="top" expand="lg"  collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">Chelsea Wagner</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link key= {1} as ={Link} to="/" >About Me</Nav.Link>
            <Nav.Link key= {2} as ={Link} to ="/Portfolio"  >Portfolio</Nav.Link>
            <Nav.Link key= {3} as= {Link} to="/Contact"  >Contact</Nav.Link>
            <Nav.Link key= {4} as = {Link} to="/Resume" >Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )

}

