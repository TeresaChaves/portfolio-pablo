import "./ColaDePez.css";
import uno from "../assets/nofrente/1.jpg";
import dos from "../assets/nofrente/2.jpg";
import tres from "../assets/nofrente/3.jpg";
import cuatro from "../assets/nofrente/4.jpg";
import cinco from "../assets/nofrente/11.jpg";
import seis from "../assets/nofrente/6.jpg";
import siete from "../assets/nofrente/7.jpg";
import ocho from "../assets/nofrente/8.jpg";
import nueve from "../assets/nofrente/9.jpg";
import diez from "../assets/nofrente/10.jpg";
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { Helmet } from "react-helmet";
import imageData from "../imagenes.json"; // Importa la imageData.nofrente de la carpeta

function NoFrente() {
  const [imagenAmpliada, setImagenAmpliada] = useState(null);
  const [imagenIndex, setImagenIndex] = useState(0);

  const handleImagenClick = (index) => {
    setImagenAmpliada(imageData.nofrente[index]);
    setImagenIndex(index);
  };

  const cerrarImagenAmpliada = () => {
    setImagenAmpliada(null);
  };

  const cambiarImagen = (direction) => {
    console.log("ImagenIndex antes del cambio:", imagenIndex);
    const newIndex =
      (imagenIndex + direction + imageData.nofrente.length) %
      imageData.nofrente.length;
    console.log("Nuevo índice de imagen:", newIndex);
    setImagenAmpliada(imageData.nofrente[newIndex]);
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
          <title>No estoy de frente || Pablo Chaves</title>
          <meta
            name="description"
            content="Proyecto No estoy de frente escenografía de Pablo Chaves"
          />
        </Helmet>
        <div>
          <LazyLoadImage
            className="cover_colaPez"
            src={imageData.nofrente[imagenIndex]}
            alt={`Imagen ${imagenIndex + 1}`}
            effect="opacity"
          />
          <button
            className="button-izquierda-cover"
            onClick={() =>
              setImagenIndex(
                (prevIndex) =>
                  (prevIndex - 1 + imageData.nofrente.length) %
                  imageData.nofrente.length
              )
            }>
            ❮
          </button>
          <button
            className="button-derecha-cover"
            onClick={() =>
              setImagenIndex(
                (prevIndex) => (prevIndex + 1) % imageData.nofrente.length
              )
            }>
            ❯
          </button>
        </div>
        <Indicadores total={imageData.nofrente.length} actual={imagenIndex} />
      </div>

      <div class="container">
        <div className="container-ficha-centrada">
          <i className="name-ficha">Estrenada en La Fundición de Sevilla.</i>
          <div className="container-ficha-centrada">
            <i>
              Dirección: <span>Chiqui Carabante y Paco León </span> /
              Escenografía: <span>Pablo Chaves</span>
            </i>
            <i>
              Autoría: <span>MariPaz Sayago y Chiqui Carabante</span>
            </i>
            <i>
              Intérprete: <span>MariPaz Sayago </span> / Música:{" "}
              <span>Depipio</span>
            </i>{" "}
            <i>
              Iluminación: <span>Irene Cantero</span> / Fotografía:
              <span>María Artiaga y Concha de la Rosa / </span>
            </i>{" "}
          </div>
        </div>
        <div className="grid-container">
          {imageData.nofrente.map((img, index) => (
            <div
              key={index}
              className="grid-item"
              onClick={() => handleImagenClick(index)}>
              <LazyLoadImage
                src={img}
                alt={`Imagen ${
                  index + 1
                } de No estoy de frente de Pablo Chaves`}
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
export default NoFrente;
