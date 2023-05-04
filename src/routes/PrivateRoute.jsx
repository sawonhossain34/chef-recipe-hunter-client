import React, {useContext } from 'react';
import { AuthContext } from '../providers/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation()
// loading spiner
    if(loading){
        return <div className='text-center'><Spinner animation="grow" variant="primary" /></div>
    }
    if(user){
        return children;
    }
    // state set and right state in //
    return <Navigate state={{ from: location }} to='/login' replace></Navigate>


};

export default PrivateRoute;