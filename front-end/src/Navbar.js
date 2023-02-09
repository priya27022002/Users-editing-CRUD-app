import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function navbar() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Users</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/createForm">CreateUser</Nav.Link>
            <Nav.Link href="/updateform">UpdateUser</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default navbar
