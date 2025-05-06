import React, { useEffect } from 'react'
import Getuser from './Getuser';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import Login from '../components/Auth/Login';

function OnetimeLogin() {
    const navigate = useNavigate();
    const getUser = Getuser()
    useEffect   (() => {
        // Check if the user has logged in (check token or flag in localStorage)
        if (localStorage.getItem('adminToken')) {
          navigate('/Admin/dashboard'); // Redirect to the dashboard if logged in
        }
      }, [navigate]);
  return (
    <>
    <Login/>
    </>
  )
}

export default OnetimeLogin