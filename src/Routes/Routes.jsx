import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import HomeLayout from "../Layout/HomeLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                index: true,
                Component: Home
            },
        ],
    },
]);

export default router;