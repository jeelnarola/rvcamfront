import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Admin/Dashboard';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import PrivateRoute from './utils/PrivateRoute ';
import Adminroot from './components/Admin/Adminroot';
import Profile from './components/Profile';
import Course from './components/Admin/Course';
import Subject from './components/Admin/Subject';
import AddStaff from './components/Admin/AddStaff';
import Sidebar from './components/Admin/Sidebar';
import OneTimeLogin from './utils/OnetimeLogin';
import CourseMange from './components/Admin/CourseMange';
import Page404 from './components/Page404';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    {/* OneTimeLogin will check if user is logged in and redirect if necessary */}
    <Route path="/login" element={<OneTimeLogin />} />
    <Route path="*" element={<Page404 />} />
    
    {/* Protect Admin routes with PrivateRoute */}
    <Route path="/Admin" element={<PrivateRoute />}>
      <Route element={<Adminroot />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="Course" element={<Course />} />
        <Route path="CourseManage" element={<CourseMange />} />
        <Route path="Subject" element={<Subject />} />
        <Route path="AddStaff" element={<AddStaff />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Route>
  </Routes>
    </BrowserRouter>
  // </>
  );
}

export default App;
