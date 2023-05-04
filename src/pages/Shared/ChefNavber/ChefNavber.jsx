import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/Authprovider';

const ChefNavber = () => {
    const { user, logOut } = useContext(AuthContext);
// log out function
    const handleLogOut = () => {
        logOut()
            .catch(error => console.log(error))
    }
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="secondary" variant="light">
                <Container className='m-5 '>
                    <Navbar.Brand className='text-info' href="#home"><h3>Chef And Food House</h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto ">
                            <Link className='text-info text-decoration-none '  to='/country/0'>Home</Link>
                            <Link  className='text-info text-decoration-none ms-3' to = '/blog'>Blog</Link>
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

                            {user ? <Button className='bg-info ms-3' onClick={handleLogOut} variant="secondary">Logout</Button> :
                                <Link to='/login'><Button className='bg-info ms-3' variant="secondary">Login</Button></Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default ChefNavber;