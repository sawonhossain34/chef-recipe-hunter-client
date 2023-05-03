import React from 'react';
import ChefNavber from '../pages/Shared/ChefNavber/ChefNavber';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <ChefNavber></ChefNavber>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;