import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/Authprovider';
import Footer from '../../Shared/Footer/Footer';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Register = () => {
    const {createUser,signInGoogle,signInGithub} = useContext(AuthContext);
    // const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location);
    const from = location?.state?.from?.pathname || '/country/0'


    const hendleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // if(!/^[a-zA-Z0-9_]*$/.test(password)){
        //     setError('please cheack password');
        //     return;
        // }


        createUser(email,password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
            navigate(from, { replace: true }); 
        })
        .catch(error => {
            console.log(error);
            
        })
    }
    const handleGoogleSignIn =() => {
        signInGoogle()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, { replace: true });

        })
        .catch(error=> {
            console.log(error);
        })
    }

    const handleGithubSignIn = () => {
        signInGithub()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, { replace: true });
        })
        .catch(error=> {
            console.log(error);
        })
    }
// register section //
    return (
        <>
        <Container className='w-50 mx-auto bg-secondary rounded border mt-5 m-4 p-5'>
            <h3 className='text-center text-info'>Sign Up</h3>

            <Form onSubmit={hendleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password"  required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name='accept' label="Accept terms and condition" />
                </Form.Group>
                <Button variant="info" type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className='text-white'>
                    AlReady Have an Account?<Link className='text-info' to='/login'>Login</Link>
                </Form.Text>
                <Form.Text className='text-success'>

                </Form.Text>
                <Form.Text className='text-danger'>
                    
                </Form.Text>
                <div>
                    <h5 className='mt-4 '>Another Login with</h5>
                    <Button onClick={handleGoogleSignIn} className='mb-2 px-4 py-1 text-white w-50' variant="outline-info"> <FaGoogle /> Login with Google</Button> <br />
                    <Button onClick={handleGithubSignIn} className=' px-4 py-1 w-50 text-white' variant="outline-info "> <FaGithub /> Login with Github</Button>
                </div>
            </Form>
        </Container>
        <Footer></Footer>
        </>
    );
};

export default Register;