import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
// page layout //
const ChefsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
      <Row>
        <Col lg={12}><Outlet></Outlet></Col>
      </Row>
    </Container>
              <Footer></Footer>
        </div>
    );
};

export default ChefsLayout;