import React from "react";
import "./About.css";
import pablo from "../assets/Pablo Chaves.jpg";
import { Helmet } from "react-helmet";

function About() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      className="home-margin"
      aria-label="Pablo Chaves Maza, escenógrafo en España especializado en diseño de escenografías teatrales">
      <Helmet>
        <title>Pablo Chaves - Escenógrafo</title>
        <meta
          name="description"
          content="Pablo Chaves Maza es un escenógrafo con formación en arquitectura y escenografía. Con experiencia en los principales teatros de España, ha trabajado en producciones destacadas, aportando su visión innovadora y técnica al diseño escénico."
        />
      </Helmet>
      <div className="section-contacto-about">
        <div className="container-foto-about">
          <img className="img-contacto-about" src={pablo} alt="Pablo Chaves" />
        </div>
        <div className="container-texto-about">
          <h2 className="titulo-contacto-about">Bio</h2>
          <p className="parrafo-contacto-about">
            Tras finalizar la carrera de arquitectura en la ETSA de Sevilla y
            especializarse en escenografía por La Sapienza en Roma, Pablo Chaves
            se traslada a Madrid para licenciarse en la RESAD en interpretación
            textual. Trabaja 6 años como arquitecto en un estudio en Madrid
            hasta que se pasa a la escenografía definitivamente. Sus primeros
            pasos en la escenografía los da como ayudante y más tarde
            coordinador de proyectos de Marta Pazos en piezas como “Safo” de
            María Folguera estrenada en Mérida, Teatre Romea y Teatros del
            Canal, “Othello” de Voadora, estrenada en la Abadía y “Hoax Hamlet”
            en la Ciudad de la Cultura. Además también realiza la arquitectura
            de otros proyectos de Marta Pazos para museos (’’Conversatorio’’
            para ARCO, ’’Contemplación’’ para el CGAC, ’’Matria’’ en la PQ23,
            ’’Campo de figos’’ en la Ciudad de la Cultura). También trabaja para
            otros escenógrafos como Max Glaenzel, Blanca Agnon y José Novoa
            entre otros.
          </p>

          <p className="parrafo-contacto-about">
            Su primer diseño de escenografía (y vestuario) lo realiza para la
            obra ’’Cucaracha con paisaje de fondo’’ de Javier Ballesteros para
            la compañía Mujer en Obras en el Teatro Español donde Pablo Chaves
            es nominado al Max por mejor diseño de espacio escénico. Entre sus
            últimos proyectos destacan trabajos como la escenografía y vestuario
            de ‘‘La Fortaleza’’ de Lucía Carballal para La Compañía Nacional de
            Teatro Clásico, el espacio escénico de’’Pequeño cúmulo de abismos’’
            de Cris Blanco en el Teatro María Guerrero, ’’Psicosis 4.48”
            dirigida por Luz Arcas en el Teatro Español, la escenografía y
            vestuario de “El Banquete “ de la Ferviente Compañía y de “Gaviotas”
            para Gritadero Teatro. Es colaborador en Radio Nacional España en el
            programa ‘‘La sala’’ con Daniel Galindo, en el que presenta una
            sección sobre los diferentes escenógrafos de la vanguardia española.
            Actualmente combina su carrera como actor con la de escenógrafo.
          </p>
          <h2 className="titulo-proyecto-about">Proyectos</h2>
          <div className="category-professional">
            <h2 className="titulo-proyecto-charge">ESCENOGRAFÍA Y VESTUARIO</h2>
            <div className="año-desplegable">
              <h3 className="year-title">2024</h3>
              <div className="content">
                <p className="parrafo-contacto-about">
                  <b>La trilogía. BEKRISTEN/CRISTIANOS. </b> Diseño de espacio
                  escénico. Estrenada en Teatros del Canal. Dirigida por Luz
                  Arcas compañía La phármaco.
                </p>
                <p className="parrafo-contacto-about">
                  <b>La Fortaleza.</b> Diseño de escenografía y vestuario.
                  Estreno en el Teatro de la Comedia, sala Tirso de Molina.
                  Dirigido por Lucía Carballal.
                </p>
                <p className="parrafo-contacto-about">
                  <b>La Persistencia.</b> Diseño de espacio escénico y
                  vestuario. Estreno en el Teatro del Barrio. Dirigido por
                  Fernanda Orazi.
                </p>
                <p className="parrafo-contacto-about">
                  <b>Marcela.</b> Diseño de escenografía. Estreno en Sala
                  Cervantina. Direección: Leticia Dolera
                </p>
              </div>
            </div>
            <hr />
            <div className="año-desplegable">
              <h3 className="year-title">2023</h3>
              <div className="content">
                <p className="parrafo-contacto-about">
                  <b>Pequéño cúmulo de abismos.</b> Diseño de escenografía.
                  Estreno en CDN, Teatro María Guerrero sala de la Princesa.
                  Dirigido por Cris Blanco.
                </p>
                <p className="parrafo-contacto-about">
                  <b>Psicosis 4.48</b> Diseño de escenografía. Estreno en Teatro
                  Español, sala Margarita Xirgu. Dirigida por Luz Arcas ,
                  compañía La phármaco.
                </p>
                <p className="parrafo-contacto-about">
                  <b>Cola de pez.</b> Diseño de escenografía. Estreno en Bastero
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
                  <b>El Banquete. </b>Diseño de escenografía y vestuario.
                  Estreno en Nave 73. Ferviente compañía Dirección Adrián
                  Pulido.
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
                  <b>Cucaracha con paisaje de fondo. </b>Diseño de escenografía
                  y vestuario. En Teatro Español y Teatro Quique San Francisco
                  Dir. Javier Ballesteros. Compañía Mujer en obras. *Finalista a
                  los premios Max a mejor diseño de espacio escénico*
                </p>
              </div>
            </div>
          </div>
          <div className="category-professional">
            <h2 className="titulo-proyecto-charge">ARQUITECTURA EFÍMERA</h2>
            <div className="año-desplegable">
              <h3 className="year-title">2024</h3>
              <div className="content">
                <p className="parrafo-contacto-about">
                  <b>Conversatorio. </b>Arquitectura y coordinación de proyecto
                  . Expuesto en ARCO. Artista: Marta Pazos. Comisaria: Alicia
                  Ventura. Espacio ‘‘sin prisa’’ para Premio cervezas Alhambra
                </p>
                <p className="parrafo-contacto-about">
                  <b>Tablao. </b>Arquitectura y coordinación de proyecto .
                  Expuesto en Ca2m y Condeduque. Artista: Ernesto Artillo. Para
                  el cuadro: Yerai Cortés, Niño de Elche, Andrés Marín y Rocío
                  Molina. Comisaria: Alicia Navarro
                </p>
              </div>
            </div>
            <hr />
            <div className="año-desplegable">
              <h3 className="year-title">2023</h3>
              <div className="content">
                <p className="parrafo-contacto-about">
                  <b>Matria. </b> Arquitectura de proyecto . Para la Quadriennal
                  de Praga Expuesto en la Galería Nacional de Praga. Artista:
                  Marta Pazos. Comisaria: Klarà Zieglerová
                </p>
              </div>
            </div>
            <hr />
            <div className="año-desplegable">
              <h3 className="year-title">2022</h3>
              <div className="content">
                <p className="parrafo-contacto-about">
                  <b>Contemplación. </b>Arquitectura de proyecto. Expuesto en
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
                  <b>Campo de Figos. </b>Arquitectura y coordinación de proyecto
                  . Expuesto en Museo do Gaias- Cidade da Cultura. Artista:
                  Marta Pazos. Comisarios: Miguel Ángel Cajigal y Deborah Garcia
                  Bello.
                </p>
              </div>
            </div>
          </div>
          <div className="category-professional">
            <h2 className="titulo-proyecto-charge">
              COORDINACIÓN DE PROYECTOS
            </h2>
            <div className="año-desplegable">
              <h3 className="year-title">2022</h3>
              <div className="content">
                <p className="parrafo-contacto-about">
                  <b>Safo. </b>Desarrollo y coordinación de escenografía.
                  Diseño: Marta Pazos. Dirigido por Marta Pazos. Estrenado en
                  Teatro Romano de Mérida. Teatre Romea de Barcelona. Teatros
                  del Canal sala Roja.
                </p>
              </div>
            </div>
            <hr />
            <div className="año-desplegable">
              <h3 className="year-title">2021</h3>
              <div className="content">
                <p className="parrafo-contacto-about">
                  <b>Hoax Hamlet. </b>Desarrollo y coordinación de escenografía.
                  Diseñada por Marta Pazos. Dir. Hugo Torres. Ciudad de la
                  Cultura. Santiago
                </p>
              </div>
            </div>
          </div>
          <div className="category-professional">
            <h2 className="titulo-proyecto-charge">AYUDANTÍAS</h2>
            <div className="año-desplegable">
              <h3 className="year-title">2024</h3>
              <div className="content">
                <p className="parrafo-contacto-about">
                  <b>Primera Sangre. </b>Ayudantía de escenografía para Blanca
                  Añón en CDN Teatro Valle Inclán. Sala Francisco Nieva.
                  Dirigido por María Velasco
                </p>
              </div>
            </div>
            <hr />
            <div className="año-desplegable">
              <h3 className="year-title">2023</h3>
              <div className="content">
                <p className="parrafo-contacto-about">
                  <b>Funfamentalmente Fantasías para la resistencia. </b>
                  Ayudantía de escenografía para Blanca Añón. Direccción:
                  Alfredo Sanzol . CDN Teatro Valle Inclán.
                </p>
                <p className="parrafo-contacto-about">
                  <b>As oito da tarde cando morren as nais. </b>Ayudantía de
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
                  <b>Lo Fingido verdadero. </b>Ayudantía de escenografía para
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
                  <b>Comedia sin título. </b>Ayudantía de escenografía para Max
                  Glaenzel. Dirigido por Marta Pazos. Estrenado en el Teatro
                  María Guerrero
                </p>
                <p className="parrafo-contacto-about">
                  <b>Othello. </b>Ayudantía y coordinación de escenografía.
                  Diseñada por Marta Pazos. Dirigida por Marta Pazos. Estrenada
                  en el Teatro de la Abadía
                </p>
              </div>
            </div>
          </div>
          <div className="category-professional">
            <h2 className="titulo-proyecto-charge">MOBILIARIO</h2>
            <div className="año-desplegable">
              <h3 className="year-title">2020</h3>
              <div className="content">
                <p className="parrafo-contacto-about">
                  <b>Kelly Deli. </b>Diseño, desarrollo y coordinación de
                  montaje de 17 Kioscos de Sushi para Carrefour y 3 para El
                  Corte Inglés.
                </p>
                <p className="parrafo-contacto-about">
                  <b>Anine Bing. </b>Diseño para shop in shop en El Corte
                  Inglés.
                </p>
                <p className="parrafo-contacto-about">
                  <b>The Knot</b>Pieza de mobiliario para Lambert
                </p>
              </div>
            </div>
            <hr />
            <div className="año-desplegable">
              <h3 className="year-title">2019</h3>
              <div className="content">
                <p className="parrafo-contacto-about">
                  <b>Brand. </b>Interiorismo de oficinas para talleres en Griñón
                </p>
                <p className="parrafo-contacto-about">
                  <b>Logista. </b>Creación, diseño y desarrollo de nuevo modelo
                  de estanco. Mobiliario e interiorismo.
                </p>
                <p className="parrafo-contacto-about">
                  <b>Renfe. </b>Desarrollo técnico de mural AVI.
                </p>
              </div>
            </div>
            <hr />
            <div className="año-desplegable">
              <h3 className="year-title">2018</h3>
              <div className="content">
                <p className="parrafo-contacto-about">
                  <b>Roberto Vicentti. </b>Diseño, desarrollo y coordinación de
                  montaje de 6 tiendas para El Corte Inglés.
                </p>
                <p className="parrafo-contacto-about">
                  <b>Viceroy. </b>Desarrollo de 17 tiendas tipo y 49 elementos
                  de mobiliario para El Corte Inglés.
                </p>
                <p className="parrafo-contacto-about">
                  <b>Gran Optic. </b>Mobiliario a medida para las dos ópticas de
                  la marca.
                </p>
              </div>
            </div>
          </div>
          <div className="category-professional">
            <h2 className="titulo-proyecto-charge">ARQUITECTO</h2>
            <div className="año-desplegable">
              <h3 className="year-title">2020</h3>
              <div className="content">
                <p className="parrafo-contacto-about">
                  <b>Vivienda en Alicante. </b>210 m2.
                </p>
                <p className="parrafo-contacto-about">
                  <b>Apartamento en Marqués de Vadillo. </b>80 m2.
                </p>
                <p className="parrafo-contacto-about">
                  <b>Goya Smart Coworking. </b>Oficinas en la calle Nuñez de
                  Balboa. 390 m2
                </p>
              </div>
            </div>
            <hr />
            <div className="año-desplegable">
              <h3 className="year-title">2019</h3>
              <div className="content">
                <p className="parrafo-contacto-about">
                  <b>9punto9. </b>Oficina para agencia de viajes en calle de
                  Nuremberg . 210 m2
                </p>
                <p className="parrafo-contacto-about">
                  <b>Vivienda en calle Antonio López. </b>97 m2.
                </p>
                <p className="parrafo-contacto-about">
                  <b>Vivienda en calle Doce de Octubre. </b>115 m2.
                </p>
                <p className="parrafo-contacto-about">
                  <b>Sincio. </b>Restaurante en el mercado de Antón Martín 30
                  m2.
                </p>
              </div>
            </div>
            <hr />
            <div className="año-desplegable">
              <h3 className="year-title">2018</h3>
              <div className="content">
                <p className="parrafo-contacto-about">
                  <b>Gran Optic Goya. </b>Óptica en la calle Goya. 520 m2.
                </p>
                <p className="parrafo-contacto-about">
                  <b>Gran Optic Vallecas. </b>Óptica en la avenida de la
                  Albufera. 120 m2.
                </p>
              </div>
            </div>
          </div>
          <div className="category-professional">
            <h2 className="titulo-proyecto-charge">ACTOR EN TEATRO</h2>
            <div className="año-desplegable">
              <h3 className="year-title">2024</h3>
              <div className="content">
                <p className="parrafo-contacto-about">
                  <b>El gran teatro del mundo. </b>
                  Teatro de la Comedia. Dirigido por Lluís Homar para la
                  Compañía Nacional de Teatro Clásico. Estreno en Festival de
                  Almagro. Teatro de la Comedia y Teatre Romea.
                </p>
              </div>
            </div>
            <hr />
            <div className="año-desplegable">
              <h3 className="year-title">2023</h3>
              <div className="content">
                <p className="parrafo-contacto-about">
                  <b>Arder y no quemarse. </b>
                  Teatro Español. Dirección: Íñigo Rodriguez Claro para la
                  compañía Grumelot. Texto: JoséPadilla
                </p>
                <p className="parrafo-contacto-about">
                  <b>Algunos días. </b>
                  Centro Dramático Nacional. Teatro María Guerrero.
                  Texto:Cristina Rojas. Dirección: Cristina Rojas para la
                  compañía Tenemos gato
                </p>
              </div>
            </div>
            <hr />
            <div className="año-desplegable">
              <h3 className="year-title">2022</h3>
              <div className="content">
                <p className="parrafo-contacto-about">
                  <b>Othello. </b>
                  Teatro de la Abadía. Compañía: Voadora. Dirección: MartaPazos.
                  Gira por España.
                </p>
                <p className="parrafo-contacto-about">
                  <b>Hoax Hamlet. </b>
                  Ciudad de la Cultura. Compañía: Voadora. Dirección Hugo
                  Torres.
                </p>
              </div>
            </div>
            <hr />
            <div className="año-desplegable">
              <h3 className="year-title">2021</h3>
              <div className="content">
                <p className="parrafo-contacto-about">
                  <b>Cluster. </b>
                  Teatro Español, Naves del Matadero. Teatro Lope de Vega,
                  Sevilla. Texto: Fernando Delgado-Hierro. Dirección: Juan
                  Ceacero para la compañía Exlímite.
                </p>
                <p className="parrafo-contacto-about">
                  <b>Los Remedios. </b>
                  Centro Dramático Nacional. Teatro María Guerrero. Sala de la
                  Princesa. Texto: Fernando Delgado. Dirección: Juan Ceacero,
                  para la compañía Exlímite. Reestrenado en Teatro Lara.{" "}
                  <i>*PremioMax:Autoríarevelación*</i>
                </p>
              </div>
            </div>
            <hr />
            <div className="año-desplegable">
              <h3 className="year-title">2020</h3>
              <div className="content">
                <p className="parrafo-contacto-about">
                  <b>Cucaracha con Paisaje de Fondo. </b>
                  Teatro Español y Teatro Quique San Francisco. Texto y
                  dirección: Javier Ballesteros.
                </p>
                <p className="parrafo-contacto-about">
                  <b>Poema de sangre. </b>
                  Estreno en sala Exlímite. Dirección: David Zinder y Sol Garre.
                </p>
              </div>
            </div>
            <hr />
            <div className="año-desplegable">
              <h3 className="year-title">2019</h3>
              <div className="content">
                <p className="parrafo-contacto-about">
                  <b>Recalificados. </b>
                  Sala Interperie teatro. Dirección:Alberto Amarilla.
                </p>
              </div>
            </div>
            <hr />
            <div className="año-desplegable">
              <h3 className="year-title">2018</h3>
              <div className="content">
                <p className="parrafo-contacto-about">
                  <b>Moongate. </b>
                  Sala Valle Incán RESAD, Madrid. Texto y dirección: Jorge
                  Navarro de Lemus.
                </p>
                <p className="parrafo-contacto-about">
                  <b>Maribel y la extraña familia. </b>
                  Teatro Quevedo, Madrid. Dirección: Javier G.Rojo. Compañía:
                  Ladalia Negra
                </p>
                <p className="parrafo-contacto-about">
                  <b>El mercader de Venecia. </b>
                  Sala García Lorca. RESAD. William Shakespeare, Dirección:
                  Antonia García.
                </p>
                <p className="parrafo-contacto-about">
                  <b>¡La cuenta por favor! </b>
                  Festival de microteatro de Larrés, Huesca. Dirección: Bárbara
                  Monzú y Pablo Chaves
                </p>
              </div>
            </div>
            <hr />
            <div className="año-desplegable">
              <h3 className="year-title">2017</h3>
              <div className="content">
                <p className="parrafo-contacto-about">
                  <b>Los bolsillos de Óscar M. </b>
                  Teatro Párraga, Murcia. Dirección: Lope Mayoral. Texto: Jorge
                  Navarro de Lemus.
                </p>
                <p className="parrafo-contacto-about">
                  <b>Días estupendos de AlfredoSanzol. </b>
                  Festival internacional de teatro de Rabat. Dirección: Antonia
                  García.
                </p>
                <p className="parrafo-contacto-about">
                  <b>Kvetch deStevenBerkoff. </b>
                  Sala Valle Inclán, RESAD, Madrid. Dirección: Álvaro Noto.
                </p>
                <p className="parrafo-contacto-about">
                  <b>Yo soy Pepe Postigo. </b>
                  Teatros Luchana, Nave73. Dirección: Jorge Navarro de Lemus.
                </p>
              </div>
            </div>
            <hr />
            <div className="año-desplegable">
              <h3 className="year-title">2016</h3>
              <div className="content">
                <p className="parrafo-contacto-about">
                  <b>Our TowndeThorntonWilder. </b>
                  Sala García Lorca. RESAD, Madrid. Dirección: Yolanda Porras.
                </p>
                <p className="parrafo-contacto-about">
                  <b>Días estupendos de AlfredoSanzol. </b>
                  Festival internacional de teatro de Rabat. Dirección: Antonia
                  García.
                </p>
                <p className="parrafo-contacto-about">
                  <b>NocturnosdeStephenSondheim. </b>
                  Festival internacional de teatro de Spoleto, Italia.
                  Dirección: Antonio Urbano.
                </p>
              </div>
            </div>
            <hr />
            <div className="año-desplegable">
              <h3 className="year-title">2015</h3>
              <div className="content">
                <p className="parrafo-contacto-about">
                  <b>Entremés de la Guitarra. </b>
                  Sala Valle Incán RESAD, Madrid. Dirección: Antonio Morales y
                  LeonoraLax.
                </p>
                <p className="parrafo-contacto-about">
                  <b>Tartufo, deMolière. </b>
                  Festival internacional de teatro de Agadir.{" "}
                  <i>*Premioamejoractor*</i> Dirección:JesúsG.Salgad
                </p>
              </div>
            </div>
          </div>
          <div className="category-professional">
            <h2 className="titulo-proyecto-charge">ACTOR EN AUDIOVISUAL</h2>
            <div className="año-desplegable">
              <h3 className="year-title">2023</h3>
              <div className="content">
                <p className="parrafo-contacto-about">
                  <b>Honor. </b>
                  Serie para ATRESplayer. Dirigida por Lluis Prieto y Chiqui
                  Carabante.
                </p>
              </div>
            </div>
            <hr />
            <div className="año-desplegable">
              <h3 className="year-title">2022</h3>
              <div className="content">
                <p className="parrafo-contacto-about">
                  <b>Valeria. </b>
                  Serie para Netflix. Dirigida por Inma Torrente y Nely Reguera.
                </p>
              </div>
            </div>
            <hr />
            <div className="año-desplegable">
              <h3 className="year-title">2021</h3>
              <div className="content">
                <p className="parrafo-contacto-about">
                  <b>Heridas. </b>
                  Serie para ATRESplayer. Dirigida por Tito López Amado.
                </p>
              </div>
            </div>
            <hr />
            <div className="año-desplegable">
              <h3 className="year-title">2020</h3>
              <div className="content">
                <p className="parrafo-contacto-about">
                  <b>Miss Futuro. </b>
                  Largometraje. Dirección: Antonio Morales.
                </p>
                <p className="parrafo-contacto-about">
                  <b>Una conversación circunstancial. </b>
                  Cortometraje. Dirección: Isidoro Valcárcel Medina.
                </p>
              </div>
            </div>
            <hr />
            <div className="año-desplegable">
              <h3 className="year-title">2019</h3>
              <div className="content">
                <p className="parrafo-contacto-about">
                  <b>Violeta no coge el ascensor. </b>
                  Largometraje. Dirección: Mamen Díaz y Violeta Rodríguez.
                </p>
              </div>
            </div>
            <hr />
            <div className="año-desplegable">
              <h3 className="year-title">2018</h3>
              <div className="content">
                <p className="parrafo-contacto-about">
                  <b>Monólogo del poeta. </b>
                  Cortometraje. Dirección: Rafael Casa Garnelo y Jesús Muñoz.
                  Productora: QubitSolvest
                </p>
              </div>
            </div>
            <hr />
            <div className="año-desplegable">
              <h3 className="year-title">2017</h3>
              <div className="content">
                <p className="parrafo-contacto-about">
                  <b>Beta. </b>
                  Cortometraje. Dirección: Jan Zemelka
                </p>
                <p className="parrafo-contacto-about">
                  <b>Selfie. </b>
                  Largometraje. (Pequeñaparte). Dirección: Víctor García León.
                  Productora: Gonita/ II Acto/ ApacheFilms.
                </p>
              </div>
            </div>
            <hr />
            <div className="año-desplegable">
              <h3 className="year-title">2016</h3>
              <div className="content">
                <p className="parrafo-contacto-about">
                  <b>Diplarama. </b>
                  Cortometraje. Dirección: Jan Zemelka
                </p>
                <p className="parrafo-contacto-about">
                  <b>Selfie. </b>
                  Serie Web. Dirección: Fernando Delgado.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button onClick={scrollToTop} className="scroll-to-top">
          ▲
        </button>
      </div>
    </section>
  );
}

export default About;
