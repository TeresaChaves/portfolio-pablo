import React from "react";
import "./About.css";
import pablo from "../assets/Pablo.jpg";

function About() {
  return (
    <section className="section-contacto">
      <div className="container-foto">
        <img className="img-contacto" src={pablo} alt="foto perfil" />
      </div>
      <div className="container-texto">
        <h2 className="titulo-contacto">Bio</h2>
        <p className="parrafo-contacto">
          Pablo Chaves, nacido en Sevilla, ha dedicado su vida a fusionar sus
          dos grandes pasiones: la arquitectura y el arte dramático. Después de
          completar sus estudios en la prestigiosa Escuela de Arquitectura de
          Sevilla, decidió explorar el mundo del arte escénico y se embarcó en
          una emocionante travesía en la RESAD (Real Escuela Superior de Arte
          Dramático). La convergencia de la estructura arquitectónica y la
          expresividad dramática encendió la chispa de la creatividad en Pablo.
          Fascinado por la magia detrás de los escenarios, decidió
          especializarse en escenografía, uniendo sus conocimientos
          arquitectónicos con la narrativa teatral. En este viaje, tuvo la
          fortuna de ser guiado por la reconocida escenógrafa Marta Pazos, quien
          le abrió las puertas al fascinante mundo de la escenografía a nivel
          nacional.
        </p>
        <p className="parrafo-contacto">
          Su destacado trabajo llegó a su punto álgido con la obra "Cucaracha
          con Paisaje de Fondo", dirigida por Javier Ballesteros. Esta
          producción le valió una nominación a los prestigiosos Premios Max en
          2022, donde fue reconocido como uno de los candidatos a Mejor
          Escenógrafo del año.
        </p>
        <p className="parrafo-contacto">
          Con su mente inquieta y su habilidad para crear mundos escénicos
          cautivadores, Pablo Chaves sigue explorando nuevas formas de contar
          historias a través de la escenografía. Su visión única y su
          contribución al mundo del teatro le han consolidado como un talentoso
          escenógrafo, dejando una huella duradera en la escena teatral
          española.
        </p>
      </div>
    </section>
  );
}

export default About;
