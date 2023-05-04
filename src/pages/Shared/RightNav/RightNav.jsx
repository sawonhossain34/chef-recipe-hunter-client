import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const RightNav = () => {
    return (
        <div>
                <hr className='mt-4' />
                <h4 className='mt-5'>Find on us</h4>
                <ListGroup className='gap-3 bg-dark'>
                    <ListGroup.Item> <FaFacebook className='text-primary ' /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter className='text-primary ' />Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram className='text-primary ' />Instagram</ListGroup.Item>
                    <ListGroup.Item><FaLinkedin className='text-primary ' />Linkedin</ListGroup.Item>
                    <ListGroup.Item><FaWhatsapp className='text-primary ' />Whatsapp</ListGroup.Item>
                </ListGroup>
        </div>
    );
};

export default RightNav;