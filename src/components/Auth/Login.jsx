import React, { useState } from 'react'
import user from '../../utils/Getuser'
import Getuser from '../../utils/Getuser'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/authSlice ';

function Login () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch("")
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('https://rvcam-production.up.railway.app/api/auth/login', {
        email,
        password
      });

      const { token } = res.data;
      dispatch(login(res.data))
      console.log("data",res.data.user)
      localStorage.setItem('adminToken', token);
      alert('Login successful');
      window.location.href = '/Admin/dashboard';

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
  return (
    <>
        <section class="w-full absolute top-0 left-0 z-50">
  <div class="h-screen inset-0 bg-slate-200">
      <div class="w-auto fixed top-36 left-80">
          <div class="flex w-auto drop-shadow-2xl bg-white p-3 py-7 rounded-2xl">
            {/* <img src="../src/Images/Login/Login_Logo.png"  class="w-64 p-8"> */}
            <div class="pr-12">
                 <form  onSubmit={(e) => e.preventDefault()}>
                  <div class="m-3">
                      <label for="">Email / SID : </label>
                      <input type="text"  value={email}
        onChange={(e) => setEmail(e.target.value)} class="block p-3 border border-black focus:border-red-900 w-56 mt-3 drop-shadow font-serif text-xs" placeholder="Enter A Email / SID Number"/>
                      {/* <input type="text" class="block p-3 border border-black focus:border-red-900 w-56 mt-3 drop-shadow font-serif text-xs" placeholder="Enter A Email / SID Number"> */}
                  </div>
                  <div class="m-3">
                      <label for="">Password : </label>
                      <input type="text"  value={password}
        onChange={(e) => setPassword(e.target.value)} class="block p-3 border border-black focus:border-red-900 w-56 mt-3 drop-shadow font-serif text-xs" placeholder="Enter A Password"/>
                  </div>
                  <button type="button" onClick={handleLogin} class="bg-indigo-500 ml-11 mt-8 block p-3 w-1/2 rounded-xl hover:bg-white hover:border hover:border-black transition-all text-white hover:text-black hover:scale-95 hover:drop-shadow-2xl">Submit</button>
                 </form>
              </div>
          </div>
      </div>
  </div>
</section>
    </>
  )
}

export default Login