import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import HomeLayout from "../Layout/HomeLayout";
import PayBills from "../Pages/PayBills";
import BillDetails from "../Pages/BillDetails";

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
]);

export default router;