import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Contacto from "../pages/Contacto";
import ElBanquete from "../pages/ElBanquete";
import Proyectos from "../pages/Proyectos";
import ColaDePez from "../pages/ColaDePez";
import NoFrente from "../pages/NoFrente";
import Gaviotas from "../pages/Gaviotas";

import Cucaracha from "../pages/Cucaracha";
import Marcela from "../pages/Marcela";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/biografia" element={<About />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/elbanquete" element={<ElBanquete />} />
      <Route path="/proyectos" element={<Proyectos />} />
      <Route path="/cola-de-pez" element={<ColaDePez />} />
      <Route path="/no-estoy-de-frente" element={<NoFrente />} />
      <Route path="/cucaracha" element={<Cucaracha />} />
      <Route path="/gaviotas" element={<Gaviotas />} />
      <Route path="/marcela" element={<Marcela />} />
    </Routes>
  );
}

export default AppRoutes;
