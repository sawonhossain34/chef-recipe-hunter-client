import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// home page card // 
const ChefCard = ({ chef }) => {
  const { picture, _id, name, years_of_experience, number_of_publications, number_of_recipes, likes } = chef;
  return (
    <div className='col-lg-4 mb-2'>
      <Card className=' '   >
        <Card.Img variant="top" src={picture} style={{height:'50%'}}/>
        <Card.Body className='text-bold'>
          <Card.Title>{name}</Card.Title>
          <Card.Text >years_of_experience :
            {years_of_experience}
          </Card.Text>
          <Card.Text> number_of_recipes :
            {number_of_recipes}
          </Card.Text>
          <Card.Text> Like :
            {likes}
          </Card.Text>

          <Link to={`/chefs/${_id}`}><Button style={{backgroundColor:'rgb(255, 99, 71)'}} variant="primary">View Recipe Button</Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ChefCard;