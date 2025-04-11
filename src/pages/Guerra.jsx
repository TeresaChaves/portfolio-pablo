import "./ColaDePez.css";
import uno from "../assets/guerra/A SOMOS LA GUERRA.jpg";
import dos from "../assets/guerra/B SOMOS LA GUERRA.jpg";
import tres from "../assets/guerra/C SOMOS LA GUERRA.jpg";
import cuatro from "../assets/guerra/D SOMOS LA GUERRA.jpg";

import cinco from "../assets/guerra/E SOMOS LA GUERRA.jpg";
import seis from "../assets/guerra/F SOMOS LA GUERRA.jpg";
import siete from "../assets/guerra/G SOMOS LA GUERRA.jpg";
import ocho from "../assets/guerra/H SOMOS LA GUERRA.jpg";
import nueve from "../assets/guerra/I SOMOS LA GUERRA.jpg";
import diez from "../assets/guerra/J SOMOS LA GUERRA.jpg";
import once from "../assets/guerra/K SOMOS LA GUERRA.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { Helmet } from "react-helmet";
import imageData from "../imagenes.json"; // Importa la imageData.guerra de la carpeta

import React, { useState } from "react";

function Guerra() {
  const [imagenAmpliada, setImagenAmpliada] = useState(null);
  const [imagenIndex, setImagenIndex] = useState(0);

  const handleImagenClick = (index) => {
    setImagenAmpliada(imageData.somoslaguerra[index]);
    setImagenIndex(index);
  };

  const cerrarImagenAmpliada = () => {
    setImagenAmpliada(null);
  };

  // const imagenes = [
  //   uno,
  //   dos,
  //   tres,
  //   cuatro,
  //   cinco,
  //   seis,
  //   siete,
  //   ocho,
  //   nueve,
  //   diez,
  //   once,
  // ];

  const cambiarImagen = (direction) => {
    const newIndex =
      (imagenIndex + direction + imageData.somoslaguerra.length) %
      imageData.somoslaguerra.length;
    console.log("Nuevo índice de imagen:", newIndex);
    setImagenAmpliada(imageData.somoslaguerra[newIndex]);
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
          <title>Somos la Guerra || Pablo Chaves</title>
          <meta
            name="description"
            content="Proyecto Somos la Guerra escenografía de Pablo Chaves<"
          />
        </Helmet>
        <div>
          <LazyLoadImage
            className="cover_colaPez"
            src={imageData.somoslaguerra[imagenIndex]}
            alt={`Imagen ${imagenIndex + 1}`}
            effect="opacity"
          />
          <button
            className="button-izquierda-cover"
            onClick={() =>
              setImagenIndex(
                (prevIndex) =>
                  (prevIndex - 1 + imageData.somoslaguerra.length) %
                  imageData.somoslaguerra.length
              )
            }>
            ❮
          </button>
          <button
            className="button-derecha-cover"
            onClick={() =>
              setImagenIndex(
                (prevIndex) => (prevIndex + 1) % imageData.somoslaguerra.length
              )
            }>
            ❯
          </button>
        </div>
        <Indicadores
          total={imageData.somoslaguerra.length}
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
          {imageData.somoslaguerra.map((img, index) => (
            <div
              key={index}
              className="grid-item"
              onClick={() => handleImagenClick(index)}>
              <LazyLoadImage
                src={img}
                alt={`Imagen ${index + 1} de Somos la Guerra de Pablo Chaves`}
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
export default Guerra;
