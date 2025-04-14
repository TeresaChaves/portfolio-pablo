import "./ColaDePez.css";

import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { Helmet } from "react-helmet";
import imageData from "../imagenes.json"; // Importa la imagedata.elbanquete de la carpeta

function ElBanquete() {
  const [imagenAmpliada, setImagenAmpliada] = useState(null);
  const [imagenIndex, setImagenIndex] = useState(0);

  const handleImagenClick = (index) => {
    setImagenAmpliada(imageData.elbanquete[index]);
    setImagenIndex(index);
  };

  const cerrarImagenAmpliada = () => {
    setImagenAmpliada(null);
  };

  const cambiarImagen = (direction) => {
    console.log("ImagenIndex antes del cambio:", imagenIndex);
    const newIndex =
      (imagenIndex + direction + imageData.elbanquete.length) %
      imageData.elbanquete.length;
    setImagenAmpliada(imageData.elbanquete[newIndex]);
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
          <title>El Banquete || Pablo Chaves</title>
          <meta
            name="description"
            content="Proyecto El Banquete escenografía de Pablo Chaves estrenada en Exlímite y Nave 73<"
          />
        </Helmet>
        <div>
          <LazyLoadImage
            className="cover_colaPez"
            src={imageData.elbanquete[imagenIndex]}
            alt={`Imagen ${imagenIndex + 1}`}
            effect="opacity"
          />
          <button
            className="button-izquierda-cover"
            onClick={() =>
              setImagenIndex(
                (prevIndex) =>
                  (prevIndex - 1 + imageData.elbanquete.length) %
                  imageData.elbanquete.length
              )
            }>
            ❮
          </button>
          <button
            className="button-derecha-cover"
            onClick={() =>
              setImagenIndex(
                (prevIndex) => (prevIndex + 1) % imageData.elbanquete.length
              )
            }>
            ❯
          </button>
        </div>

        <Indicadores total={imageData.elbanquete.length} actual={imagenIndex} />
      </div>
      <div class="container">
        <div className="container-ficha-centrada">
          <i className="name-ficha">Estrenada en Exlímite y Nave 73</i>
          <i>
            Dirección: <span>Adrián Pulido</span>
          </i>
          <i>
            Escenografía y vestuario <span>Pablo Chaves</span>
          </i>
          <i>
            Texto: <span>Tony Galán</span>
          </i>
          <i>
            Mundo sonoro: :
            <span>Adrián Pulido, Pablo Sánchez y Juan Sánchez </span>
          </i>{" "}
          <i>
            Dirección de movimiento: <span>Juando Martínez Montiel / </span>
            Diseño de Luces
            <span>Alvaro Guisado Garavito</span>
          </i>{" "}
          <i>
            Ayudantía de dirección: <span>: Iñaki Danta </span> /Fotografía y
            cartel: <span>Xose Roi Martínez</span>
          </i>
          <i>
            Comunicación y prensa: <span>de Amanda H C - Proyecto Duas</span>
          </i>
        </div>
        <div className="grid-container">
          {imageData.elbanquete.map((img, index) => (
            <div
              key={index}
              className="grid-item"
              onClick={() => handleImagenClick(index)}>
              <LazyLoadImage
                src={img}
                alt={`Imagen ${index + 1} el Banquete de fondo de Pablo Chaves`}
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
            <img
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
export default ElBanquete;
