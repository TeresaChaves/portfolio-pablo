import "./ColaDePez.css";

import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { Helmet } from "react-helmet";

function ColaDePez() {
  const [imagenAmpliada, setImagenAmpliada] = useState(null);
  const [imagenIndex, setImagenIndex] = useState(0);

  const handleImagenClick = (index) => {
    setImagenAmpliada(imagenes[index]);
    setImagenIndex(index);
  };

  const cerrarImagenAmpliada = () => {
    setImagenAmpliada(null);
  };

  const cloudinaryBaseUrl =
    "https://res.cloudinary.com/dlt2cjtvj/image/upload/f_auto/v1742902914/PORTFOLIO%20ESCENOGRAFIA/ColaDePez/";

  const imagePaths = [
    "subir3_i8m8g0.jpg",
    "subir2_vv4h7v.png",
    "s_uq9ike.jpg",
    "c_ohy9ba.jpg",
    "b_sfjk4b.jpg",
    "8_u6itig.jpg",
    "3_pabzlu.png",
    "6_ndzoxk.jpg",
    "1_abwps6.png",
    "2_wvjq1v.jpg",
  ];

  const imagenes = imagePaths.map((path) => `${cloudinaryBaseUrl}${path}`);

  const cambiarImagen = (direction) => {
    const newIndex =
      (imagenIndex + direction + imagenes.length) % imagenes.length;
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
          <title>Cola de Pez || Pablo Chaves</title>
          <meta
            name="description"
            content="Proyecto Cola de Pez de Pablo Chaves en Bastero Kulturgunea."
          />
        </Helmet>
        <div>
          <LazyLoadImage
            className="cover_colaPez"
            src={imagenes[imagenIndex]}
            alt={`Imagen ${imagenIndex + 1}`}
            effect="opacity" // Esto añadirá el efecto de desenfoque mientras la imagen carga
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
      <div className="grid-container">
        {imagenes.map((src, index) => (
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
