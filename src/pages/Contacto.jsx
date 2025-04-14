import React from "react";
import "./Contacto.css";
import avion from "../assets/avion-de-papel.png";
import phone2 from "../assets/phone2.svg";
import insta from "../assets/instagram.svg";

function Contacto() {
  const handleOpenMailClient = () => {
    // Reemplaza 'destinatario@dominio.com' con la dirección de correo que desees.
    const destinatario = "pablochavesmaza@hotmail.com";

    // Abre el cliente de correo del usuario con el destinatario predefinido
    window.location.href = `mailto:${destinatario}`;
  };
  return (
    <section
      className="home-margin"
      aria-label="Pablo Chaves Maza, escenógrafo en España especializado en diseño de escenografías teatrales">
      <section className="section-contacto-contacto">
        <div className="container-foto-contacto">
          <img
            className="img-contacto-contacto"
            src="https://res.cloudinary.com/dlt2cjtvj/image/upload/v1742915708/PORTFOLIO%20ESCENOGRAFIA/elbanquete/IMG_1069_agecdj.jpg"
            alt="Pablo Chaves escenógrafo en España, contacto"
          />
        </div>
        <div className="container-texto-contact">
          <h2 className="titulo-contacto">Contacto</h2>

          <button className="button-correo" onClick={handleOpenMailClient}>
            <div className="button-content">
              <img
                className="icon-avion"
                src={avion}
                alt="email pablo chaves maza escenógrafo"
              />
              <p className="text-button">pablochavesmaza@hotmail.com</p>
            </div>
            <hr className="hr-contacto" />
          </button>
          <div className="flex-mobile-phone-insta">
            <div className="telefono-container">
              <img
                src={phone2}
                className="tl-span"
                alt="icono teléfono pablo chaves maza escenógrafo"></img>
              <span>{""}</span>
              <span className="num-span" oncontextmenu="return false;">
                655932364
              </span>
            </div>{" "}
            <div className="telefono-container">
              <img
                src={insta}
                alt="icono instagram pablo chaves maza escenógrafo"
                className="tl-span"></img>
              <span>{""}</span>
              <a
                href="https://www.instagram.com/pablochavesmaza/?hl=es
            ">
                <span className="num-span">@pablochavesmaza</span>
              </a>
            </div>
          </div>
          <p className="hidden-seo-text">
            Pablo Chaves Maza es un escenógrafo profesional en España
            especializado en el diseño de escenografías teatrales.
          </p>
        </div>
      </section>
    </section>
  );
}

export default Contacto;
