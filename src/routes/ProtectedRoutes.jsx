import React from 'react'
import { Navigate } from 'react-router';

function ProtectedRoutes({children}) {
     const token = localStorage.getItem("token");
    //  return <Navigate to="/" replace />;
 
}

export default ProtectedRoutes
