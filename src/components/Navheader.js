import React from 'react'
import {Container,NavDropdown,Navbar,Nav} from 'react-bootstrap'
function Navheader() {
  return (
    <Navbar className='mb-3' collapseOnSelect expand="lg" bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">GATSBY</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
     
      <Nav className='ms-auto'> 
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/aboutus">About Us</Nav.Link>
        <Nav.Link  eventKey={2} href="/bmi-calculator">
          Services
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navheader