import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/Authprovider';

const ChefNavber = () => {
    const {user} = useContext(AuthContext);
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand  href="#home">Chef And Food House</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features"><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
          </Nav>
          <Nav>
            {user && <Nav.Link href="#deets"><FaUserCircle style={{fontSize:'2rem'}}></FaUserCircle></Nav.Link>}
            <Nav.Link eventKey={2} href="#memes">
            {user ? <Button variant="secondary">Logout</Button>:
            <Link to='/login'><Button variant="secondary">Login</Button></Link>
            }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>
    );
};

export default ChefNavber;