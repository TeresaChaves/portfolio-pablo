import "./ColaDePez.css";
import uno from "../assets/prueba/A marcela.jpg";
import dos from "../assets/prueba/B Marcela.jpg";
import tres from "../assets/prueba/C Marcela.jpg";
import cuatro from "../assets/prueba/C Marcela.jpg";
import cinco from "../assets/prueba/D Marcela.jpg";
import seis from "../assets/prueba/F Marcela.jpg";
import siete from "../assets/prueba/G Marcela.jpg";
import ocho from "../assets/prueba/H Marcela.jpg";
import nueve from "../assets/prueba/I Marcela.jpg";
import diez from "../assets/prueba/J Marcela.jpg";
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import imageData from "../imagenes.json"; // Importa la imageData.marcela de la carpeta
// Importa la imageData.marcela de la carpeta

function Marcela() {
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
    setImagenAmpliada(imageData.marcela[index]);
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
  ];

  const cambiarImagen = (direction) => {
    console.log("ImagenIndex antes del cambio:", imagenIndex);
    const newIndex =
      (imagenIndex + direction + imageData.marcela.length) %
      imageData.marcela.length;
    console.log("Nuevo índice de imagen:", newIndex);
    setImagenAmpliada(imageData.marcela[newIndex]);
    setImagenIndex(newIndex);
  };
  function Indicadores({ total, actual }) {
    const puntos = Array.from({ length: total }, (_, index) => (
      <span key={index} className={index === actual ? "activo" : ""} />
    ));

    return <div className="indicadores">{puntos}</div>;
  }

  return (
    <section className="home-margin-marcela">
      <div>
        {/* <header>
          <h1>Cola de pez</h1>
        </header> */}
        <Helmet>
          <title>Marcela: Una canción de Cervantes || Pablo Chaves</title>
          <meta
            name="description"
            content="Proyecto Marcela: Una canción de Cervantes escenografía de Pablo Chaves"
          />
        </Helmet>
        <div>
          <LazyLoadImage
            className="cover_colaPez"
            src={imageData.marcela[imagenIndex]}
            alt={`Imagen ${imagenIndex + 1}`}
            effect="blur"
          />
          <button
            className="button-izquierda-cover"
            onClick={() =>
              setImagenIndex(
                (prevIndex) =>
                  (prevIndex - 1 + imageData.marcela.length) %
                  imageData.marcela.length
              )
            }>
            ❮
          </button>
          <button
            className="button-derecha-cover"
            onClick={() =>
              setImagenIndex(
                (prevIndex) => (prevIndex + 1) % imageData.marcela.length
              )
            }>
            ❯
          </button>
        </div>
        <Indicadores total={imageData.marcela.length} actual={imagenIndex} />
      </div>

      <div class="container">
        <div className="container-ficha-centrada">
          <div className="container-ficha-centrada">
            <i className="name-ficha">Estrenada en la Sala Cervantina.</i>
            {isMobile ? (
              <>
                <i>
                  Dirección: <span>Leticia Dolera / </span> Dramaturgia:{" "}
                  <span>María Folguera</span>
                </i>
                <i>
                  Diseño espacio escénico <span>Pablo Chaves</span>
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
                  Directora de producción: <span>Milena Suárez</span> / Ayudante
                  de producción: <span>Paula Pina</span>
                </i>
                <i>
                  Equipo S. Cervantina: <span>Ana Carrera, Jaime Saavedra</span>{" "}
                  / Edición de visuales: <span>Ana Caro</span>
                </i>
                <i>
                  Diseño gráfico: <span>Jesús Bosqued </span>/Interpretación:{" "}
                  <span>Celia Freijeiro</span>
                </i>
                <i>Una producción de la Sociedad Cervantina</i>
                <i>con el apoyo de INAEM y Fundación La Caixa</i>
              </>
            ) : (
              <>
                <i>
                  Dirección: <span>Leticia Dolera / </span> Dramaturgia:{" "}
                  <span>María Folguera</span>/ Diseño espacio escénico{" "}
                  <span>Pablo Chaves</span>
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
                  Directora de producción: <span>Milena Suárez</span> / Ayudante
                  de producción: <span>Paula Pina</span>
                </i>
                <i>
                  Equipo S. Cervantina: <span>Ana Carrera, Jaime Saavedra</span>{" "}
                  / Edición de visuales: <span>Ana Caro</span>
                </i>
                <i>
                  Diseño gráfico: <span>Jesús Bosqued </span>/Interpretación:{" "}
                  <span>Celia Freijeiro</span>
                </i>
                <i>Una producción de la Sociedad Cervantina</i>
                <i>con el apoyo de INAEM y Fundación La Caixa</i>
              </>
            )}
          </div>
        </div>
        <div className="grid-container">
          {imageData.marcela.map((img, index) => (
            <div
              key={index}
              className="grid-item"
              onClick={() => handleImagenClick(index)}>
              <LazyLoadImage
                src={img}
                alt={`Imagen ${index + 1} de Marcela de Pablo Chaves`}
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
export default Marcela;
