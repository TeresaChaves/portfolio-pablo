import "./ColaDePez.css";

import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { Helmet } from "react-helmet";
import imageData from "../imagenes.json"; // Importa la imageData.coladepez de la carpeta

function ColaDePez() {
  const [imagenAmpliada, setImagenAmpliada] = useState(null);
  const [imagenIndex, setImagenIndex] = useState(0);

  const handleImagenClick = (index) => {
    setImagenAmpliada(imageData.coladepez[index]);
    setImagenIndex(index);
  };

  const cerrarImagenAmpliada = () => {
    setImagenAmpliada(null);
  };

  const cambiarImagen = (direction) => {
    const newIndex =
      (imagenIndex + direction + imageData.coladepez.length) %
      imageData.coladepez.length;
    setImagenAmpliada(imageData.coladepez[newIndex]);
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
          <title>Cola de Pez || Pablo Chaves</title>
          <meta
            name="description"
            content="Proyecto Cola de Pez de Pablo Chaves en Bastero Kulturgunea."
          />
        </Helmet>
        <div>
          <LazyLoadImage
            className="cover_colaPez"
            src={imageData.coladepez[imagenIndex]}
            alt={`Imagen ${imagenIndex + 1}`}
            effect="opacity" // Esto añadirá el efecto de desenfoque mientras la imagen carga
          />
          <button
            className="button-izquierda-cover"
            onClick={() =>
              setImagenIndex(
                (prevIndex) =>
                  (prevIndex - 1 + imageData.coladepez.length) %
                  imageData.coladepez.length
              )
            }>
            ❮
          </button>
          <button
            className="button-derecha-cover"
            onClick={() =>
              setImagenIndex(
                (prevIndex) => (prevIndex + 1) % imageData.coladepez.length
              )
            }>
            ❯
          </button>
        </div>
        <Indicadores total={imageData.coladepez.length} actual={imagenIndex} />
      </div>
      <div className="grid-container">
        {imageData.coladepez.map((src, index) => (
          <div
            key={index}
            className="grid-item"
            onClick={() => handleImagenClick(index)}>
            <LazyLoadImage
              src={src}
              alt={`Imagen Cola de pez ${index + 1}`}
              effect="blur"
            />
          </div>
        ))}
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
            <img
              src={imagenAmpliada}
              alt="Imagen Full Screen proyecto Pablo Chaves"
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
export default ColaDePez;
