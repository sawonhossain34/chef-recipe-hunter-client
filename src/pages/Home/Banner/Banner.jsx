import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
// Banner seaction add 
const Banner = () => {
    return (
        <div className='mb-4'>
            <Container className='mt-4' style={{
                backgroundImage: `url("https://img.freepik.com/free-psd/fast-food-restaurant-banner-template_23-2148987500.jpg?size=626&ext=jpg&ga=GA1.1.1569261682.1680230869&semt=ais")`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '100vh',
            }}>
                <Card className="text-center" style={{
                    backgroundColor: 'white',
                    opacity: 0.7,
                    position: "relative",
                    bottom: 0
                }}>
                    <Card.Body >
                        <Card.Title>The Perfect Choice For
                            Delicious Fast Food</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default Banner;