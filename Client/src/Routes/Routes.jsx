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
import axios from "axios";


/* Load all blogs */
export const blogsLoader = async ({ params }) => {
  // We pass page via params or default to 1
  const page = params?.page || 1;
  const response = await axios.get(`https://safebangladesh-server.vercel.app/blogs?page=${page}&limit=9`,{withCredentials:true});
  return response.data;
};


/* Load single blog */
export const blogDetailsLoader = async ({ params }) => {
    try {
        const singleBlog = await axios.get(`https://safebangladesh-server.vercel.app/blogs/${params.id}`,{withCredentials:true})
        return singleBlog.data;
    }
    catch (error) {
        console.error("somthing is wrong", error);
    }
};

/* Load all reports */
export const reportsLoader = async () => {
  try {
    const response = await axios.get(
      `https://safebangladesh-server.vercel.app/reports`,{withCredentials:true});
    return response.data;
  } catch (error) {
    console.error("Error fetching reports:", error);
    return [];
  }
};


//all latest work
export const latestWorkLoader = async () => {
  try {
    const response = await axios.get("https://safebangladesh-server.vercel.app/latestwork",{withCredentials:true});
    return response.data;
  } catch (error) {
    console.error("something is wrong", error);
    return []; // <-- fallback to empty array
  }
};

//single work
export const singleLatestWorkLoader = async ({ params }) => {
  const { id } = params;

  try {
    const response = await axios.get(`https://safebangladesh-server.vercel.app/latestwork/${id}`,{withCredentials:true});
    return response.data; // returns the single work object
  } catch (error) {
    console.error("Error fetching single work:", error);
    throw new Error(
      error.response?.data?.message || "Failed to fetch single work"
    );
  }
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
                path: "/activities/prototype",
                element: <PrototypeDesign></PrototypeDesign>
            },
            {
                path: "/latestwork/:id",
                element: <SingleWork />,
                loader: singleLatestWorkLoader,
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
                loader: reportsLoader,
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
            }
        ],

    }
])

export default Routes;