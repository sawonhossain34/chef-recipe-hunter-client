import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
//chef recipe details //
const Chefs = () => {
    const chef = useLoaderData();
    const {_id,picture,name,years_of_experience,number_of_recipes,likes,view_recipes_button,category_id,cook_details} = chef;
    return (
    <Container fluid className="px-5 py-3">
      <Row className="align-items-center mb-3">
        <Col md={3}>
          <Image src={picture} roundedCircle fluid />
        </Col>
        <Col md={9}>
          <h2 className="mb-0">{name}</h2>
          <p className="text-muted mb-0">year of experience {years_of_experience}</p>
        
          <Rating style={{ maxWidth: 100 }} readOnly />{cook_details?.rating}

        </Col>
        <Link className='text-center' to={`/country/${category_id}`}><Button variant="danger"><FaArrowLeft></FaArrowLeft> Go Back All Chef</Button></Link>
      </Row>
      <h4 className="text-center mb-4">{name} Recipes</h4>
      <Row>
        <Col md={4} className="mb-3">
          <Card className='bg-secondary p-3' >
          <h2 className="mb-0">{cook_details?.recipeName}</h2>
            <Card.Body>
              <Card.Text>
              {cook_details?.ingredients}
              </Card.Text>
              <Button variant="info">Favorite{cook_details?.favorite}</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card className='bg-secondary  p-3'>
          <h2 className="mb-0">{cook_details?.recipeName}</h2>
            <Card.Body>
              <Card.Text>
              {cook_details?.ingredients}
              </Card.Text>
              <Button variant="info">Favorite{cook_details?.favorite}</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card className='bg-secondary  p-3'> 
          <h2 className="mb-0">{cook_details?.recipeName}</h2>
            <Card.Body>
              <Card.Text>
                {cook_details?.ingredients}
              </Card.Text>
              <Button variant="info" >Favorite{cook_details?.favorite}</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    );
};

export default Chefs;