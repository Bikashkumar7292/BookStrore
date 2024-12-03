import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import Home from './Home/Home';
import Courses from './course/Courses';
import Signup from './componenet/Signup';
import Contact from './componenet/Contact';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';

function App() {
  const[authUser, setAuthUser]=useAuth()
  console.log(authUser);

  return (
    <>

    {/* <Home/>
    <Course/> */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/contact" element={<Contact/>}/>




    </Routes>
    <Toaster/>

    </>
  )
}

export default App
