import React from "react";
import {Container, Navbar }from 'react-bootstrap'

const Header = () => {
    return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://static.vecteezy.com/system/resources/previews/000/623/284/original/mountain-logo-vector-illustration.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Users CRUD App
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
    )
}

export default Header;
