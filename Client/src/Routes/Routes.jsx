import { createBrowserRouter } from "react-router-dom";

import Error from "../Pages/Error/Error";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import InformalSatelment from "../Pages/Activities/InformalSatelment/InformalSatelment";
import SafeMaterials from "../Pages/Activities/SafeMaterials/SafeMaterials";
import Workshops from "../Pages/Activities/Workshops/Workshops";
import DemoHouse from "../Pages/Activities/DemoHouse/DemoHouse";
import TechnicalSupport from "../Pages/Activities/TechnicalSupport/TechnicalSupport";
import TreePlanting from "../Pages/Activities/TreePlanting/TreePlanting";
import SavingsGroup from "../Pages/Activities/SavingsGroup/SavingsGroup";
import Background from "../Pages/AboutUs/Background/Background";
import People from "../Pages/AboutUs/People/People";
import Team from "../Pages/AboutUs/Team/Team";
import GoalsVision from "../Pages/AboutUs/GoalsVision/GoalsVision";
import Report from "../Pages/BlogAndReport/Report/Report";
import Supporters from "../Pages/AboutUs/Supporters/Supporters";
import Blog from "../Pages/BlogAndReport/Blog/Blog";
import News from "../Pages/BlogAndReport/News/News";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Auth/Login/Login";
import SignUp from "../Pages/Auth/SignUp/SingUp";
import LatestWork from "../Pages/Home/LatestWork";
import SingleWork from "../Pages/SingleWork/SingleWork";
import PrototypeDesign from "../Pages/Activities/PrototypeDesign/PrototypeDesign";
import BlogDetails from "../Pages/BlogAndReport/Blog/BlogDetails";
import AdminRoute from "./AdminRoute";
import Admin from "../Pages/Admin/Admin";


/* Load all blogs */
const blogsLoader = async () => {
    const res = await fetch("/blog.json");
    if (!res.ok) {
        throw new Error("Failed to load blogs");
    }
    return res.json();
};

/* Load single blog */
const blogDetailsLoader = async ({ params }) => {
    const res = await fetch("/blog.json");
    const blogs = await res.json();
    const blog = blogs.find((b) => b.id === params.id);

    if (!blog) {
        throw new Response("Blog Not Found", { status: 404 });
    }

    return blog;
};


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },

            // Activities
            {
                path: "/activities/informal-satelment",
                element: <InformalSatelment></InformalSatelment>,
            },
            {
                path: "/activities/safe-materials",
                element: <SafeMaterials></SafeMaterials>,
            },
            {
                path: "/activities/workshops",
                element: <Workshops></Workshops>,
            },
            {
                path: "/activities/demo-house",
                element: <DemoHouse></DemoHouse>,
            },
            {
                path: "/activities/technical-support",
                element: <TechnicalSupport></TechnicalSupport>,
            },
            {
                path: "/activities/tree-planting",
                element: <TreePlanting></TreePlanting>,
            },
            {
                path: "/activities/savings-groups",
                element: <SavingsGroup></SavingsGroup>,
            },
            {
                path: "/activities/prototype&design",
                element: <PrototypeDesign></PrototypeDesign>
            },
            {
                path: "/activities/latestwork",
                element: <AdminRoute><LatestWork></LatestWork></AdminRoute>
            },
            {
                path: "/latestwork/:id",
                element: <SingleWork />,
                // The loader receives 'params' automatically from the URL
                loader: async ({ params }) => {
                    const res = await fetch("/latestWork.json");
                    const data = await res.json();

                    // We use .find() to get the specific object matching the ID from the URL
                    const singleData = data.find(work => work.id === params.id);

                    return singleData;
                }
            },

            // About Us
            {
                path: "/aboutus/background",
                element: <Background></Background>,
            },
            {
                path: "/aboutus/people",
                element: <People></People>,
            },
            {
                path: "/aboutus/team",
                element: <Team></Team>,
            },
            {
                path: "/aboutus/goals-vision",
                element: <GoalsVision></GoalsVision>,
            },
            {
                path: "/aboutus/supporters",
                element: <Supporters></Supporters>
            },

            // Blog & News
            {
                path: "/blog",
                element: <Blog />,
                loader: blogsLoader,
            },
            {
                path: "/blog/:id",
                element: <BlogDetails />,
                loader: blogDetailsLoader,
            },
            {
                path: "/news",
                element: <News></News>,
            },
            {
                path: "/reports",
                element: <Report></Report>,
            },
            // Contact
            {
                path: "/contact",
                element: <Contact></Contact>,
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },

            {
                path: '/admin',
                element: (
                    <AdminRoute>
                        <Admin></Admin>
                    </AdminRoute>
                ),
                // loader: async () => {
                //     const [workerRes, bookingRes] = await Promise.all([
                //         fetch(''),
                //         fetch(''),
                //     ]);

                //     if (!workerRes.ok || !bookingRes.ok) {
                //         throw new Error('Failed to load admin data');
                //     }

                //     const [workers, bookings] = await Promise.all([
                //         workerRes.json(),
                //         bookingRes.json(),
                //     ]);

                //     return { workers, bookings };
                // }

            }
        ],

    }
])

export default Routes;