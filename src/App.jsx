import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/login";
import Signup from "./Components/signup";
import Dashboard from "./Components/Dashboard";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
