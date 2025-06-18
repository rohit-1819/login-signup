// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import './App.css';
import Home from "./components/home";
import Signup from "./components/signup";
import Profile from "./components/profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/login" element={<Login />} />
        <Route path = "/signup" element={<Signup />} />
        <Route path = "/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
