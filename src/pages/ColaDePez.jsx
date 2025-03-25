import "./ColaDePez.css";
import uno from "../assets/cola-de-pez/1.png";
import dos from "../assets/cola-de-pez/2.jpg";
import tres from "../assets/cola-de-pez/3.png";
import cuatro from "../assets/cola-de-pez/6.jpg";
import cinco from "../assets/cola-de-pez/8.jpg";
import seis from "../assets/cola-de-pez/b.jpeg";
import siete from "../assets/cola-de-pez/c.jpeg";
import ocho from "../assets/cola-de-pez/s.jpeg";
import nueve from "../assets/cola-de-pez/subir2.png";
import diez from "../assets/cola-de-pez/subir3.jpg";
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

  const uno =
    "https://res.cloudinary.com/dlt2cjtvj/image/upload/v1742902921/PORTFOLIO%20ESCENOGRAFIA/ColaDePez/subir3_i8m8g0.jpg";
  const dos =
    "https://res.cloudinary.com/dlt2cjtvj/image/upload/v1742902920/PORTFOLIO%20ESCENOGRAFIA/ColaDePez/subir2_vv4h7v.png";
  const tres =
    " https://res.cloudinary.com/dlt2cjtvj/image/upload/v1742902919/PORTFOLIO%20ESCENOGRAFIA/ColaDePez/s_uq9ike.jpg";
  const cuatro =
    "https://res.cloudinary.com/dlt2cjtvj/image/upload/v1742902919/PORTFOLIO%20ESCENOGRAFIA/ColaDePez/c_ohy9ba.jpg";
  const cinco =
    "https://res.cloudinary.com/dlt2cjtvj/image/upload/v1742902918/PORTFOLIO%20ESCENOGRAFIA/ColaDePez/b_sfjk4b.jpg";
  const seis =
    "https://res.cloudinary.com/dlt2cjtvj/image/upload/v1742902917/PORTFOLIO%20ESCENOGRAFIA/ColaDePez/8_u6itig.jpg";
  const siete =
    "https://res.cloudinary.com/dlt2cjtvj/image/upload/v1742902916/PORTFOLIO%20ESCENOGRAFIA/ColaDePez/3_pabzlu.png";
  const ocho =
    "https://res.cloudinary.com/dlt2cjtvj/image/upload/v1742902916/PORTFOLIO%20ESCENOGRAFIA/ColaDePez/6_ndzoxk.jpg";
  const nueve =
    "https://res.cloudinary.com/dlt2cjtvj/image/upload/v1742902914/PORTFOLIO%20ESCENOGRAFIA/ColaDePez/1_abwps6.png";
  const diez =
    "https://res.cloudinary.com/dlt2cjtvj/image/upload/v1742902915/PORTFOLIO%20ESCENOGRAFIA/ColaDePez/2_wvjq1v.jpg";
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
  ];

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
      <div class="container">
        <div className="container-ficha-centrada">
          <i className="name-ficha">Estrenada en Bastero Kulturgunea.</i>
          <div className="container-ficha-centrada">
            <i>
              Dirección: <span>Javier Lara</span> / Espacio escénico:{" "}
              <span>Pablo Chaves</span>
            </i>
            <i>
              Intérprete: <span>Egoitz Sánchez</span>
            </i>
            <i>
              Diseño de iluminación:<span>Lola Barroso </span> / Ayudante de
              iluminación: <span>Elena Alejandre</span>
            </i>{" "}
            <i>
              Diseño de vestuario: <span>Marta Murillo</span> / Diseño de
              sonido:
              <span>Pablo Martínez</span>
            </i>{" "}
            <i>
              Directora de producción: <span>Milena Suárez</span> / Ayudante de
              producción: <span>Paula Pina</span>
            </i>
            <i>
              Equipo S. Cervantina: <span>Ana Carrera, Jaime Saavedra</span> /
              Edición de visuales: <span>Ana Caro</span>
            </i>
            <i>
              Diseño gráfico: <span>Jesús Bosqued </span>/Interpretación:{" "}
              <span>Celia Freijeiro</span>
            </i>
            <i>Una producción de la Sociedad Cervantina</i>
            <i>con el apoyo de INAEM y Fundación La Caixa</i>
          </div>
        </div>
        <div class="grid-container">
          <div className="grid-item" onClick={() => handleImagenClick(0)}>
            <LazyLoadImage
              src={uno}
              alt="Imagen Cola de pez de Pablo Chaves"
              effect="blur"
            />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(1)}>
            <LazyLoadImage
              src={dos}
              alt="Imagen Cola de pez de Pablo Chaves"
              effect="blur"
            />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(2)}>
            <LazyLoadImage
              src={tres}
              alt="Imagen Cola de pez de Pablo Chaves"
              effect="blur"
            />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(3)}>
            <LazyLoadImage
              src={cuatro}
              alt="Imagen Cola de pez de Pablo Chaves"
              effect="blur"
            />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(4)}>
            <LazyLoadImage
              src={cinco}
              alt="Imagen Cola de pez de Pablo Chaves"
              effect="blur"
            />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(5)}>
            <LazyLoadImage
              src={seis}
              alt="Imagen Cola de pez de Pablo Chaves"
              effect="blur"
            />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(6)}>
            <LazyLoadImage
              src={ocho}
              alt="Imagen Cola de pez de Pablo Chaves"
              effect="blur"
            />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(7)}>
            <LazyLoadImage
              src={nueve}
              alt="Imagen Cola de pez de Pablo Chaves"
              effect="blur"
            />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(8)}>
            <LazyLoadImage
              src={diez}
              alt="Imagen Cola de pez de Pablo Chaves"
              effect="blur"
            />
          </div>
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
export default ColaDePez;
