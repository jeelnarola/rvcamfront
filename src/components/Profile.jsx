import React from 'react'
import { useSelector } from 'react-redux';

function Profile() {

  const state = useSelector((state) => state.auth?.user);
  console.log("Redux state:", state);
  return (
    <div>{state.name}</div>
  )
}

export default Profile