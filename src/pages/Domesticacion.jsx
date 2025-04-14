import "./ColaDePez.css";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { Helmet } from "react-helmet";
import imageData from "../imagenes.json";

import React, { useState } from "react";

function Domesticacion() {
  const [imagenAmpliada, setImagenAmpliada] = useState(null);
  const [imagenIndex, setImagenIndex] = useState(0);

  const handleImagenClick = (index) => {
    setImagenAmpliada(imageData.domesticacion[index]);
    setImagenIndex(index);
  };

  const cerrarImagenAmpliada = () => {
    setImagenAmpliada(null);
  };

  const cambiarImagen = (direction) => {
    const newIndex =
      (imagenIndex + direction + imageData.domesticacion.length) %
      imageData.domesticacion.length;
    setImagenAmpliada(imageData.domesticacion[newIndex]);
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
            src={imageData.domesticacion[imagenIndex]}
            alt={`Imagen ${imagenIndex + 1}`}
            effect="opacity"
          />
          <button
            className="button-izquierda-cover"
            onClick={() =>
              setImagenIndex(
                (prevIndex) =>
                  (prevIndex - 1 + imageData.domesticacion.length) %
                  imageData.domesticacion.length
              )
            }>
            ❮
          </button>
          <button
            className="button-derecha-cover"
            onClick={() =>
              setImagenIndex(
                (prevIndex) => (prevIndex + 1) % imageData.domesticacion.length
              )
            }>
            ❯
          </button>
        </div>
        <Indicadores
          total={imageData.domesticacion.length}
          actual={imagenIndex}
        />
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
        <div className="grid-container">
          {imageData.domesticacion.map((img, index) => (
            <div
              key={index}
              className="grid-item"
              onClick={() => handleImagenClick(index)}>
              <LazyLoadImage
                src={img}
                alt={`Imagen ${index + 1} de domesticacion de Pablo Chaves`}
                effect="blur"
              />
            </div>
          ))}
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
