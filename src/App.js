import Home from "./screens/Home";
import Navbar from "./screens/Navbar";
import React from "react";
import Login from "./screens/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />}>
            <Route path="/Login" element={<Login />} />
            <Route path="/Home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
