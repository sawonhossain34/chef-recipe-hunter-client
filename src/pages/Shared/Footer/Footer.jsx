import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// footer seation //
const Footer = () => {
    return (
        <div className='bg-dark text-white'>
            <Container>
                <Row className='m-5 p-4'>
                    <Col className='text-decoration-none' lg={3}>
                        <h4 className='pb-2'>Pages</h4>
                        <p>Home</p>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Our Teams</p>
                        <p>Sponsors</p>
                        <p>Contact Inf</p>
                    </Col>
                    <Col lg={3}>
                        <h4 className='pb-2'>Utility Pages</h4>
                        <p>About Us</p>
                        <p>Corporate Profile</p>
                        <p>Our Team</p>
                        <p>Portfolio</p>
                        <p>Portfolio</p>
                    </Col>
                    <Col lg={3}>
                        <h4 className='pb-2'>Quick Connect</h4>
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>Instagram</p>
                        <p>Linkedin</p>
                        <p>Whatsapp</p>

                    </Col>
                    <Col lg={3}>
                    <h4 className='pb-2'>Latest Episodes</h4>
                    <p>25 Best Books For Business Owners And Entrepreneurs You Should Read In 2021</p>
                    <p>Ep 1: How to build a world-class business brand</p>
                    <p>Cras malesuada elit leo, id ultrices felis porttitor convallis</p>

                    </Col>
                </Row>
                <p className='pb-2 text-center'><small>@All rights reserved</small></p>
            </Container>
            
        </div>
    );
};

export default Footer;