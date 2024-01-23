import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import icon from '../images/icon.svg'

const  CustomNavbar =() => {
  return (
    
    <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
      <div className="container-fluid">
        <Navbar.Brand> <Link to='/Landing'></Link>
          <img id="logo" src={icon} alt="Loading" width="100" height="70" />
          <br/>
          <h5 id="head" className="text-light">
           
          </h5>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ml-auto" id="list">
            <Nav.Item>
              <Link to="/Landing" className="nav-link" aria-current="page">
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/Undp" className="nav-link">
                Goals
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/Causes" className="nav-link">
                Causes
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/Weather" className="nav-link" aria-current="page">
                Weather
              </Link>
            </Nav.Item>
            <NavDropdown title="UNDP" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="https://www.undp.org/">undp web</NavDropdown.Item>
              <NavDropdown.Item href="https://www.undp.org/procurement">procurement</NavDropdown.Item>
              <NavDropdown.Item href="https://www.undp.org/sustainable-development-goals">SDG</NavDropdown.Item>
              <NavDropdown.Item href="https://www.unicef.org/">Unicef</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default CustomNavbar;