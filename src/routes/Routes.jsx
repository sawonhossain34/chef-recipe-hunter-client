import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Country from "../pages/Home/Country/Country";
import ChefsLayout from "../layouts/ChefsLayout";
import Chefs from "../pages/Chefs/Chefs/Chefs";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element : <LoginLayout></LoginLayout>,
        children : [
            {
                path : '/',
                // element : <Navigate to= '/category/0'></Navigate>
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
        // path : 'category',
        path : 'country',
        element : <Main></Main>,
        children : [
            {
                path : ':id',
                element : <Country></Country>,
                loader : ({params}) => fetch(`http://localhost:5000/countries/${params.id}`)
            }
        ]
    },
    {
        path : 'chefs',
        element :<ChefsLayout></ChefsLayout>,
        children : [
            {
                path : ':id',
                element : <Chefs></Chefs>,
                loader : ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
            }
        ]
    }
])
export default router;