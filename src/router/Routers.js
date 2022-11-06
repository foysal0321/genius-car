import { createBrowserRouter } from "react-router-dom";
import Main from "../lyout/Main";
import Checkout from "../pages/checkout/Checkout";
import Home from '../pages/Home/Home'
import Login from "../pages/login/Login";
import Order from "../pages/orders/Order";
import Signup from "../signup/Signup";
import PrivetRour from "./PrivetRour";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main />,
        children:[
            {
                path:'/',
                element: <Home />
            },
            {
                path:'/login',
                element: <Login/>
            },
            {
                path:'/signup',
                element: <Signup/>
            },
            {
                path:'/checkout/:id',
                element: <PrivetRour> <Checkout/></PrivetRour> ,
                loader: ({params}) => fetch(`https://y-xi-sand.vercel.app/services/${params.id}`)
            },
            {
                path:'/orders',
                element: <PrivetRour><Order/> </PrivetRour> ,
               loader: ()=> fetch(`https://y-xi-sand.vercel.app/orders`)
            },
        ]
    }
])
export default router;