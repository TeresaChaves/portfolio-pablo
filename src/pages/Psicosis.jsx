import "./ColaDePez.css";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { Helmet } from "react-helmet";
import imageData from "../imagenes.json"; // Importa la imageData.psicosis de la carpeta

import React, { useState } from "react";

function Psicosis() {
  const [imagenAmpliada, setImagenAmpliada] = useState(null);
  const [imagenIndex, setImagenIndex] = useState(0);

  const handleImagenClick = (index) => {
    setImagenAmpliada(imageData.psicosis[index]);
    setImagenIndex(index);
  };

  const cerrarImagenAmpliada = () => {
    setImagenAmpliada(null);
  };

  const cambiarImagen = (direction) => {
    const newIndex =
      (imagenIndex + direction + imageData.psicosis.length) %
      imageData.psicosis.length;
    console.log("Nuevo índice de imagen:", newIndex);
    setImagenAmpliada(imageData.psicosis[newIndex]);
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
          <title>Psicosis 4.48 || Pablo Chaves</title>
          <meta
            name="description"
            content="Proyecto Psicosis 4.48 escenografía de Pablo Chaves"
          />
        </Helmet>
        <div>
          <LazyLoadImage
            className="cover_colaPez"
            src={imageData.psicosis[imagenIndex]}
            alt={`Imagen ${imagenIndex + 1}`}
            effect="opacity"
          />
          <button
            className="button-izquierda-cover"
            onClick={() =>
              setImagenIndex(
                (prevIndex) =>
                  (prevIndex - 1 + imageData.psicosis.length) %
                  imageData.psicosis.length
              )
            }>
            ❮
          </button>
          <button
            className="button-derecha-cover"
            onClick={() =>
              setImagenIndex(
                (prevIndex) => (prevIndex + 1) % imageData.psicosis.length
              )
            }>
            ❯
          </button>
        </div>
        <Indicadores total={imageData.psicosis.length} actual={imagenIndex} />
      </div>
      <div class="container">
        <div className="container-ficha-centrada">
          <i className="name-ficha">Estrenada en el Teatro Español</i>
          <div className="container-ficha-centrada">
            <i>
              Dirección: <span>Luz Arcas - La Phármaco</span> Con{" "}
              <span>Natalia Huarte</span>
            </i>
            <i>
              Diseño de escenografía: <span>Pablo Chaves</span>
            </i>
            <i>
              Diseño de escenografía: <span>Jorge Colomer / </span> Diseño de
              vestuario: <span>Luz Arcas / </span> Composición música original:{" "}
              <span>Adrián Foulkes</span>
            </i>
            <i>
              Diseño de espacio sonoro: <span>Pablo Contreras / </span>{" "}
              Asistencia artística:
              <span>Victoria Aime</span>
            </i>{" "}
            <i>
              Colaboración artística: <span>Sebastián Vogler </span>/ Mirada
              externa: <span>Teresa Casas</span>
            </i>
            <i>
              Ayudante de dirección: <span>Javier L. Patiño </span> / Residente
              de ayudantía de dirección<span>Cristina Hermida</span>
            </i>
            <i>Una coproducción del Teatro Español y La Phármaco</i>
          </div>
        </div>
        <div className="grid-container">
          {imageData.psicosis.map((img, index) => (
            <div
              key={index}
              className="grid-item"
              onClick={() => handleImagenClick(index)}>
              <LazyLoadImage
                src={img}
                alt={`Imagen ${index + 1} de Psicosis de Pablo Chaves`}
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
export default Psicosis;
