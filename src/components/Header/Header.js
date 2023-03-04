import React from 'react';
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
 
    <Navbar expand="lg" variant="light" bg="primary">
      <Container>
        <Navbar.Brand href="#" className='text-white'>Cat Clicker App</Navbar.Brand>
      </Container>
    </Navbar>

  );
};

export default Header;