import React from "react";
import { NavLink } from "react-router-dom";

function ElBanquete() {
  return (
    <div>
      <h1>El banquete</h1>
      <div className="texto-foto">
        <NavLink to="">
          <p className="image-text">Cola de pez</p>
        </NavLink>

        <span className="text-teatro-light">Dirección </span>
        <span>Teresa Chaves</span>
        <br />
        <span className="text-teatro-light">En: </span>
        <span>Teatros del Canal</span>
      </div>
    </div>
  );
}

export default ElBanquete;
