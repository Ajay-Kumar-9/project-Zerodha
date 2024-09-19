import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import NotFound from "../NotFound";
function SignupPage() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/signup"}/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default SignupPage;


