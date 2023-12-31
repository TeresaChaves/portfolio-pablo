import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Contancto from "../pages/Contacto";
import ElBanquete from "../pages/ElBanquete";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre-mi" element={<About />} />
      <Route path="/contacto" element={<Contancto />} />
      <Route path="/el-banquete" element={<ElBanquete />} />
    </Routes>
  );
}

export default AppRoutes;
