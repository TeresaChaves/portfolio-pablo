import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Contancto from "../pages/Contacto";
import ElBanquete from "../pages/ElBanquete";
import Proyectos from "../pages/Proyectos";
import ColaDePez from "../pages/ColaDePez";
import NoFrente from "../pages/NoFrente";
import Gaviotas from "../pages/Gaviotas";

import Cucaracha from "../pages/Cucaracha";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre-mi" element={<About />} />
      <Route path="/contacto" element={<Contancto />} />
      <Route path="/elbanquete" element={<ElBanquete />} />
      <Route path="/proyectos" element={<Proyectos />} />
      <Route path="/cola-de-pez" element={<ColaDePez />} />
      <Route path="/no-estoy-de-frente" element={<NoFrente />} />
      <Route path="/cucaracha" element={<Cucaracha />} />
      <Route path="/gaviotas" element={<Gaviotas />} />
    </Routes>
  );
}

export default AppRoutes;
