import { createBrowserRouter } from "react-router-dom";
import Home from "../containers/Home";
import Register from "../containers/Register";
import Login from "../containers/Login";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: '/login',
        element: <Login/>
    }
]);