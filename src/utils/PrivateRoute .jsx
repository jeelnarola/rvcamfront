import React from 'react'
import Getuser from './Getuser'
import { Navigate } from 'react-router-dom'

function PrivateRoute ({children}) {
    const getUser = Getuser()
    console.log("get");
    
    return getUser ? children : <Navigate to="/login" replace />;
}

export default PrivateRoute 