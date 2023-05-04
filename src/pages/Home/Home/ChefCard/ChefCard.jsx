import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// home page card // 
const ChefCard = ({ chef }) => {
  const { picture, _id, name, years_of_experience, number_of_publications, number_of_recipes, likes } = chef;
  return (<>
    <Card className=' w-50 ' >
      <Card.Img variant="top" src={picture} />
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

        <Link  to={`/chefs/${_id}`}><Button  variant="primary">View Recipe Button</Button></Link>
      </Card.Body>
    </Card>
  </>
  );
};

export default ChefCard;