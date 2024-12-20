import "./ColaDePez.css";
import uno from "../assets/tablao/A Tablao.jpg";
import dos from "../assets/tablao/B Tablao.jpg";
import tres from "../assets/tablao/C Tablao.jpg";
import cuatro from "../assets/tablao/D Tablao.jpg";
import cinco from "../assets/tablao/E Tablao.png";
import seis from "../assets/tablao/F Tablao.png";
import siete from "../assets/tablao/G Tablao.png";
import ocho from "../assets/tablao/H Tablao.jpg";
import nueve from "../assets/tablao/I Tablao.jpg";
import diez from "../assets/tablao/J Tablao.jpg";
import once from "../assets/tablao/K Tablao.jpg";
import doce from "../assets/tablao/L Tablao.jpg";
import trece from "../assets/tablao/M Tablao.jpg";
import catorce from "../assets/tablao/N Tablao.jpg";
import quince from "../assets/tablao/O Tablao.png";
import dieciseis from "../assets/tablao/P Tablao.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { Helmet } from "react-helmet";

import React, { useState } from "react";

function Tablao() {
  const [imagenAmpliada, setImagenAmpliada] = useState(null);
  const [imagenIndex, setImagenIndex] = useState(0);

  const handleImagenClick = (index) => {
    setImagenAmpliada(imagenes[index]);
    setImagenIndex(index);
  };

  const cerrarImagenAmpliada = () => {
    setImagenAmpliada(null);
  };

  const imagenes = [
    uno,
    dos,
    tres,
    cuatro,
    cinco,
    seis,
    siete,
    ocho,
    nueve,
    diez,
    once,
    doce,
    trece,
    catorce,
    quince,
    dieciseis,
  ];

  const cambiarImagen = (direction) => {
    const newIndex =
      (imagenIndex + direction + imagenes.length) % imagenes.length;
    console.log("Nuevo índice de imagen:", newIndex);
    setImagenAmpliada(imagenes[newIndex]);
    setImagenIndex(newIndex);
  };
  function Indicadores({ total, actual }) {
    const puntos = Array.from({ length: total }, (_, index) => (
      <span key={index} className={index === actual ? "activo" : ""} />
    ));

    return <div className="indicadores">{puntos}</div>;
  }

  return (
    <section
      className="home-margin"
      aria-label="Pablo Chaves Maza, escenógrafo en España especializado en diseño de escenografías teatrales">
      <div>
        {/* <header>
          <h1>Cola de pez</h1>
        </header> */}
        <Helmet>
          <title>Tablao || Pablo Chaves</title>
          <meta
            name="description"
            content="Proyecto Tablao escenografía de Pablo Chaves"
          />
        </Helmet>
        <div>
          <LazyLoadImage
            className="cover_colaPez"
            src={imagenes[imagenIndex]}
            alt={`Imagen ${imagenIndex + 1}`}
            effect="opacity"
          />
          <button
            className="button-izquierda-cover"
            onClick={() =>
              setImagenIndex(
                (prevIndex) =>
                  (prevIndex - 1 + imagenes.length) % imagenes.length
              )
            }>
            ❮
          </button>
          <button
            className="button-derecha-cover"
            onClick={() =>
              setImagenIndex((prevIndex) => (prevIndex + 1) % imagenes.length)
            }>
            ❯
          </button>
        </div>
        <Indicadores total={imagenes.length} actual={imagenIndex} />
      </div>
      <div class="container">
        <div className="container-ficha-centrada">
          <i className="name-ficha">Estrenada en Ca2m y Condeduque.</i>
          <div className="container-ficha-centrada">
            <i>
              Creado por <span>Ernesto Artillo </span> Arquitecto del proyecto{" "}
              <span>Pablo Chaves</span>/Asesoría científica{" "}
              <span>Alicia Navarro</span>
            </i>
            <i>
              Formación:- Guitarra <span>Yerai Cortés </span> - Cante{" "}
              <span>Niño de Elche </span>- Baile{" "}
              <span>Andrés Marín y Rocío Molina</span>
            </i>{" "}
            <i>
              Distribución y coordinación de producción{" "}
              <span>Cal Producciones</span> Ayudante de dirección
              <span>Aitana Sar</span>
            </i>{" "}
            <i>
              Coordinación técnica <span>Txisco Velasco /</span> Diseño
              iluminación <span>Antonio Valiente AAI</span>
            </i>
            <i>
              Sonido <span>Víctor Tomé / </span> Maquinaria{" "}
              <span>Jorge Limosnita </span> Asistencia en iluminación{" "}
              <span>Suh- Güein</span>
            </i>
            <i>
              Una producción <span>del Museo Ca2m</span>{" "}
            </i>
            <i>
              Con el apoyo de <span>Corral de La Morería</span>
            </i>
          </div>
        </div>
        <div class="grid-container">
          <div className="grid-item" onClick={() => handleImagenClick(0)}>
            <LazyLoadImage src={uno} alt="Imagen 3" effect="blur" />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(1)}>
            <LazyLoadImage src={dos} alt="Imagen 3" effect="blur" />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(2)}>
            <LazyLoadImage src={tres} alt="Imagen 3" effect="blur" />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(3)}>
            <LazyLoadImage src={cuatro} alt="Imagen 3" effect="blur" />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(4)}>
            <LazyLoadImage src={cinco} alt="Imagen 3" effect="blur" />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(5)}>
            <LazyLoadImage src={seis} alt="Imagen 3" effect="blur" />
          </div>

          <div className="grid-item" onClick={() => handleImagenClick(6)}>
            <LazyLoadImage src={ocho} alt="Imagen 3" effect="blur" />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(7)}>
            <LazyLoadImage src={nueve} alt="Imagen 3" effect="blur" />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(8)}>
            <LazyLoadImage src={diez} alt="Imagen 3" effect="blur" />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(9)}>
            <LazyLoadImage src={once} alt="Imagen 3" effect="blur" />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(10)}>
            <LazyLoadImage src={doce} alt="Imagen 3" effect="blur" />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(11)}>
            <LazyLoadImage src={trece} alt="Imagen 3" effect="blur" />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(12)}>
            <LazyLoadImage src={catorce} alt="Imagen 3" effect="blur" />
          </div>
        </div>
      </div>
      <div
        className={`imagen-ampliada ${imagenAmpliada ? "visible" : ""}`}
        onClick={cerrarImagenAmpliada}>
        {imagenAmpliada && (
          <>
            <button
              className="button-izquierda"
              onClick={(e) => {
                e.stopPropagation();
                cambiarImagen(-1);
              }}>
              ❮
            </button>
            <LazyLoadImage
              src={imagenAmpliada}
              alt="Imagen Full Screnn proyecto Pablo Chaves"
            />
            <button
              className="button-derecha"
              onClick={(e) => {
                e.stopPropagation();
                cambiarImagen(1);
              }}>
              ❯
            </button>
          </>
        )}
      </div>
    </section>
  );
}
export default Tablao;
