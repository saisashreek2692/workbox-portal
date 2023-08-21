import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, Login, Register } from "./layouts/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} exact />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
