import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Country from "../pages/Home/Country/Country";
import ChefsLayout from "../layouts/ChefsLayout";
import Chefs from "../pages/Chefs/Chefs/Chefs";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element :<Home></Home>
            },
            {
                path : '/country/:id',
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