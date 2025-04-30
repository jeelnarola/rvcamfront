import React from 'react'
import { useSelector } from 'react-redux';

function Profile() {

  const state = useSelector((state) => state.auth?.user);
  return (
    <div>{state.name}</div>
  )
}

export default Profile