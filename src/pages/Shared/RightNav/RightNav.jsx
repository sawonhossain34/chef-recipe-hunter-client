import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const RightNav = () => {
    return (
        <div>
            <h4 className='mt-4'>Login with</h4>
            <Button className='mb-2 px-4 py-1' variant="outline-primary"> <FaGoogle /> Login with Google</Button> <br />
            <Button className=' px-4 py-1' variant="outline-secondary"> <FaGithub /> Login with Github</Button>
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
        </div>
    );
};

export default RightNav;