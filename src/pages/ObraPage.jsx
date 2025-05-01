import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import React from "react";
import { useObraData } from "../hooks/hook";
import { useState, useEffect } from "react";
import "./ObraPage.css";
import imageData from "../imagenes.json";

function ObraPage() {
  const { title, description, ficha, fichaMobile } = useObraData();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  const [imagenAmpliada, setImagenAmpliada] = useState(null);
  const [imagenIndex, setImagenIndex] = useState(0);

  const { id } = useParams();

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
    setImagenAmpliada(imageData[id][index]);
    setImagenIndex(index);
  };

  const cerrarImagenAmpliada = () => {
    setImagenAmpliada(null);
  };

  const cambiarImagen = (direction) => {
    const newIndex =
      (imagenIndex + direction + imageData[id].length) % imageData[id].length;
    setImagenAmpliada(imageData[id][newIndex]);
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
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
      </div>

      <div>
        <LazyLoadImage
          className="cover_colaPez"
          src={imageData[id][imagenIndex]}
          alt={`Imagen ${imagenIndex + 1}`}
          effect="opacity"
        />
        <button
          className="button-izquierda-cover"
          onClick={() =>
            setImagenIndex(
              (prevIndex) =>
                (prevIndex - 1 + imageData[id].length) % imageData[id].length
            )
          }>
          ❮
        </button>
        <button
          className="button-derecha-cover"
          onClick={() =>
            setImagenIndex(
              (prevIndex) => (prevIndex + 1) % imageData[id].length
            )
          }>
          ❯
        </button>
      </div>

      <Indicadores total={imageData[id].length} actual={imagenIndex} />

      <div class="container">
        {isMobile ? (
          <div className="ficha-wrapper">{ficha}</div>
        ) : (
          <div className="mobile-only">{fichaMobile}</div>
        )}

        <div className="grid-container">
          {imageData[id].map((img, index) => (
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

export default ObraPage;
