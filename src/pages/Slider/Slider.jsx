import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const Slider = () => {
    return (
        <Container className='mt-5 mb-5'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{
                            backgroundImage: `url("https://media.istockphoto.com/id/647743402/photo/mini-hamburgers.jpg?s=612x612&w=0&k=20&c=3UIdbqZAzyDjiynDR8vtxPA-vvQYbE_ngdWLjKaOiNI=")`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            width: '100vw',
                            height: '100vh',
                            // backgroundColor: 'white',
                            // opacity: 0.9
                        }}
                         alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Berger</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{
                            backgroundImage: `url("https://media.istockphoto.com/id/1070730232/photo/homemade-cheeseburger-sliders-with-tomato.jpg?s=612x612&w=0&k=20&c=qq2PY83lb8KqomJPYJ97zcni7j44Phh30mY5Vx9cnXw=")`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            width: '100vw',
                            height: '100vh',
                            // backgroundColor: 'white',
                            // opacity: 0.9
                        }}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Berger</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{
                            backgroundImage: `url("https://media.istockphoto.com/id/642828298/photo/sliders-with-veggie-tray.jpg?s=612x612&w=0&k=20&c=pnyX0lSf6athUfd-WS8CNxRD496Zre9sobVZUp-RzPk=")`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            width: '100vw',
                            height: '100vh',
                            // backgroundColor: 'white',
                            // opacity: 0.9
                        }}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Berger</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Slider;