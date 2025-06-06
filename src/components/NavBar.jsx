import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [nombre, setNombre] = useState("PABLO CHAVES");
  const [isMenuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  // Manejo del scroll
  const handleScroll = () => {
    const textNavbar = document.querySelector(".nombre, .nombre_special-class");
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
    if (path === "/colaDePez") {
      setNombre("Cola de Pez");
    } else if (path === "/elbanquete") {
      setNombre("El Banquete");
    } else if (path === "/noEstoyDeFrente") {
      setNombre("No estoy de frente");
    } else if (path === "/cucaracha") {
      setNombre("Cucaracha con paisaje de fondo");
    } else if (path === "/gaviotas") {
      setNombre("Gaviotas");
    } else if (path === "/elbanquete") {
      setNombre("El Banquete");
    } else if (path === "/marcela") {
      setNombre("Marcela:Una canción de Cervantes");
    } else if (path === "/laFortaleza") {
      setNombre("La Fortaleza");
    } else if (path === "/tablao") {
      setNombre("Tablao");
    } else if (path === "/psicosis") {
      setNombre("Psicosis 4.48");
    } else if (path === "/somosLaGuerra") {
      setNombre("Somos la guerra");
    } else if (path === "/buenaobra") {
      setNombre("Buena obra");
    } else if (path === "/pequenoCumuloDeCircunstancias") {
      setNombre("Pequeño Cúmulo de Circunstacia");
    } else if (path === "/laDomesticacion") {
      setNombre("Domesticación");
    } else if (path === "/losNuestros") {
      setNombre("Los Nuestros");
    } else if (path === "/matrimonioBlanco") {
      setNombre("Matromonio Blanco");
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

  // Definir la clase adicional para /biografia-pablo-chaves
  const navClass =
    location.pathname === "/biografia-pablo-chaves"
      ? "menu-display_special-class" // Clase especial para esta ruta
      : "menu-display"; // Clase por defecto

  const navClassNombre =
    location.pathname === "/biografia-pablo-chaves"
      ? "nombre_special-class" // Clase especial para esta ruta
      : "nombre"; // Clase por defecto
  const containerNav =
    location.pathname === "/biografia-pablo-chaves"
      ? "container-nav_special-class" // Clase especial para esta ruta
      : "container-nav"; // Clase por defecto

  return (
    <nav className={navClass}>
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
        <div className="nombre">
          <a href="/">
            <h1 className={`text-navbar ${isTextVisible ? "visible" : ""}`}>
              {nombre}
            </h1>
            {nombre === "PABLO CHAVES" && <p>escenógrafo</p>}
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
