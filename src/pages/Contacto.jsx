import React from "react";
import "./Contacto.css";
import pablo from "../assets/elbanquete/IMG_1069.JPG";
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
        <a className="button-correo" onClick={handleOpenMailClient}>
          <div className="button-content">
            <img className="icon-avion" src={avion} alt="icono" />
            <p className="text-button">pablochavesmaza@hotmail.com</p>
          </div>
          <hr className="hr-contacto" />
        </a>
        <div className="flex-mobile-phone-insta">
          <div className="telefono-container">
            <img src={phone2} className="tl-span"></img>
            <span>{""}</span>
            <span
              className="num-span"
              oncontextmenu="return false;"
            >
              655932364
            </span>
          </div>{" "}
          <div className="telefono-container">
            <img src={insta} className="tl-span"></img>
            <span>{""}</span>
            <a
              href="https://www.instagram.com/pablochavesmaza/?hl=es
            "
            >
              <span className="num-span">@pablochavesmaza</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
