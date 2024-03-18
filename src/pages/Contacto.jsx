import React from "react";
import "./Contacto.css";
import pablo from "../assets/cinco.jpeg";
import telefono from "../assets/icons/telefono.png";
import avion from "../assets/avion-de-papel.png";
import phone2 from "../assets/phone2.svg";
import insta from "../assets/instagram.svg";

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
      <div className="container-texto-contact">
        <h2 className="titulo-contacto">Contacto</h2>
        <p className="parrafo-contacto"></p>
        <a className="button-correo" onClick={handleOpenMailClient}>
          <div className="button-content">
            <img className="icon-avion" src={avion} alt="icono" />
            <p className="text-button">pablochavesmaza@gmail.com</p>
          </div>
          <hr className="hr-contacto" />
        </a>
        <div>
          <div className="telefono-container">
            <img src={phone2} className="tl-span"></img>
            <span>{""}</span>
            <span className="num-span">655932364</span>
          </div>{" "}
          <div className="telefono-container">
            <img src={insta} className="tl-span"></img>
            <span>{""}</span>
            <span className="num-span">@pablochavesmaza</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
