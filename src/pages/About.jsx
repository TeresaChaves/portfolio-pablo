import React from "react";
import "./About.css";
import pablo from "../assets/Pablo Chaves.jpg";

function About() {
  return (
    <section className="home-margin">
      <div className="section-contacto-about">
        <div className="container-foto-about">
          <img className="img-contacto-about" src={pablo} alt="Pablo Chaves" />
        </div>
        <div className="container-texto-about">
          <h2 className="titulo-contacto-about">Bio</h2>
          <p className="parrafo-contacto-about">
            Tras finalizar la carrera de arquitectura en la ETSA de Sevilla y
            especializarse en escenografía por La Sapienza en Roma, se traslada
            a Madrid para licenciarse en la RESAD en interpretación textual.
            Trabaja 6 años como arquitecto en un estudio en Madrid hasta que se
            pasa a la escenografía definitivamente. Sus primeros pasos en la
            escenografía los da como ayudante y más tarde coordinador de
            proyectos de Marta Pazos en piezas como “Safo” de María Folguera
            estrenada en Mérida, Teatre Romea y Teatros del Canal, “Othello” de
            Voadora, estrenada en la Abadía y “Hoax Hamlet” en la Ciudad de la
            Cultura. Además también realiza la arquitectura de otros proyectos
            de Marta Pazos para museos (’’Conversatorio’’ para ARCO,
            ’’Contemplación’’ para el CGAC, ’’Matria’’ en la PQ23, ’’Campo de
            figos’’ en la Ciudad de la Cultura). También trabaja para otros
            escenógrafos como Max Glaenzel, Blanca Agnon y José Novoa entre
            otros.
          </p>

          <p className="parrafo-contacto-about">
            Su primer diseño de escenografía (y vestuario) lo realiza para la
            obra ’’Cucaracha con paisaje de fondo’’ de Javier Ballesteros para
            la compañía Mujer en Obras en el Teatro Español y es nominado al Max
            por mejor diseño de espacio escénico. Entre sus últimos proyectos
            destacan trabajos como la escenografía y vestuario de ‘‘La
            Fortaleza’’ de Lucía Carballal para La Compañía Nacional de Teatro
            Clásico, el espacio escénico de’’Pequeño cúmulo de abismos’’ de Cris
            Blanco en el Teatro María Guerrero, ’’Psicosis 4.48” dirigida por
            Luz Arcas en el Teatro Español, la escenografía y vestuario de “El
            Banquete “ de la Ferviente Compañía y de “Gaviotas” para Gritadero
            Teatro. Es colaborador en Radio Nacional España en el programa ‘‘La
            sala’’ con Daniel Galindo, en el que presenta una sección sobre los
            diferentes escenógrafos de la vanguardia española. Actualmente
            combina su carrera como actor con la de escenógrafo.
          </p>
          <h2 className="titulo-proyecto-about">Proyectos</h2>
          <h2 className="titulo-proyecto-charge">ESCENOGRAFÍA Y VESTUARIO</h2>
          <div className="año-desplegable">
            <h3 className="year-title">2024</h3>
            <div className="content">
              <p className="parrafo-contacto-about">
                <b>La trilogía. BEKRISTEN/CRISTIANOS.</b> Diseño de espacio
                escénico. Estrenada en Teatros del Canal. Dirigida por Luz Arcas
                compañía La phármaco.
              </p>
              <p className="parrafo-contacto-about">
                <b>La Fortaleza.</b> Diseño de escenografía y vestuario. Estreno
                en el Teatro de la Comedia, sala Tirso de Molina. Dirigido por
                Lucía Carballal.
              </p>
              <p className="parrafo-contacto-about">
                <b>La Persistencia.</b> Diseño de espacio escénico y vestuario.
                Estreno en el Teatro del Barrio. Dirigido por Fernanda Orazi.
              </p>
              <p className="parrafo-contacto-about">
                <b>Marcela.</b>Diseño de escenografía. Estreno en Sala
                Cervantina. Direección: Leticia Dolera
              </p>
            </div>
          </div>
          <hr class />
          <div className="año-desplegable">
            <h3 className="year-title">2023</h3>
            <div className="content">
              <p className="parrafo-contacto-about">
                <b>Pequéño cúmulo de abismos.</b>Diseño de escenografía. Estreno
                en CDN, Teatro María Guerrero sala de la Princesa. Dirigido por
                Cris Blanco.
              </p>
              <p className="parrafo-contacto-about">
                <b>Psicosis 4.48</b> Diseño de escenografía. Estreno en Teatro
                Español, sala Margarita Xirgu. Dirigida por Luz Arcas , compañía
                La phármaco.
              </p>
              <p className="parrafo-contacto-about">
                <b>Cola de pez.</b>Diseño de escenografía. Estreno en Bastero
                Kulturgunea. Dirigida por Natalia Huarte y Javier Lara.
              </p>
            </div>
          </div>
          <hr />
          <div className="año-desplegable">
            <h3 className="year-title">2022</h3>
            <div className="content">
              <p className="parrafo-contacto-about">
                <b>No estoy de frente. </b> Diseño de escenografía. Estreno en
                La Fundición de Sevilla. Dirección: Paco León y Chiqui
                Carabante.
              </p>
              <p className="parrafo-contacto-about">
                <b>Os navegantes. </b>Diseño de escenografía. Estreno en Museo
                Grao Vasco de Viseu. Dirección: Amaya Galeote.
              </p>
              <p className="parrafo-contacto-about">
                <b>El Banquete</b>Diseño de escenografía y vestuario. Estreno en
                Nave 73. Ferviente compañía Dirección Adrián Pulido.
              </p>
            </div>
          </div>
          <hr />
          <div className="año-desplegable">
            <h3 className="year-title">2021</h3>
            <div className="content">
              <p className="parrafo-contacto-about">
                <b>Gaviotas.</b>Diseño de escenografía y vestuario. Estreno:
                Umbral de la primavera. Dirección Gritadero teatro.
              </p>
              <p className="parrafo-contacto-about">
                <b>Cucaracha con paisaje de fondo.</b>Diseño de escenografía y
                vestuario. En Teatro Español y Teatro Quique San Francisco Dir.
                Javier Ballesteros. Compañía Mujer en obras. *Finalista a los
                premios Max a mejor diseño de espacio escénico*
              </p>
            </div>
          </div>
          <h2 className="titulo-proyecto-charge">ARQUITECTURA EFÍMERA</h2>
          <div className="año-desplegable">
            <h3 className="year-title">2024</h3>
            <div className="content">
              <p className="parrafo-contacto-about">
                <b>Conversatorio</b>Arquitectura y coordinación de proyecto .
                Expuesto en ARCO. Artista: Marta Pazos. Comisaria: Alicia
                Ventura. Espacio ‘‘sin prisa’’ para Premio cervezas Alhambra
              </p>
              <p className="parrafo-contacto-about">
                <b>Tablao.</b>Arquitectura y coordinación de proyecto . Expuesto
                en Ca2m y Condeduque. Artista: Ernesto Artillo. Para el cuadro:
                Yerai Cortés, Niño de Elche, Andrés Marín y Rocío Molina.
                Comisaria: Alicia Navarro
              </p>
            </div>
          </div>
          <hr />
          <div className="año-desplegable">
            <h3 className="year-title">2023</h3>
            <div className="content">
              <p className="parrafo-contacto-about">
                <b>Matria</b> Arquitectura de proyecto . Para la Quadriennal de
                Praga Expuesto en la Galería Nacional de Praga. Artista: Marta
                Pazos. Comisaria: Klarà Zieglerová
              </p>
            </div>
          </div>
          <hr />
          <div className="año-desplegable">
            <h3 className="year-title">2022</h3>
            <div className="content">
              <p className="parrafo-contacto-about">
                <b>Contemplación.</b>Arquitectura de proyecto . Expuesto en
                Centro Gallego de Arte Contemporáneo. Artista: Marta Pazos.
                Comisario Iñaki Martínez.
              </p>
            </div>
          </div>
          <hr />
          <div className="año-desplegable">
            <h3 className="year-title">2021</h3>
            <div className="content">
              <p className="parrafo-contacto-about">
                <b>Campo de Figos.</b>Arquitectura y coordinación de proyecto .
                Expuesto en Museo do Gaias- Cidade da Cultura. Artista: Marta
                Pazos. Comisarios: Miguel Ángel Cajigal y Deborah Garcia Bello.
              </p>
            </div>
          </div>
          <h2 className="titulo-proyecto-charge">COORDINACIÓN DE PROYECTOS</h2>
          <div className="año-desplegable">
            <h3 className="year-title">2022</h3>
            <div className="content">
              <p className="parrafo-contacto-about">
                <b>Safo</b>Desarrollo y coordinación de escenografía. Diseño:
                Marta Pazos. Dirigido por Marta Pazos. Estrenado en Teatro
                Romano de Mérida. Teatre Romea de Barcelona. Teatros del Canal
                sala Roja.
              </p>
            </div>
          </div>
          <hr />
          <div className="año-desplegable">
            <h3 className="year-title">2021</h3>
            <div className="content">
              <p className="parrafo-contacto-about">
                <b>Hoax Hamlet</b>Desarrollo y coordinación de escenografía.
                Diseñada por Marta Pazos. Dir. Hugo Torres. Ciudad de la
                Cultura. Santiago
              </p>
            </div>
          </div>
          <h2 className="titulo-proyecto-charge">AYUDANTÍAS</h2>
          <div className="año-desplegable">
            <h3 className="year-title">2024</h3>
            <div className="content">
              <p className="parrafo-contacto-about">
                <b>Primera Sangre.</b>Ayudantía de escenografía para Blanca Añón
                en CDN Teatro Valle Inclán. Sala Francisco Nieva. Dirigido por
                María Velasco
              </p>
            </div>
          </div>
          <hr />
          <div className="año-desplegable">
            <h3 className="year-title">2023</h3>
            <div className="content">
              <p className="parrafo-contacto-about">
                <b>Funfamentalmente Fantasías para la resistencia.</b>.
                Ayudantía de escenografía para Blanca Añón. Direccción: Alfredo
                Sanzol . CDN Teatro Valle Inclán.
              </p>
              <p className="parrafo-contacto-about">
                <b>As oito da tarde cando morren as nais</b>Ayudantía de
                escenografía para Blanca Añón. Dirigido por Marta Pazos.
                Estrenado en el Salón Teatro del CDGA
              </p>
            </div>
          </div>
          <hr />
          <div className="año-desplegable">
            <h3 className="year-title">2022</h3>
            <div className="content">
              <p className="parrafo-contacto-about">
                <b>Lo Fingido verdadero.</b>o. Ayudantía de escenografía para
                Jose Novoa. Dirigido por Lluís Omar. Estrenado en el Teatro de
                la Comedia y el Teatre Romea.
              </p>
            </div>
          </div>
          <hr />
          <div className="año-desplegable">
            <h3 className="year-title">2021</h3>
            <div className="content">
              <p className="parrafo-contacto-about">
                <b>Comedia sin título</b>Ayudantía de escenografía para Max
                Glaenzel. Dirigido por Marta Pazos. Estrenado en el Teatro María
                Guerrero
              </p>
              <p className="parrafo-contacto-about">
                <b>Othello.</b>. Ayudantía y coordinación de escenografía.
                Diseñada por Marta Pazos. Dirigida por Marta Pazos. Estrenada en
                el Teatro de la Abadía
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
