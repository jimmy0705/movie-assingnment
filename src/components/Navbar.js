import React from 'react';
import {Link} from 'react-router-dom';

import { Container,Navbar,Nav} from 'react-bootstrap';
import './common.css'

function Header(props) {

  

  return (
    <div className="navbar-area" >



<Navbar collapseOnSelect expand="lg" bg="light" fixed="top" >
<Container>
<Link to="/" className="home-link">Home </Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
   
    <Nav className="ml-auto">
      {/* <Nav.Link href="#deets">Favourites</Nav.Link> */}
      <Link to="/favourite" className="favourite-link"> Favourites </Link>
   
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
 
  

   
    </div>
  );
}

export default Header;
