import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import ChefNavber from '../Shared/ChefNavber/ChefNavber';
import Footer from '../Shared/Footer/Footer';

const Blog = () => {
    return (
       <>
       <ChefNavber></ChefNavber>
        <Container className='mt-5'>
            <h3 className='text-center'>Blog Page</h3>
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>1. Tell us the differences between uncontrolled and controlled components.</Accordion.Header>
        <Accordion.Body>
        The text input has the value attribute set as the components state text. This is very important so that the input component's value will always be in sync with the components state text s value.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>2. How to validate React props using PropTypes
</Accordion.Header>
        <Accordion.Body>
        With React props, you can send data to a component when you call on that component, including numbers, strings, functions, objects, and arrays. If you have multiple components, you can pass data from one component to another.

To pass props between components, you can add them when the component is called, just like you would pass arguments when calling on a regular JavaScript function.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>3. Tell us the difference between nodejs and express js.
</Accordion.Header>
        <Accordion.Body>
        To know the difference between ExpressJS vs NodeJS, we must first analyze each separately. NodeJS is open-source, cross-platform JavaScript code that runs on servers. It uses an asynchronous event-driven model and is designed to build scalable network applications. It’s built on Google Chrome’s V8 engine, which makes it fast and efficient to develop apps.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>4. What is a custom hook, and why will you create a custom hook?
</Accordion.Header>
        <Accordion.Body>
        Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Container>
        <Footer></Footer>
       </>
    );
};

export default Blog;