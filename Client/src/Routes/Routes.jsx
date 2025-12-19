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
    path:"/aboutus/supporters",
    element:<Supporters></Supporters>
},

            // Blog & News
            {
                path: "/blog",
                element: <Blog></Blog>,
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
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/singup",
                element: <SignUp></SignUp>
            }
        ],

    }
])

export default Routes;