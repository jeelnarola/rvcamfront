import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetAPI } from '../../redux/getAPI';
import axios from 'axios';
import API from '../../API';

function ManageStudent() {
  const dispatch = useDispatch("")
  const [staffData, setStaffData] = useState()
  const state = useSelector((state) => state);
  const token = state.auth.user.data.token;
  
  const getSubject = async () => {
    try {
      const res = await axios.get(`${API.fixAPI}/api/user/getSF/`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }, params: {
          role: ['Student']
        }
      });
      console.log("res", res.data.data); 


    } catch (error) {
      if (error.response) {
        console.error('Server Error:', error.response.data);
        alert(error.response.data.message || 'Invalid credentials');
      } else {
        console.error('Login failed:', error.message);
        alert('Something went wrong');
      }
    }
  }
  useEffect(() => {
    getSubject()

  }, [])
 
  return (
    <div>ManageStudent</div>
  )
}

export default ManageStudent