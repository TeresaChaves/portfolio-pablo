import React from "react";
import "./Contacto.css";
import pablo from "../assets/Pablo.jpg";
import { useState } from "react";

function Contacto() {
  return (
    <section className="section-contacto">
      <div className="container-foto">
        <img className="img-contacto" src={pablo} alt="foto perfil" />
      </div>
      <div className="container-texto">
        <h2 className="titulo-contacto">Contacto</h2>
      </div>
    </section>
  );
}

export default Contacto;
