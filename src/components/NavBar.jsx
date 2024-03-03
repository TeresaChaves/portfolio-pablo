import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

function NavBar() {
  const [isScrolled, setScrolled] = useState(false);
  const [nombre, setNombre] = useState("PABLO CHAVES");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Lógica para determinar el nombre basándose en la ruta actual
    const path = location.pathname;
    if (path === "/cola-de-pez") {
      setNombre("Cola de Pez");
    } else if (path === "/elbanquete") {
      setNombre("El Banquete");
    } else if (path === "/no-estoy-de-frente") {
      setNombre("No estoy de frente");
    } else if (path === "/cucaracha") {
      setNombre("Cucaracha con paisaje de fondo");
    } else if (path === "/gaviotas") {
      setNombre("Las Gaviotas");
    } else if (path === "/elbanquete") {
      setNombre("El Banquete");
    } else {
      setNombre("PABLO CHAVES");
    }
  }, [location.pathname]);

  const [isTextVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTextVisible(true);
    }, 100); // Ajusta el tiempo según sea necesario

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <nav className={`menu-display ${isScrolled ? "scrolled" : ""}`}>
      <div>
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <a href="/">
              <li>Home</li>
            </a>{" "}
            <a href="/proyectos">
              <li>Proyectos</li>
            </a>
            <a href="/coordinación">
              <li>Coordinación/ Ayudantías</li>
            </a>
            <a href="/biografia">
              <li>Bio</li>
            </a>
            <a href="/contacto">
              <li>Contacto</li>
            </a>
          </ul>
        </div>
        <div className="nombre">
          <h1 className={`text-navbar ${isTextVisible ? "visible" : ""}`}>
            {nombre}
          </h1>
          {nombre === "PABLO CHAVES" && <p>escenógrafo</p>}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
