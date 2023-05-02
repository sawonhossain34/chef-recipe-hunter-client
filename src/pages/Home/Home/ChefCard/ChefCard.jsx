import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ChefCard = ({chef}) => {
    const {_id,picture,name,years_of_experience,number_of_recipes,likes,view_recipes_button} = chef;
    return (
        <Card >
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Show Details</Button>
      </Card.Body>
    </Card>
    );
};

export default ChefCard;