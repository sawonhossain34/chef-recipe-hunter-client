import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/Authprovider';

const ChefNavber = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .catch(error => console.log(error))
    }
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="secondary" variant="light">
                <Container className='m-5 '>
                    <Navbar.Brand href="#home">Chef And Food House</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto text-decoration-none">
                            <Link  to='/country/0'>Home</Link>
                            <Link to = '/blog'>Blog</Link>
                        </Nav>
                        <Nav>
                            {user ?
                            <>
                            <Image src={user?.photoURL}
                             roundedCircle
                             height="30"
                             width="30"
                              />
                            </>
                              
                            :
                                <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>}

                            {user ? <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
                                <Link to='/login'><Button variant="secondary">Login</Button></Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default ChefNavber;