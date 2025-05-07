import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import HomeLayout from "../Layout/HomeLayout";
import PayBills from "../Pages/PayBills";
import BillDetails from "../Pages/BillDetails";
import AuthLayout from "../Layout/AuthLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/payBills',
                Component: PayBills,
                loader: () => fetch('/BillsData.json'),

            },
            {
                path: '/payBills/:type',
                element: <PayBills></PayBills>,
                loader: () => fetch('/BillsData.json')
            },
            {
                path: '/billDetails/:id',
                element: <BillDetails></BillDetails>,
                loader: () => fetch('/BillsData.json'),

            }
        ],
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ],
    }
]);

export default router;