import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Admin/Dashboard';
import { Route, Router, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import PrivateRoute from './utils/PrivateRoute ';
import Adminroot from './components/Admin/Adminroot';
import Profile from './components/Profile';
import Course from './components/Admin/Course';
import Subject from './components/Admin/Subject';
import AddStaff from './components/Admin/AddStaff';

function App() {
  return (
  //   <Routes>
  //     <Route path="/login" element={<Login />} />
  //     {/* <Route path="/" element={<Dashboard />} /> */}
  //   <Route
  //         path="/"
  //         element={
  //           <PrivateRoute >
  //             <Dashboard />
  //           </PrivateRoute>
  //         }
  //       />
        
  // </Routes>
  <Routes>
  <Route path="/Admin" element={<Adminroot />}>
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="Profile" element={<Profile />} />
    <Route path="Course" element={<Course />} />
    <Route path="Subject" element={<Subject />} />
    <Route path="AddStaff" element={<AddStaff />} />
  </Route>
</Routes>

  // </>
  );
}

export default App;
