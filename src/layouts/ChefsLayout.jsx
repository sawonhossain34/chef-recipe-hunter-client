import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import RightNav from '../pages/Shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';

const ChefsLayout = () => {
    return (
        <div>
            <Header></Header>

            <Container>
      <Row>
        <Col lg={8}><Outlet></Outlet></Col>
        <Col lg={4}><RightNav></RightNav></Col>
      </Row>
    </Container>
              
              <Footer></Footer>
        </div>
    );
};

export default ChefsLayout;