import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Contancto from "../pages/Contacto";
import ElBanquete from "../pages/ElBanquete";
import Proyectos from "../pages/Proyectos";
import ColaDePez from "../pages/ColaDePez";

function AppRoutes() {
  console.log("Configurando rutas...");
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre-mi" element={<About />} />
      <Route path="/contacto" element={<Contancto />} />
      <Route path="/el-banquete" element={<ElBanquete />} />
      <Route path="/proyectos" element={<Proyectos />} />
      <Route path="/cola-de-pez" element={<ColaDePez />} />
    </Routes>
  );
}

export default AppRoutes;
