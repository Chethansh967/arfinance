import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Login from "../pages/auth/Login.jsx";
import AuthLayout from "../layouts/AuthLayout.jsx";
import AppLayout from "../layouts/AppLayout.jsx"
import AuthSigUp from "../pages/auth/AuthSigUp.jsx";
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));

export const router=createBrowserRouter([

     {
         element:<AuthLayout/>,
          children:[
              {path:'/',element:<Login/>},
              {path:'/signup',element:<AuthSigUp/>}
          ]
     },
    {
        //i have to use the ProtectedRoute to check the token based access
         element:<AppLayout/>,
         children:[
             {path:'/dashboard',element:<AppLayout/>},
             {path:'/employee',element:<Dashboard/>},
             {path:'/employee/:id'}
        ]
    }



])