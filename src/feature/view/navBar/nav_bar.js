import React from 'react';
//import logo from 'src\logo.svg';
import {Navbar,Nav,NavDropdown,} from 'react-bootstrap'
const Navs= ()=>{
    return(
       <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">
    <img src='./../../../first_ui_assets/learn.png' alt='logo'/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
    );
}
export default Navs;