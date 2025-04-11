import "./ColaDePez.css";
import uno from "../assets/la-fortaleza/A LA FORTALEZA.jpeg";
import dos from "../assets/la-fortaleza/A2 LA FORTALEZA.jpeg";
import tres from "../assets/la-fortaleza/B LA FORTALEZA.jpg";
import cuatro from "../assets/la-fortaleza/C LA FORTALEZA.jpeg";
import cinco from "../assets/la-fortaleza/D LA FORTALEZA.jpg";

import seis from "../assets/la-fortaleza/F LA FORTALEZA.jpeg";
import siete from "../assets/la-fortaleza/G LA FORTALEZA.jpg";
import ocho from "../assets/la-fortaleza/H LA FORTALEZA.jpg";
import nueve from "../assets/la-fortaleza/I LA FORTALEZA.jpg";
import diez from "../assets/la-fortaleza/J LA FORTALEZA.jpg";
import once from "../assets/la-fortaleza/K LA FORTALEZA.jpg";
import doce from "../assets/la-fortaleza/L LA FORTALEZA.jpeg";
import trece from "../assets/la-fortaleza/M LA FORTALEZA.jpeg";
import catorce from "../assets/la-fortaleza/N LA FORTALEZA.jpeg";
import quince from "../assets/la-fortaleza/E LA FORTALEZA.jpeg";
import dieciseis from "../assets/la-fortaleza/O LA FORTALEZA.jpg";
import diecisiete from "../assets/la-fortaleza/P LA FORTALEZA.jpg";
import dieciocho from "../assets/la-fortaleza/Q LA FORTALEZA.png";
import diecinueve from "../assets/la-fortaleza/R LA FORTALEZA.png";
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
    diecisiete,
    dieciocho,
    diecinueve,
  ];

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
