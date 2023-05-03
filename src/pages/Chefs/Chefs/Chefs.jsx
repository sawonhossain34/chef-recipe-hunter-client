import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const Chefs = () => {
    const chef = useLoaderData();
    const {_id,picture,name,years_of_experience,number_of_recipes,likes,view_recipes_button,category_id} = chef;
    return (
        <Card>
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to={`/country/${category_id}`}><Button variant="danger"><FaArrowLeft></FaArrowLeft> Go Back All Chef</Button></Link>
      </Card.Body>
    </Card>
    );
};

export default Chefs;