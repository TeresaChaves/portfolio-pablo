import "./ColaDePez.css";
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import imageData from "../imagenes.json"; // Importa la imagenes de la carpeta

function Cucaracha() {
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
    setImagenAmpliada(imageData.cucarachas[index]);
    setImagenIndex(index);
  };

  const cerrarImagenAmpliada = () => {
    setImagenAmpliada(null);
  };

  const cambiarImagen = (direction) => {
    const newIndex =
      (imagenIndex + direction + imageData.cucarachas.length) %
      imageData.cucarachas.length;
    setImagenAmpliada(imageData.cucarachas[newIndex]);
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
          <title>Cucaracha con paisaje de fondo || Pablo Chaves</title>
          <meta
            name="description"
            content="Proyecto Cucaracha con paisaje de fondo escenografía de Pablo Chaves en Teatro Español y Quique San Francisco."
          />
        </Helmet>
        <div>
          <LazyLoadImage
            className="cover_colaPez"
            src={imageData.cucarachas[imagenIndex]}
            alt={`Imagen ${imagenIndex + 1}`}
            effect="opacity"
          />
          <button
            className="button-izquierda-cover"
            onClick={() =>
              setImagenIndex(
                (prevIndex) =>
                  (prevIndex - 1 + imageData.cucarachas.length) %
                  imageData.cucarachas.length
              )
            }>
            ❮
          </button>
          <button
            className="button-derecha-cover"
            onClick={() =>
              setImagenIndex(
                (prevIndex) => (prevIndex + 1) % imageData.cucarachas.length
              )
            }>
            ❯
          </button>
        </div>

        <Indicadores total={imageData.cucarachas.length} actual={imagenIndex} />
      </div>
      <div class="container">
        {isMobile ? (
          <div className="container-ficha-centrada">
            <i className="name-ficha">
              Estrenada en Teatro Español y Quique San Francisco
            </i>
            <i>
              Dramaturgia y dirección: <span>Javier Ballesteros </span>
            </i>
            <i>
              Escenografía y vestuario: <span>Pablo Chaves</span>
            </i>
            <i>
              Reparto:
              <span>
                Laura Barceló, Pablo Chaves, Eva Chocrón, Virginia de la Cruz,
                Matilde Gimeno, María Jáimez y June Velayos{" "}
              </span>{" "}
            </i>{" "}
            <i>
              Ayte. dirección <span>Víctor Nacarino </span>
            </i>
            <i>
              /Música:
              <span>Isabel Arranz </span>
            </i>{" "}
            <i>
              Coor. producción: <span>Raúl de la Torre</span>
            </i>
            <i>
              Ayudante de producción: <span>Juan Seade </span>
            </i>
            <i>
              Cartelería: <span>Alejandra Sánchez-Mateos</span>
            </i>
            <i>
              Producción: <span>Mujer en obras</span>
            </i>
          </div>
        ) : (
          <div className="container-ficha-centrada">
            <i className="name-ficha">
              Estrenada en Teatro Español y Quique San Francisco
            </i>
            <i>
              Dramaturgia y dirección: <span>Javier Ballesteros </span>
            </i>
            <i>
              Escenografía y vestuario: <span>Pablo Chaves</span>
            </i>
            <i>
              Reparto:
              <span>
                Laura Barceló, Pablo Chaves, Eva Chocrón, Virginia de la Cruz,
                Matilde Gimeno, María Jáimez y June Velayos{" "}
              </span>{" "}
            </i>{" "}
            <i>
              Ayte. dirección <span>Víctor Nacarino </span> /Música:
              <span>Isabel Arranz </span>
            </i>{" "}
            <i>
              Coor. producción: <span>Raúl de la Torre</span> / Ayudante de
              producción: <span>Juan Seade </span>
            </i>
            <i>
              Cartelería: <span>Alejandra Sánchez-Mateos</span>
            </i>
            <i>
              Producción: <span>Mujer en obras</span>
            </i>
          </div>
        )}

        <div className="grid-container">
          {imageData.cucarachas.map((img, index) => (
            <div
              key={index}
              className="grid-item"
              onClick={() => handleImagenClick(index)}>
              <LazyLoadImage
                src={img}
                alt={`Imagen ${
                  index + 1
                } de Cucaracha con paisaje de fondo de Pablo Chaves`}
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

export default Cucaracha;
