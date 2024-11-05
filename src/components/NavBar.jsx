import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [isScrolled, setScrolled] = useState(false);
  const [nombre, setNombre] = useState("PABLO CHAVES");
  const [isMenuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  // Manejo del scroll
  const handleScroll = () => {
    const textNavbar = document.querySelector(".nombre");
    const scrollY = window.scrollY;

    if (textNavbar) {
      if (scrollY > 50) {
        textNavbar.classList.add("hidden"); // Agrega la clase para ocultar
      } else {
        textNavbar.classList.remove("hidden"); // Remueve la clase para mostrar
      }
    }
  };

  window.addEventListener("scroll", handleScroll);

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
      setNombre("Gaviotas");
    } else if (path === "/elbanquete") {
      setNombre("El Banquete");
    } else if (path === "/marcela") {
      setNombre("Marcela:Una canción de Cervantes");
    } else if (path === "/fortaleza") {
      setNombre("La Fortaleza");
    } else if (path === "/tablao") {
      setNombre("Tablao");
    } else if (path === "/psicosis") {
      setNombre("Psicosis 4.48");
    } else if (path === "/somos-la-guerra") {
      setNombre("Somos la guerra");
    } else if (path === "/buena-obra") {
      setNombre("Buena obra");
    } else if (path === "/domesticacion") {
      setNombre("Domesticación");
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

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen); // Cambia el estado del menú (abierto/cerrado)
  };

  return (
    <nav className="menu-display">
      <div className="container-nav">
        <div id="menuToggle">
          <input type="checkbox" checked={isMenuOpen} onChange={toggleMenu} />{" "}
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <NavLink to="/" onClick={toggleMenu}>
              <li>Home</li>
            </NavLink>{" "}
            <NavLink to="/proyectos-pablo-chaves" onClick={toggleMenu}>
              <li>Proyectos</li>
            </NavLink>
            <NavLink to="/biografia-pablo-chaves" onClick={toggleMenu}>
              <li>Bio</li>
            </NavLink>
            <NavLink to="/contacto-pablo-chaves" onClick={toggleMenu}>
              <li>Contacto</li>
            </NavLink>
          </ul>
        </div>
        <a href="/">
          <div className="nombre">
            <h1 className={`text-navbar ${isTextVisible ? "visible" : ""}`}>
              {nombre}
            </h1>
            {nombre === "PABLO CHAVES" && <p>escenógrafo</p>}
          </div>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
