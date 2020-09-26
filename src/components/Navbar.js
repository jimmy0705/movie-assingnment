import React,{useState} from 'react';


import { Button,Container,Navbar,Nav} from 'react-bootstrap';
import './common.css'

function Header(props) {

  

  return (
    <div className="navbar-area" >



<Navbar collapseOnSelect expand="lg" bg="light" fixed="top" >
<Container>
  <Navbar.Brand href="#home">Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
   
    <Nav className="ml-auto">
      <Nav.Link href="#deets">Favourites</Nav.Link>
   
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
 
  

   
    </div>
  );
}

export default Header;
