import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import './Header.scss';

function Header() {
    return(
        <Navbar bg="dark" expand="lg">
           <Container>
               <Navbar.Brand href="#home" className="text-white">Planets</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                   <Nav className="ml-auto">
                       <Nav.Link className="text-white" href="#home">Planets</Nav.Link>
                       <Nav.Link className="text-white" href="#link">Users</Nav.Link>
                   </Nav>
               </Navbar.Collapse>
           </Container>
        </Navbar>
    )
}

export default Header