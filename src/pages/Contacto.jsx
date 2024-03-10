import React from "react";
import "./Contacto.css";
import pablo from "../assets/Pablo.jpg";
import telefono from "../assets/icons/telefono.png";
import avion from "../assets/avion-de-papel.png";

function Contacto() {
  const handleOpenMailClient = () => {
    // Reemplaza 'destinatario@dominio.com' con la dirección de correo que desees.
    const destinatario = "ttachaves@hotmail.com";

    // Abre el cliente de correo del usuario con el destinatario predefinido
    window.location.href = `mailto:${destinatario}`;
  };
  return (
    <section className="section-contacto-contacto">
      <div className="container-foto-contacto">
        <img className="img-contacto-contacto" src={pablo} alt="foto perfil" />
      </div>
      <div className="container-texto">
        <h2 className="titulo-contacto">Contacto</h2>
        <p className="parrafo-contacto"></p>
        <button className="button-correo" onClick={handleOpenMailClient}>
          <div className="button-content">
            <p className="text-button">Enviar correo</p>
            <img className="icon-avion" src={avion} alt="" />
          </div>
        </button>
        <div className="telefono-container">
          <img src={telefono} className="tl-span"></img>
          <span>{""}</span>
          <span className="num-span"> 600700231</span>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
