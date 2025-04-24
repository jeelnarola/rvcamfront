import React from 'react'
import Getuser from './Getuser'
import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoute ({children}) {
    const getUser = Getuser()
    
    return getUser ?  <Outlet /> : <Navigate to="/login" replace />;
}

export default PrivateRoute 