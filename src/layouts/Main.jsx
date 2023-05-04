import React from 'react';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import { Outlet } from 'react-router-dom';
import ChefNavber from '../pages/Shared/ChefNavber/ChefNavber';
import Banner from '../pages/Home/Banner/Banner';
import Slider from '../pages/Slider/Slider';
import ShowProducts from '../pages/ShowProducts/ShowProducts';
// import ShowProducts from '../pages/Home/ShowProducts/ShowProducts';



const Main = () => {
    return (
        <div>
            <ChefNavber></ChefNavber>
            <Banner></Banner>

            <Container>
     
      <Row>
        <Col lg={3}><LeftNav></LeftNav></Col>
        <Col lg={9}><Outlet></Outlet></Col>
      </Row>
    </Container>
    <Slider></Slider>
    <ShowProducts></ShowProducts>
    
              

              <Footer></Footer>
        </div>
    );
};

export default Main;