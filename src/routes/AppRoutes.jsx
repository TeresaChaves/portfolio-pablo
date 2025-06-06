import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contacto from "../pages/Contacto";
import Proyectos from "../pages/Proyectos";
import ObraPage from "../pages/ObraPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/biografia-pablo-chaves" element={<About />} />
      <Route path="/contacto-pablo-chaves" element={<Contacto />} />
      <Route path="/proyectos-pablo-chaves" element={<Proyectos />} />
      <Route path="/:id" element={<ObraPage />} />
    </Routes>
  );
}

export default AppRoutes;
