import React from "react";
import nav from "../assets/menu.png";
import { useState } from "react";
import "./NavBar.css";
import { isValidDateValue } from "@testing-library/user-event/dist/utils";

function NavBar() {
  const [isMenuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened(!isMenuOpened);
  };

  return (
    <nav className="menu-display">
      <div id="menuToggle">
        <input type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <ul id="menu">
          <a href="/">
            <li>Proyectos</li>
          </a>
          <a href="/sobre-mi">
            <li>Sobre mí</li>
          </a>
          <a href="/contacto">
            <li>Contacto</li>
          </a>
        </ul>
      </div>
      <div>
        <h1>PABLO CHAVES</h1>
      </div>
    </nav>
  );
}

export default NavBar;
