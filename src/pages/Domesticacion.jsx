import "./ColaDePez.css";
import uno from "../assets/Domesticacion/A LA DOMEST.jpg";
import dos from "../assets/Domesticacion/B LA DOMEST.jpg";
import tres from "../assets/Domesticacion/C LA DOMEST.jpg";
import cuatro from "../assets/Domesticacion/D LA DOMEST.jpg";
import cinco from "../assets/Domesticacion/E LA DOMEST.jpg";
import seis from "../assets/Domesticacion/F LA DOMEST.jpg";
import siete from "../assets/Domesticacion/G LA DOMEST.jpg";
import ocho from "../assets/Domesticacion/H LA DOMEST.jpg";
import nueve from "../assets/Domesticacion/I LA DOMEST.jpg";
import diez from "../assets/Domesticacion/J LA DOMEST.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { Helmet } from "react-helmet";

import React, { useState } from "react";

function Domesticacion() {
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
          <title>Domesticación || Pablo Chaves</title>
          <meta
            name="description"
            content="Proyecto Domesticación escenografía de Pablo Chaves estrenada en los Teatros del Canal"
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
          <i className="name-ficha">Estrenada en los Teatros del Canal</i>
          <div className="container-ficha-centrada">
            <i>
              Dirección artística, coreografía, dramaturgia, espacio escénico:
              <span>Luz Arcas</span> Espacio escénico:{" "}
              <span>: Luz Arcas y Pablo Chaves</span>
            </i>
            <i>
              Acompañamiento artístico y dramatúrgico{" "}
              <span>Victoria Aimé y Rafael SM Paniagua </span>
            </i>
            <i>
              Música: <span>Le Parody / </span> Iluminación:{" "}
              <span>Jorge Colomer / </span>Espacio sonoro:{" "}
              <span>Pablo Contreras</span>
            </i>{" "}
            <i>
              Texto: <span>:Luz Arcas y Abraham Gragera / </span> Vestuario:
              <span>
                Luz Arcas, Victoria Aime, Rafael SM Panigua Roberto Martínez
              </span>
            </i>{" "}
            <i>
              Foto y vídeo promocional: <span>Virginia Rota /</span> Diseño
              gráfico: <span>María Peinado</span>
            </i>
            <i>
              Dirección técnica: <span>Cristina L. Bolívar </span>{" "}
            </i>
            <i>
              Diseño y coordinación de producción:{" "}
              <span>Alex Foulkes y Alberto Núñez</span>
            </i>
            <i>
              Producción ejecutiva: <span>Fernando Jariego</span>{" "}
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
export default Domesticacion;
