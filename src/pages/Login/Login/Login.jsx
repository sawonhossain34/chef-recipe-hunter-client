import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/Authprovider';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import Footer from '../../Shared/Footer/Footer';

// login function //
const Login = () => {
    const { signInUser,signInGoogle,signInGithub } = useContext(AuthContext);
 // use hook react // 
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location);
    const from = location?.state?.from?.pathname || '/country/0'

    // const [error, setError] = useState('');


    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true }); 
                form.reset('');
            })
            .catch(error => {
                console.log(error);
                // setError("email and password don't mass ");
            })
    }
    const handleGoogleSignIn =() => {
        signInGoogle()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, { replace: true });
        })
        .catch(error=> console.log(error))
    }

    const handleGithubSignIn = () => {
        signInGithub()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, { replace: true });
        })
        .catch(error=> console.log(error))
    }

    return (
        <>
        <Container className='w-25 mx-auto bg-secondary rounded border mt-5  p-5'>
            <h4 className='text-center text-info'>Login</h4>
            {/* <p className='text-danger'>{error}</p> */}
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control  type="password" name="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="info" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className='text-white'>
                    Don't Have an Account?<Link className='text-info' to='/register'>Register</Link>
                </Form.Text>
                <Form.Text className='text-success'>

                </Form.Text>
                <Form.Text className='text-danger'>

                </Form.Text>
                <div>
                    <h5 className='mt-4'>Another Login with</h5>
                    <Button onClick={handleGoogleSignIn} className='mb-2 px-4 py-1 text-white' variant="outline-info"> <FaGoogle /> Login with Google</Button> <br />
                    <Button onClick={handleGithubSignIn} className=' px-4 py-1  text-white' variant="outline-info "> <FaGithub /> Login with Github</Button>
                </div>
            </Form>
        </Container>
        <Footer></Footer>
        </>
        
    );
};

export default Login;