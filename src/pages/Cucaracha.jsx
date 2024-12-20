import "./ColaDePez.css";
import uno from "../assets/cucaracha/0.jpg";
import dos from "../assets/cucaracha/0b.jpg";
import tres from "../assets/cucaracha/0c.jpg";
import cuatro from "../assets/cucaracha/0d.jpg";
import cinco from "../assets/cucaracha/1.jpg";
import seis from "../assets/cucaracha/3.jpg";
import siete from "../assets/cucaracha/6.jpg";
import ocho from "../assets/cucaracha/7.jpg";
import nueve from "../assets/cucaracha/8.jpg";
import diez from "../assets/cucaracha/9.png";
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

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
    setImagenAmpliada(imagenes[index]);
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
      (imagenIndex + direction + imagenes.length) % imagenes.length;
    console.log("Nuevo índice de imagen:", newIndex);
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
          <title>Cucaracha con paisaje de fondo || Pablo Chaves</title>
          <meta
            name="description"
            content="Proyecto Cucaracha con paisaje de fondo escenografía de Pablo Chaves en Teatro Español y Quique San Francisco."
          />
        </Helmet>
        <div>
          <LazyLoadImage
            className="cover_colaPez"
            src={imagenes[imagenIndex]}
            alt={`Imagen ${imagenIndex + 1}`}
            effect="opacity"
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

        <div class="grid-container">
          <div className="grid-item" onClick={() => handleImagenClick(0)}>
            <LazyLoadImage
              src={uno}
              alt="Imagen de Cucaracha con paisaje de fondo de Pablo Chaves"
              effect="blur"
            />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(1)}>
            <LazyLoadImage
              src={dos}
              alt="Imagen de Cucaracha con paisaje de fondo de Pablo Chaves"
              effect="blur"
            />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(2)}>
            <LazyLoadImage
              src={tres}
              alt="Imagen de Cucaracha con paisaje de fondo de Pablo Chaves"
              effect="blur"
            />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(3)}>
            <LazyLoadImage
              src={cuatro}
              alt="Imagen de Cucaracha con paisaje de fondo de Pablo Chaves"
              effect="blur"
            />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(4)}>
            <LazyLoadImage
              src={cinco}
              alt="Imagen de Cucaracha con paisaje de fondo de Pablo Chaves"
              effect="blur"
            />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(5)}>
            <LazyLoadImage
              src={seis}
              alt="Imagen de Cucaracha con paisaje de fondo de Pablo Chaves"
              effect="blur"
            />
          </div>

          <div className="grid-item" onClick={() => handleImagenClick(6)}>
            <LazyLoadImage
              src={ocho}
              alt="Imagen de Cucaracha con paisaje de fondo de Pablo Chaves"
              effect="blur"
            />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(7)}>
            <LazyLoadImage
              src={nueve}
              alt="Imagen de Cucaracha con paisaje de fondo de Pablo Chaves"
              effect="blur"
            />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(8)}>
            <LazyLoadImage
              src={diez}
              alt="Imagen de Cucaracha con paisaje de fondo de Pablo Chaves"
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
