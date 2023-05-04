import React from 'react';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
// import RightNav from '../pages/Shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
import ChefNavber from '../pages/Shared/ChefNavber/ChefNavber';
import Banner from '../pages/Home/Banner/Banner';



const Main = () => {
    return (
        <div>
            <ChefNavber></ChefNavber>
            <Banner></Banner>

            <Container>
     
      <Row>
        <Col lg={3}><LeftNav></LeftNav></Col>
        <Col lg={9}><Outlet></Outlet></Col>
        {/* <Col lg={3}><RightNav></RightNav></Col> */}
      </Row>
    </Container>
    
              

              <Footer></Footer>
        </div>
    );
};

export default Main;