import "./ColaDePez.css";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import React, { useState } from "react";
import imageData from "../imagenes.json"; // Importa la imageData.lafortaleza de la carpeta

function Fortaleza() {
  const [imagenAmpliada, setImagenAmpliada] = useState(null);
  const [imagenIndex, setImagenIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleImagenClick = (index) => {
    setImagenAmpliada(imageData.lafortaleza[index]);
    setImagenIndex(index);
  };

  const cerrarImagenAmpliada = () => {
    setImagenAmpliada(null);
  };

  const cambiarImagen = (direction) => {
    const newIndex =
      (imagenIndex + direction + imageData.lafortaleza.length) %
      imageData.lafortaleza.length;
    console.log("Nuevo índice de imagen:", newIndex);
    setImagenAmpliada(imageData.lafortaleza[newIndex]);
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
          <title>La Fortaleza || Pablo Chaves</title>
          <meta
            name="description"
            content="Proyecto La fortaleza escenografía de Pablo Chaves<"
          />
        </Helmet>
        <div>
          <LazyLoadImage
            className="cover_colaPez"
            src={imageData.lafortaleza[imagenIndex]}
            alt={`Imagen ${imagenIndex + 1}`}
            effect="opacity"
          />
          <button
            className="button-izquierda-cover"
            onClick={() =>
              setImagenIndex(
                (prevIndex) =>
                  (prevIndex - 1 + imageData.lafortaleza.length) %
                  imageData.lafortaleza.length
              )
            }>
            ❮
          </button>
          <button
            className="button-derecha-cover"
            onClick={() =>
              setImagenIndex(
                (prevIndex) => (prevIndex + 1) % imageData.lafortaleza.length
              )
            }>
            ❯
          </button>
        </div>
        <Indicadores
          total={imageData.lafortaleza.length}
          actual={imagenIndex}
        />
      </div>
      <div class="container">
        <div className="container-ficha-centrada">
          <i className="name-ficha">Estrenada en el Teatro de la Comedia.</i>
          {isMobile ? (
            <div className="container-ficha-centrada">
              <i>
                Texto y dirección: <span>Lucía Carballal</span>
              </i>
              <i>
                Escenografía y vestuario: <span>Pablo Chaves</span>
              </i>
              <i>
                Iluminación: <span>Pilar Valdelvira / </span>
              </i>
              <i>
                Diseño de sonido<span>Benigno Moreno </span> Vídeoescena:{" "}
                <span>Elvira Ruiz Zurita / </span>
              </i>{" "}
              <i>
                texto vídeoescena: <span>: Pablo Carballal</span> Ayudante de
                dirección
                <span>Aitana Sar</span>
              </i>{" "}
              <i>
                Agradecimientos:{" "}
                <span>
                  Lola Luengo, Luis Sorolla, Marc Domingo Carulla, Fernando de
                  Retes, Aurelia González Y Sergio Adillo
                </span>{" "}
              </i>
              <i>Producción: Compañía Nacional de Teatro Clásico </i>
            </div>
          ) : (
            <div className="container-ficha-centrada">
              <i>
                Texto y dirección: <span>Lucía Carballal</span> Escenografía y
                vestuario: <span>Pablo Chaves</span>
              </i>
              <i>
                Iluminación: <span>Pilar Valdelvira / </span>
              </i>
              <i>
                Diseño de sonido<span>Benigno Moreno </span> Vídeoescena:{" "}
                <span>Elvira Ruiz Zurita / </span>
              </i>{" "}
              <i>
                texto vídeoescena: <span>: Pablo Carballal</span> Ayudante de
                dirección
                <span>Aitana Sar</span>
              </i>{" "}
              <i>
                Agradecimientos:{" "}
                <span>
                  Lola Luengo, Luis Sorolla, Marc Domingo Carulla, Fernando de
                  Retes, Aurelia González Y Sergio Adillo
                </span>{" "}
              </i>
              <i>Producción: Compañía Nacional de Teatro Clásico </i>
            </div>
          )}
        </div>
        <div className="grid-container">
          {imageData.lafortaleza.map((img, index) => (
            <div
              key={index}
              className="grid-item"
              onClick={() => handleImagenClick(index)}>
              <LazyLoadImage
                src={img}
                alt={`Imagen ${
                  index + 1
                } de la fortaleza de fondo de Pablo Chaves`}
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
export default Fortaleza;
