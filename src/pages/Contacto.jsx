import React from "react";
import "./Contacto.css";
import pablo from "../assets/Pablo.jpg";

function Contacto() {
  return (
    <section className="section-contacto">
      <div className="container-foto">
        <img className="img-contacto" src={pablo} alt="foto perfil" />
      </div>
      <div className="container-texto">
        <h2 className="titulo-contacto">Contacto</h2>
        <p className="parrafo-contacto">
          Para contactar lo puedes hacer a traves de mi correo electrónico
        </p>
      </div>
    </section>
  );
}

export default Contacto;
