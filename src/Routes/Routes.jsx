import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import HomeLayout from "../Layout/HomeLayout";
import PayBills from "../Pages/PayBills";
import BillDetails from "../Pages/BillDetails";
import AuthLayout from "../Layout/AuthLayout";
import Profile from "../Pages/Profile";
import UpdateProfile from "../Pages/UpdateProfile";
import Loading from "../Components/Loading";
import PrivateProvider from "../Context/PrivateProvider";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '',
                element: <Home></Home>
            },
            {
                path: '/payBills',
                element: <PrivateProvider><PayBills></PayBills></PrivateProvider>,
                loader: () => fetch('/BillsData.json'),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/billDetails/:id',
                element: <PrivateProvider><BillDetails></BillDetails></PrivateProvider>,
                loader: () => fetch('/BillsData.json'),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/myProfile',
                element: <PrivateProvider><Profile></Profile></PrivateProvider>
            },
            {
                path: '/updateProfile',
                element: <PrivateProvider><UpdateProfile></UpdateProfile></PrivateProvider>
            }
        ],
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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