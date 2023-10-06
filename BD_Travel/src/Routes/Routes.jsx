
import { createBrowserRouter } from "react-router-dom";

import Hotels from "../components/Hotels/Hotels";
import Restaurants from "../components/Restaurents/Restaurents";
import ThinksToDo from "../components/ThinksToDo/ThinksToDo";


import Layout from "../Layout/Layout";
import Contact from "../pages/Contact";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import { Signup } from "../pages/Signup";
import Cards from "../components/Cards/Cards";
import { Home } from "lucide-react";
import Blog from "../pages/Blog"
import VacationRentals from "../components/VacationRentals/VacationRentals";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        {
            path:"/",
            element: <LandingPage />,

        },
        {
            path: "/",
            element: <Layout />,
        
        },
        {
            path:"/Signup",
            element: <Signup />
        },
        {
            path:"/Contact",
            element: <Contact />

        },
        {
            path:"/Blog",
            element: <Blog />
        },
        {
            path:"/Login",
            element: <Login />
        },
        {
            path:"/Cards",
            element: <Cards />,
            
        },
        {
            path:"/Hotels",
            element:<Hotels/>,
            
        }, 
        {
            path:"/ThinksToDo",
            element:<ThinksToDo/>
        }, 
        {
            path:"/Restaurants",
           element:<Restaurants/>
        }, 
        {
            path:"/Vacations",
           element:<VacationRentals/>
        }, 
        
        
      
      
       
       


      ]},
   


  ]);