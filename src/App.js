import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Register from "./components/register";
import Feed from "./components/Feed";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/feed" element={<Feed />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
}

export default App;
