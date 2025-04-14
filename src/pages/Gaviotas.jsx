import "./ColaDePez.css";

import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { Helmet } from "react-helmet";
import imageData from "../imagenes.json"; // Importa la imageData.gaviotas de la carpeta

function Gaviotas() {
  const [imagenAmpliada, setImagenAmpliada] = useState(null);
  const [imagenIndex, setImagenIndex] = useState(0);

  const handleImagenClick = (index) => {
    setImagenAmpliada(imageData.gaviotas[index]);
    setImagenIndex(index);
  };

  const cerrarImagenAmpliada = () => {
    setImagenAmpliada(null);
  };

  const cambiarImagen = (direction) => {
    console.log("ImagenIndex antes del cambio:", imagenIndex);
    const newIndex =
      (imagenIndex + direction + imageData.gaviotas.length) %
      imageData.gaviotas.length;
    console.log("Nuevo índice de imagen:", newIndex);
    setImagenAmpliada(imageData.gaviotas[newIndex]);
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
          <title>Gaviotas || Pablo Chaves</title>
          <meta
            name="description"
            content="Proyecto Gaviotas escenografía de Pablo Chaves<"
          />
        </Helmet>
        <div>
          <LazyLoadImage
            className="cover_colaPez"
            src={imageData.gaviotas[imagenIndex]}
            alt={`Imagen ${imagenIndex + 1}`}
            effect="opacity"
          />
          <button
            className="button-izquierda-cover"
            onClick={() =>
              setImagenIndex(
                (prevIndex) =>
                  (prevIndex - 1 + imageData.gaviotas.length) %
                  imageData.gaviotas.length
              )
            }>
            ❮
          </button>
          <button
            className="button-derecha-cover"
            onClick={() =>
              setImagenIndex(
                (prevIndex) => (prevIndex + 1) % imageData.gaviotas.length
              )
            }>
            ❯
          </button>
        </div>

        <Indicadores total={imageData.gaviotas.length} actual={imagenIndex} />
      </div>
      <div class="container">
        <div className="container-ficha-centrada">
          <i className="name-ficha">
            {" "}
            <i className="name-ficha">Estrenada en Exlímite y Nave 73</i>
          </i>
          <i>
            Dirección: <span>Amanda Recacha y Rodolfo Sacristán / </span> /
            Escenografía y vestuario: <span>Pablo Chaves Maza</span>
          </i>
          <i>
            Autoría: <span>Adaptación libre por Gritadero Teatro / </span>
            Producción:<span>Gritadero Teatro </span>
          </i>
          <i>
            Iluminación: <span>Antonio Colomo Gragera</span>
          </i>{" "}
          <i>
            Diseño de cartel: <span>Emiliano Cano / </span> Fotografía
            <span>Luz Soria</span>
          </i>{" "}
          <i>
            Prensa: <span>María Díaz</span>
          </i>{" "}
        </div>
        <div className="grid-container">
          {imageData.gaviotas.map((img, index) => (
            <div
              key={index}
              className="grid-item"
              onClick={() => handleImagenClick(index)}>
              <LazyLoadImage
                src={img}
                alt={`Imagen ${index + 1} de gaviotas de fondo de Pablo Chaves`}
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
export default Gaviotas;
