import React from 'react';
// import ChefNavber from '../pages/Shared/ChefNavber/ChefNavber';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';

const LoginLayout = () => {
    return (
        <div>
            {/* <ChefNavber></ChefNavber> */}
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;