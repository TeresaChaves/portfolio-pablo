import React from "react";
import "./About.css";
import pablo from "../assets/FOTO BIO.jpg";

function About() {
  return (
    <section className="section-contacto">
      <div className="container-foto">
        <img className="img-contacto" src={pablo} alt="foto perfil" />
      </div>
      <div className="container-texto">
        <h2 className="titulo-contacto">Bio</h2>
        <p className="parrafo-contacto">
          Tras finalizar la carrera de arquitectura en la ETSA de Sevilla y
          especializarse en escenografía por La Sapienza en Roma, se traslada a
          Madrid para licenciarse en la RESAD en interpretación textual. Trabaja
          6 años como arquitecto en un estudio en Madrid hasta que se pasa a la
          escenografía definitivamente. Sus primeros pasos en la escenografía
          los da como ayudante y más tarde coordinador de proyectos de Marta
          Pazos en piezas como “Safo” de María Folguera estrenada en Mérida,
          Teatre Romea y Teatros del Canal, “Othello” de Voadora, estrenada en
          la Abadía y “Hoax Hamlet” en la Ciudad de la Cultura. Además también
          realiza la arquitectura de otros proyectos de Marta Pazos para museos
          (’’Conversatorio’’ para ARCO, ’’Contemplación’’ para el CGAC,
          ’’Matria’’ en la PQ23, ’’Campo de figos’’ en la Ciudad de la Cultura).
          También trabaja para otros escenógrafos como Max Glaenzel, Blanca
          Agnon y José Novoa entre otros.
        </p>
        {/* <p className="parrafo-contacto">
          Su destacado trabajo llegó a su punto álgido con la obra "Cucaracha
          con Paisaje de Fondo", dirigida por Javier Ballesteros. Esta
          producción le valió una nominación a los prestigiosos Premios Max en
          2022, donde fue reconocido como uno de los candidatos a Mejor
          Escenógrafo del año.
        </p> */}
        <p className="parrafo-contacto">
          Su primer diseño de escenografía (y vestuario) lo realiza para la obra
          ’’Cucaracha con paisaje de fondo’’ de Javier Ballesteros para la
          compañía Mujer en Obras en el Teatro Español y es nominado al Max por
          mejor diseño de espacio escénico. Entre sus últimos proyectos destacan
          trabajos como la escenografía y vestuario de ‘‘La Fortaleza’’ de Lucía
          Carballal para La Compañía Nacional de Teatro Clásico, el espacio
          escénico de’’Pequeño cúmulo de abismos’’ de Cris Blanco en el Teatro
          María Guerrero, ’’Psicosis 4.48” dirigida por Luz Arcas en el Teatro
          Español, la escenografía y vestuario de “El Banquete “ de la Ferviente
          Compañía y de “Gaviotas” para Gritadero Teatro. Es colaborador en
          Radio Nacional España en el programa ‘‘La sala’’ con Daniel Galindo,
          en el que presenta una sección sobre los diferentes escenógrafos de la
          vanguardia española. Actualmente combina su carrera como actor con la
          de escenógrafo.
        </p>
      </div>
    </section>
  );
}

export default About;
