import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import spicy from "../../assets/istockphoto-579767430-612x612.jpg";

const ShowProducts = () => {
    return (
        <div className='bg-danger rounded'>
            <Container>
                <Row>
                    <Col lg={6} className='text-center pt-5 text-white'>
                        <h4 className='text-center '>Spicy Chicken Curry</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iste commodi aliquam exercitationem reiciendis provident?</p>
                    </Col>
                    <Col lg={6} className=''>
                    <img src={spicy} alt="spicy chicken" />
                    </Col>
                </Row>

            </Container>
            </div>
    );
};

export default ShowProducts;