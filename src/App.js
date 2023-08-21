import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./layouts/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
