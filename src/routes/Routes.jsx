import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Country from "../pages/Home/Country/Country";
import ChefsLayout from "../layouts/ChefsLayout";
import Chefs from "../pages/Chefs/Chefs/Chefs";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../layouts/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element : <LoginLayout></LoginLayout>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                element : <Navigate to='/country/0'></Navigate>
            },
            {
                path : 'login',
                element : <Login></Login>
            },
            {
                path : 'register',
                element : <Register></Register>
            }
        ]
    },
    {
        path : 'country',
        element : <Main></Main>,
        children : [
            {
                path : ':id',
                element : <Country></Country>,
                loader : ({params}) => fetch(`https://chef-and-food-house-server-sawonhossain34.vercel.app/countries/${params.id}`)
            }
        ]
    },
    {
        path : 'chefs',
        element :<ChefsLayout></ChefsLayout>,
        children : [
            {
                path : ':id',
                element : <PrivateRoute><Chefs></Chefs></PrivateRoute>,
                loader : ({params}) => fetch(`https://chef-and-food-house-server-sawonhossain34.vercel.app/chefs/${params.id}`)
            }
        ]
    }  
])
export default router;